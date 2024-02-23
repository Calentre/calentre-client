import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request | NextRequest) {
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
