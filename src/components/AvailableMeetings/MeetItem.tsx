import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { MeetingItem } from '@/types/meetings';
import { ArrowRight } from '../Icons/ArrowRight';
import { Clock } from '../Icons/Clock';
import { Tag } from '../Icons/Tag';
import { Divider } from '../common/Divider';

export const MeetItem = (meeting: MeetingItem) => {
  const { duration, name, fee } = meeting;
  const { setSelectedMeeting } = useSchedulerContext();

  const onClickHandler = () => {
    setSelectedMeeting(meeting);
  };

  return (
    <>
      <div
        className='flex w-full cursor-pointer flex-row items-center justify-between'
        onClick={onClickHandler}
      >
        <div className='flex flex-col gap-2'>
          <p className='text-carbon-black text-lg font-semibold leading-normal'>
            {name}
          </p>
          <div className='text-carbon-black flex gap-5 text-sm font-normal leading-normal'>
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
