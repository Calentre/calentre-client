import { EventsOwner } from '@/types/eventsOwner';
import { MeetingItem } from '@/types/meetings';
import { useRouter } from 'next/navigation';
import { ArrowRight } from '../Icons/ArrowRight';
import { Clock } from '../Icons/Clock';
import { Tag } from '../Icons/Tag';
import { Divider } from '../common/Divider';

interface Props {
  meeting: MeetingItem;
  eventOwner: EventsOwner;
}

export const MeetItem = ({ meeting, eventOwner }: Props) => {
  const { duration, name, fee } = meeting;
  const { push } = useRouter();

  const onClickHandler = () => {
    push(`/${eventOwner.userName}/${meeting.appendedUrlName}`);
  };

  return (
    <>
      <div
        className='flex w-full cursor-pointer flex-row items-center justify-between'
        onClick={onClickHandler}
      >
        <div className='flex flex-col gap-2'>
          <p className='text-lg font-semibold leading-normal text-carbon-black'>
            {name}
          </p>
          <div className='flex gap-5 text-sm font-normal leading-normal text-carbon-black'>
            <div className='flex flex-row gap-0'>
              <Clock />
              <span>{duration}</span>
            </div>
            <div className='flex flex-row gap-2'>
              <Tag />
              <span>{fee}</span>
            </div>
          </div>
        </div>
        <ArrowRight />
      </div>
      <Divider horizontal margin={6} />
    </>
  );
};
