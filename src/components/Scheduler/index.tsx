'use client';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { useTypedParams } from '@/hooks/useTypedParams';
import { Four04 } from '../common/404';
import { Card } from '../common/Card';
import { DateDetails } from './DateDetails';
import { EventDetails } from './EventDetails';

type Props = {};

export const Scheduler = (props: Props) => {
  const { availableMeetings } = useSchedulerContext();
  const params = useTypedParams();

  const selectedEvent = availableMeetings.find(
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
          <DateDetails event={selectedEvent} />
        </div>
      </Card>
    </div>
  );
};
