'use client';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { useTypedParams } from '@/hooks/useTypedParams';
import { MappedScheduleItem } from '@/types/meetings';
import { useEffect } from 'react';
import { Four04 } from '../common/404';
import { Card } from '../common/Card';
import { DateDetails } from './DateDetails';
import { EventDetails } from './EventDetails';

interface Props {
  schedules: MappedScheduleItem[];
}

export const Scheduler = ({ schedules }: Props) => {
  const { availableEvents, setAvailableSchedules, setSelectedEvent } =
    useSchedulerContext();
  const params = useTypedParams();
  const eventName = params['event-name'];

  useEffect(() => {
    const selectedEvent = availableEvents.find(
      (event) => event.appendedUrlName === eventName
    );
    selectedEvent && setSelectedEvent(selectedEvent);

    setAvailableSchedules(schedules);
  }, [
    schedules,
    setAvailableSchedules,
    eventName,
    availableEvents,
    setSelectedEvent,
  ]);

  const selectedEvent = availableEvents.find(
    (meet) => meet.appendedUrlName === params['event-name']
  );

  if (!selectedEvent) {
    return <Four04 />;
  }
  return (
    <div>
      <Card withPadding={false} className='tablet:border-none'>
        <div className='flex flex-row tablet:flex-col tablet:gap-4'>
          <EventDetails event={selectedEvent} />
          <DateDetails />
        </div>
      </Card>
    </div>
  );
};
