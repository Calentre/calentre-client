// single prisma instance
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prisma = prismaClientSingleton();

export default prisma;
