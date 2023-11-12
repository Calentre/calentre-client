import { SchedulerProviderAction } from '@/types/scheduler';
import { SchedulerState } from '.';

export type SchedulerReducer = (
  state: SchedulerState,
  action: SchedulerProviderAction
) => SchedulerState;

export const schedulerReducer = (
  state: SchedulerState,
  action: SchedulerProviderAction
) => {
  switch (action.type) {
    case 'SET_SELECTED_MEETING': {
      return {
        ...state,
        selectedMeeting: action.meeting,
      };
    }
    case 'CLEAR_SELECTED_MEETING': {
      return {
        ...state,
        selectedMeeting: undefined,
      };
    }
    case 'WHATEVER_ACTION_3': {
      return state;
    }
    default: {
      return state;
    }
  }
};
