import { platforms } from '@/helpers/platforms';
import { translate } from '@/helpers/translate';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { EventItem } from '@/types/meetings';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from '../Icons/ArrowLeft';
import { Clock } from '../Icons/Clock';
import { Tag } from '../Icons/Tag';
import { Avatar } from '../common/Avatar';

interface Props {
  event: EventItem;
}

export const EventDetails = ({ event }: Props) => {
  const { eventsOwner } = useSchedulerContext();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className='flex max-w-[216px] flex-col gap-6 py-10 pl-[30px] pr-6 tablet:max-w-full tablet:py-0 tablet:pl-0 tablet:pr-0'>
      <div onClick={goBack}>
        <ArrowLeft color='#4D4D4D' />
      </div>
      <div className='flex w-full flex-col gap-4 tablet:items-center'>
        <div className='flex flex-col gap-2 tablet:items-center'>
          <Avatar />
          <p className='text-gray'>{eventsOwner.name}</p>
        </div>
        <p className='text-xl font-semibold tracking-[0.15px] text-gray tablet:text-lg'>
          {event.title}
        </p>
        <div className='w flex flex-col gap-4 pt-2 target:items-center tablet:flex-row'>
          {/* price/duration/platform */}
          <div className='flex flex-row gap-2'>
            <Tag />
            <span className='text-sm font-normal text-carbon-black'>
              {event.price}
            </span>
          </div>
          <div className='flex flex-row'>
            <Clock />
            <span className='text-sm font-normal text-carbon-black'>
              {event.duration}
            </span>
          </div>
          <div className='flex flex-row items-center gap-2'>
            {platforms[event.platform].icon}
            <span className='text-sm font-normal text-carbon-black'>
              {platforms[event.platform].displayName}
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-2 pt-4 tablet:w-full'>
          {/* description */}
          <p className='text-sm font-medium text-carbon-black'>
            {translate('Description')}
          </p>
          <small className='max-w-[203px] text-xs font-normal leading-5 text-gray tablet:max-w-full'>
            {event.description}
          </small>
        </div>
      </div>
    </div>
  );
};
