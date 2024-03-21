import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { MeetItem } from './MeetItem';

export const AvailableMeetings = () => {
  const { availableEvents, eventsOwner } = useSchedulerContext();
  return (
    <div className='flex w-full flex-col'>
      {availableEvents.map((item) => (
        <MeetItem
          key={`meet-item-${item.id}`}
          meeting={item}
          eventOwner={eventsOwner}
        />
      ))}
    </div>
  );
};
