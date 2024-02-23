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
      type: 'SET_SELECTED_TIME';
      hour: Date | undefined;
    };
