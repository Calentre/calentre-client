import { translate } from '@/helpers/translate';
import { MeetingSchedule } from '@/types/meetings';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { format } from 'date-fns';
import { useState } from 'react';
// Prevent fontawesome from adding its CSS since we did it manually above:
config.autoAddCss = false;

interface Props {
  currentDate?: Date;
  onSelectDate: (schedule: MeetingSchedule | null) => void;
  meetingSchedules: MeetingSchedule[];
  selectedDate?: Date;
}
export const Calendar = ({
  onSelectDate,
  meetingSchedules,
  selectedDate,
}: Props) => {
  const now = new Date();
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const selectedMonth = selectedDateTime.getMonth();
  const selectedYear = selectedDateTime.getFullYear();

  const buildCalendarDay = (day: string) => {
    return (
      <li
        key={day}
        className='flex h-full w-full pb-4 text-[12px] font-medium text-gray'
      >
        {day}
      </li>
    );
  };

  const onDayClick = (schedule: MeetingSchedule) => {
    onSelectDate(schedule);
  };

  const buildCalendarDays = () => {
    return (
      <>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(
          buildCalendarDay
        )}
      </>
    );
  };

  const buildDays = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <li
          key={`empty_${i}`}
          className='date not-in-month flex justify-center'
        ></li>
      );
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(selectedYear, selectedMonth, i);

      const currentDay = format(date, 'dd');
      const formattedSelectedDateDay =
        selectedDate && format(selectedDate, 'dd');
      const isSelected = formattedSelectedDateDay === currentDay;

      const hasSchedule = meetingSchedules.find((schedule) => {
        return (
          format(schedule.day, 'dd') === format(date, 'dd') &&
          date.getMonth() === schedule.day.getMonth() &&
          date.getFullYear() === schedule.day.getFullYear()
        );
      });

      days.push(
        <li
          key={i}
          className={'flex h-full w-full items-center justify-center pb-4'}
        >
          <div className={'w-full rounded-none bg-white bg-opacity-20'}>
            <div
              className={'h-8 w-10 rounded-none bg-white bg-opacity-20 text-sm'}
            >
              <button
                onClick={() => hasSchedule && onDayClick(hasSchedule)}
                className={classNames(
                  'h-8 w-8 rounded-full font-normal text-carbon-black transition-all hover:rounded-full hover:bg-hover-purple hover:text-carbon-black',
                  {
                    'bg-hover-purple text-carbon-black':
                      !isSelected && hasSchedule,
                    'bg-purple text-white hover:bg-purple hover:text-white':
                      isSelected,
                    'bg-white': !isSelected && !hasSchedule,
                  }
                )}
              >
                {i}
              </button>
            </div>
          </div>
        </li>
      );
    }
    return days;
  };

  const shouldGoToPrevMonth = selectedDateTime.getTime() > now.getTime();

  return (
    <div>
      <div className='flex justify-between transition-all'>
        <div className='mb-5 flex gap-1 text-carbon-gray'>
          <span>
            {translate(
              selectedDateTime.toLocaleString('default', {
                month: 'long',
              })
            )}
          </span>
          <span>{selectedDateTime.getFullYear()}</span>
        </div>
        <div className='flex gap-5 text-white'>
          <button
            onClick={() => {
              shouldGoToPrevMonth &&
                setSelectedDateTime(
                  new Date(
                    selectedDateTime.setMonth(selectedDateTime.getMonth() - 1)
                  )
                );
              onSelectDate(null);
            }}
            className={classNames(
              'flex h-6 w-6 items-center justify-center rounded-full',
              {
                'bg-off-gray':
                  selectedMonth === now.getMonth() &&
                  selectedYear === now.getFullYear(),
                'bg-[linear-gradient(180deg,_#A675E9_0%,_#0AAEF8_100%)]':
                  shouldGoToPrevMonth,
              }
            )}
            disabled={
              selectedMonth === now.getMonth() &&
              selectedYear <= now.getFullYear()
            }
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            onClick={() => {
              setSelectedDateTime(
                new Date(
                  selectedDateTime.setMonth(selectedDateTime.getMonth() + 1)
                )
              );
              onSelectDate(null);
            }}
            className={classNames(
              'flex h-6 w-6 items-center justify-center rounded-full',
              {
                'bg-off-gray': false,
                'bg-[linear-gradient(180deg,_#A675E9_0%,_#0AAEF8_100%)]': true,
              }
            )}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <ul
        className='dates grid-rows-7 grid h-full w-full grid-cols-7 justify-center overflow-hidden'
        aria-roledescription='datepicker'
      >
        {buildCalendarDays()}
        {buildDays()}
      </ul>
    </div>
  );
};
