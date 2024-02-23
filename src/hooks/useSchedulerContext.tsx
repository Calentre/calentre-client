import { SchedulerContext } from '@/providers/SchedulerProvider';
import { MeetingItem } from '@/types/meetings';
import { useContext } from 'react';

export const useSchedulerContext = () => {
  const { schedulerState, dispatch } = useContext(SchedulerContext);

  const setSelectedMeeting = (meeting: MeetingItem) => {
    dispatch({ type: 'SET_SELECTED_MEETING', meeting });
  };

  const clearSelectedMeeting = () => {
    dispatch({ type: 'CLEAR_SELECTED_MEETING' });
  };

  const setSelectedHour = (hour: Date | undefined) => {
    dispatch({ type: 'SET_SELECTED_TIME', hour });
  };

  return {
    ...schedulerState,
    dispatch,
    setSelectedMeeting,
    clearSelectedMeeting,
    setSelectedHour,
  };
};
