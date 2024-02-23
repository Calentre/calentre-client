import { NextRequest, NextResponse } from 'next/server';

export function GET(request: Request | NextRequest) {
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
