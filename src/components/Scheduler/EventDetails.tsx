import { translate } from '@/helpers/translate';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { MeetingItem } from '@/types/meetings';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from '../Icons/ArrowLeft';
import { Clock } from '../Icons/Clock';
import { GoogleMeet } from '../Icons/GoogleMeet';
import { Tag } from '../Icons/Tag';
import { Avatar } from '../common/Avatar';

interface Props {
  event: MeetingItem;
}

const DEMO_EVENT_DESCRIPTION =
  'This is a description of the meeting. All payment will be confirmed within 0 - 5hrs ';

export const EventDetails = ({ event }: Props) => {
  const { eventsOwner } = useSchedulerContext();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className='tablet:max-w-full tablet:pr-0 tablet:py-0 tablet:pl-0 flex max-w-[216px] flex-col gap-6 py-10 pl-[30px] pr-6'>
      <div onClick={goBack}>
        <ArrowLeft color='#4D4D4D' />
      </div>
      <div className='tablet:items-center flex w-full flex-col gap-4'>
        <div className='tablet:items-center flex flex-col gap-2'>
          <Avatar />
          <p className='text-gray'>{eventsOwner.name}</p>
        </div>
        <p className='tablet:text-lg text-xl font-semibold tracking-[0.15px] text-gray'>
          {event?.name}
        </p>
        <div className='tablet:flex-row w flex flex-col gap-4 pt-2 target:items-center'>
          {/* fee/duration/platform */}
          <div className='flex flex-row gap-2'>
            <Tag />
            <span className='text-sm font-normal text-carbon-black'>
              {event?.fee}
            </span>
          </div>
          <div className='flex flex-row'>
            <Clock />
            <span className='text-sm font-normal text-carbon-black'>
              {event?.duration}
            </span>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <GoogleMeet />
            <span className='text-sm font-normal text-carbon-black'>
              Google Meet
            </span>
          </div>
        </div>
        <div className='tablet:w-full flex flex-col gap-2 pt-4'>
          {/* description */}
          <p className='text-sm font-medium text-carbon-black'>
            {translate('Description')}
          </p>
          <small className='tablet:max-w-full max-w-[203px] text-xs font-normal leading-5 text-gray'>
            {DEMO_EVENT_DESCRIPTION}
          </small>
        </div>
      </div>
    </div>
  );
};
