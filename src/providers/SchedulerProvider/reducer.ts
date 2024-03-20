import { SchedulerProviderAction } from '@/types/scheduler';
import { SchedulerState } from '.';

export type SchedulerReducer = (
  state: SchedulerState,
  action: SchedulerProviderAction
) => SchedulerState;

export const schedulerReducer: SchedulerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_EVENT': {
      return {
        ...state,
        selectedEvent: action.event,
      };
    }
    case 'CLEAR_SELECTED_EVENT': {
      return {
        ...state,
        selectedEvent: undefined,
      };
    }
    case 'SET_SELECTED_SCHEDULE': {
      return {
        ...state,
        selectedSchedule: action.schedule,
      };
    }
    case 'SET_TIME_FORMAT': {
      return {
        ...state,
        timeFormat: action.format,
      };
    }
    case 'SET_AVAILABLE_EVENTS': {
      return {
        ...state,
        availableEvents: action.events,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: action.value,
      };
    }
    case 'SET_AVAILABLE_SCHEDULES': {
      return {
        ...state,
        availableSchedules: action.schedules,
      };
    }
    default: {
      return state;
    }
  }
};
