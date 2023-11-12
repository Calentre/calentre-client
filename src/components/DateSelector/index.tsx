import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { useState } from 'react';
import { CaretDown } from '../Icons/CaretDown';
import { Www } from '../Icons/Www';
import { Card } from '../common/Card';
import { Toggler } from '../common/Toggler';
import { EventDetails } from './EventDetails';

type Props = {};

export const DateSelector = (props: Props) => {
  const { eventsOwner, selectedMeeting, clearSelectedMeeting } =
    useSchedulerContext();
  const [togglerValue, setTogglerValue] = useState('AM');

  const toggleAmPm = (value: string) => {
    setTogglerValue(value);
  };
  return (
    <Card withPadding={false}>
      <div className='flex flex-row'>
        <EventDetails />
        <div className='border-l border-off-gray pl-7'>
          <div className='flex flex-col gap-6 py-10 pr-10'>
            <div className='flex items-start'>
              <p className='text-[22px] font-semibold leading-none tracking-[0.15px] text-gray'>
                Select date and time
              </p>
            </div>
            <div className='flex flex-row gap-6'>
              <div className='flex flex-col gap-7'>
                <div>
                  {/* calendar */}
                  <div className='flex h-[316px] w-[348px] items-center justify-center bg-pink-300'>
                    <strong>CALENDAR</strong>
                  </div>
                </div>
                <div className='flex w-full justify-between'>
                  {/* time zone & am/pm */}
                  <div className='flex items-center gap-2'>
                    <Www />
                    <span className='text-carbon-black text-xs font-normal'>
                      West Africa Time
                    </span>
                    <CaretDown />
                  </div>
                  <Toggler
                    options={['AM', 'PM']}
                    onChange={toggleAmPm}
                    value={togglerValue}
                  />
                </div>
              </div>
              <div>{/* available times */}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
