import { MeetingItem } from './meetings';

export type SchedulerProviderAction =
  | {
      type: 'SET_SELECTED_MEETING';
      meeting: MeetingItem;
    }
  | {
      type: 'CLEAR_SELECTED_MEETING';
    }
  | {
      type: 'WHATEVER_ACTION_3';
    };
