import { MappedScheduleItem, ScheduleItem } from '@/types/meetings';

interface ReducerProps {
  [date: string]: MappedScheduleItem;
}

export const groupSchedulesByDay = (schedules: ScheduleItem[]) => {
  const groupedSchedules = schedules.reduce((acc: ReducerProps, schedule) => {
    const day = new Date(schedule.date).toISOString().slice(0, 10);
    if (!acc[day]) {
      acc[day] = {
        day,
        eventId: schedule.eventId,
        schedules: [],
      };
    }
    acc[day].schedules.push(schedule);
    return acc;
  }, {});

  return Object.values(groupedSchedules);
};
