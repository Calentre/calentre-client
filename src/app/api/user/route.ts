import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(request: NextApiRequest) {
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
