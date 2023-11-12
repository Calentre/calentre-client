'use client';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { DateSelector } from '../DateSelector';

type Props = {};

export const Scheduler = (props: Props) => {
  const { selectedMeeting } = useSchedulerContext();
  if (!selectedMeeting) {
    return null;
  }
  return (
    <div>
      <DateSelector />
    </div>
  );
};
