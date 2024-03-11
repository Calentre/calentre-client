'use client';
import { translate } from '@/helpers/translate';
import { MeetingItem, MeetingSchedule } from '@/types/meetings';
import { useState } from 'react';
import { Calendar } from '../Calendar';
import { CaretDown } from '../Icons/CaretDown';
import { Strike } from '../Icons/Strike';
import { Www } from '../Icons/Www';
import { Button } from '../common/Button';
import { Toggler } from '../common/Toggler';
import { AvailableTimes } from './AvailableTimes';

interface Props {
  event: MeetingItem;
}

type ToggleValues = '12h' | '24h';

export const DateDetails = ({ event }: Props) => {
  const [togglerValue, setTogglerValue] = useState<ToggleValues>('12h');
  const [selectedDay, setSelectedDay] = useState<MeetingSchedule | null>(null);

  return (
    <div className='border-l border-off-gray pl-7 tablet:border-l-0 tablet:border-t tablet:pl-0'>
      <div className='flex flex-col gap-6 py-10 pr-10 tablet:pr-0'>
        <div className='flex items-start'>
          <p className='text-[22px] font-semibold leading-none tracking-[0.15px] text-gray'>
            {translate('Select date and time')}
          </p>
        </div>
        <div className='flex flex-row gap-6'>
          <div className='flex flex-col gap-7 tablet:w-full'>
            <div className='flex justify-between gap-6 tablet:flex-col tablet:gap-4'>
              {/* calendar */}
              <div className='flex flex-col gap-7'>
                <Calendar
                  onSelectDate={setSelectedDay}
                  meetingSchedules={event.schedules}
                  selectedDate={selectedDay?.day}
                />
                {/* time zone & am/pm */}
                <div className='flex w-full items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Www />
                    <span className='text-xs font-normal text-carbon-black'>
                      West Africa Time
                    </span>
                    <CaretDown />
                  </div>
                  <Toggler
                    options={['12h', '24h']}
                    onChange={setTogglerValue}
                    value={togglerValue}
                  />
                </div>
              </div>
              {/* available times */}
              {selectedDay && (
                <AvailableTimes
                  selectedDay={selectedDay}
                  dateFormat={togglerValue === '12h' ? 'hh:mm a' : 'HH:mm'}
                />
              )}
            </div>

            <div className='flex justify-end tablet:w-full'>
              <Button className='items-cente flex justify-center gap-[12px] tablet:w-full'>
                <Strike size={24} /> {translate('Next')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
