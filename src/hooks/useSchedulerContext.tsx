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

  return {
    ...schedulerState,
    dispatch,
    setSelectedMeeting,
    clearSelectedMeeting,
  };
};
