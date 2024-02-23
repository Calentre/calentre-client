import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserDetails = async (userIdOrUserName?: string) => {
  try {
    if (!userIdOrUserName) {
      throw 'no user id found';
    }
    const user = await prisma.users.findUnique({
      where: {
        id: userIdOrUserName,
      },
    });

    const events = await prisma.events.findMany({
      where: { user_id: userIdOrUserName },
    });

    return { user, ok: true, events };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const userNotFoundError = error.message.includes(
        'Inconsistent column data: Error creating UUID, invalid character: expected an optional prefix of `urn:uuid:` followed by [0-9a-fA-F-], found `p` at 1'
      );

      return {
        error: userNotFoundError ? '404: User not found' : error.message,
        ok: false,
        user: null,
      };
    } else {
      return { error, ok: false, user: null };
    }
  }
};
