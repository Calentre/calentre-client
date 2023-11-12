'use client';
import { useSchedulerContext } from '@/hooks/useSchedulerContext';
import { AvailableMeetings } from '../AvailableMeetings';
import { EventOwnerDetails } from '../EventOwnerDetails';
import { Card } from '../common/Card';

export const MeetingSelector = () => {
  const { selectedMeeting } = useSchedulerContext();
  if (selectedMeeting) {
    return null;
  }
  return (
    <div className='flex w-full max-w-xl flex-col gap-10'>
      <Card withoutBorder>
        <EventOwnerDetails />
      </Card>
      <AvailableMeetings />
    </div>
  );
};
