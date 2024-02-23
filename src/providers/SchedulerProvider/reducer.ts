import { SchedulerProviderAction } from '@/types/scheduler';
import { SchedulerState } from '.';

export type SchedulerReducer = (
  state: SchedulerState,
  action: SchedulerProviderAction
) => SchedulerState;

export const schedulerReducer: SchedulerReducer = (state, action) => {
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
    case 'SET_SELECTED_TIME': {
      return {
        ...state,
        selectedHour: action.hour,
      };
    }
    default: {
      return state;
    }
  }
};
