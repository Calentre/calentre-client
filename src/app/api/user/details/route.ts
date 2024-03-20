import { NextRequest, NextResponse } from 'next/server';

export function GET(request: Request | NextRequest) {
  try {
    const url = new URL(request.url);
    const userName = url.searchParams.get('user');

    // TODO: logic to retrieve user data from supabase (with prisma) using userName constant

    const DEMO_EVENTS_OWNER = {
      name: 'Patrick Musa',
      avatar: 'some_picture',
      userName,
      description:
        'I help you overcome obstacles, set meaningful goals, and create a purposeful, confident, and fulfilling life.',
    };

    return NextResponse.json(
      { user: DEMO_EVENTS_OWNER, ok: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { user: null, error: `${error}`, ok: false },
      { status: 400 }
    );
  }
}
