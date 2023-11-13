import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { Avatar } from './common/Avatar';

export const EventOwnerDetails = () => {
  const { eventsOwner } = useSchedulerContext();
  return (
    <div className='flex flex-col items-center gap-3'>
      <Avatar />
      <p className='text-base font-semibold leading-normal text-gray'>
        {eventsOwner.name}
      </p>
      <p className='max-w-sm text-center text-sm text-carbon-gray'>
        {eventsOwner.description}
      </p>
    </div>
  );
};
