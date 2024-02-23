import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { MeetingSchedule } from '@/types/meetings';
import classNames from 'classnames';
import { format } from 'date-fns';
import { Button } from '../common/Button';

interface Props {
  selectedDay: MeetingSchedule;
  dateFormat?: 'hh:mm a' | 'HH:mm';
}

export const AvailableTimes = ({
  selectedDay,
  dateFormat = 'hh:mm a',
}: Props) => {
  const { setSelectedHour, selectedHour } = useSchedulerContext();

  return (
    <div className='flex flex-col items-center gap-5'>
      <p>{format(selectedDay.day, 'EEEE, MMM dd')}</p>
      <div className='flex h-full max-h-[270px] w-full min-w-[135px] flex-col items-center gap-[8px] overflow-auto'>
        {selectedDay.hours.map((time, index) => (
          <Button
            className={classNames('py-1', {
              'border-transparent bg-[linear-gradient(180deg,_#F8B453_0%,_#F8419D_100%)] text-white':
                time.getTime() === selectedHour?.getTime(),
            })}
            theme='outlined-sunrise'
            block
            key={`time-slot-${index}`}
            onClick={() => {
              setSelectedHour(time);
            }}
          >
            {format(time, dateFormat)}
          </Button>
        ))}
      </div>
    </div>
  );
};
