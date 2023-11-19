import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { MeetItem } from './MeetItem';

export const AvailableMeetings = () => {
  const { availableMeetings, eventsOwner } = useSchedulerContext();
  return (
    <div className='flex w-full flex-col'>
      {availableMeetings.map((item) => (
        <MeetItem
          key={`meet-item-${item.id}`}
          meeting={item}
          eventOwner={eventsOwner}
        />
      ))}
    </div>
  );
};
