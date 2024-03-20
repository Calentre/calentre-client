import { groupSchedulesByDay } from '@/helpers/events';
import { ScheduleItem } from '@/types/meetings';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: Request | NextRequest) {
  try {
    const url = new URL(request.url);
    const eventName = url.searchParams.get('event');

    console.log(eventName); // TODO: remove

    // TODO: logic to retrieve event schedules from supabase (with prisma) using eventName constant

    const DEMO_SCHEDULES: ScheduleItem[] = [
      {
        date: new Date(2024, 3, 2, 12, 30).toISOString(),
        eventId: 342589,
        id: 123,
        isActive: true,
        isExpired: false,
      },
      {
        date: new Date(2024, 3, 2, 15).toISOString(),
        eventId: 452589,
        id: 543,
        isActive: true,
        isExpired: false,
      },
      {
        date: new Date(2024, 3, 2, 16, 30).toISOString(),
        eventId: 4522222,
        id: 763,
        isActive: true,
        isExpired: false,
      },
      {
        date: new Date(2024, 3, 2, 17).toISOString(),
        eventId: 452423,
        id: 799,
        isActive: true,
        isExpired: false,
      },
      {
        date: new Date(2024, 3, 16, 18, 30).toISOString(),
        eventId: 98423,
        id: 899,
        isActive: true,
        isExpired: false,
      },
      {
        date: new Date(2024, 3, 17, 18, 30).toISOString(),
        eventId: 563332,
        id: 6776,
        isActive: true,
        isExpired: false,
      },
    ];

    const scheduledMapped = groupSchedulesByDay(DEMO_SCHEDULES);

    return NextResponse.json(
      { schedules: scheduledMapped, ok: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { schedules: [], error: `${error}`, ok: false },
      { status: 400 }
    );
  }
}
