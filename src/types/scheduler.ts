import { TimeFormatType } from '@/providers/SchedulerProvider';
import { EventItem, MappedScheduleItem, ScheduleItem } from './meetings';

export type SchedulerProviderAction =
  | {
      type: 'SET_SELECTED_EVENT';
      event: EventItem;
    }
  | {
      type: 'CLEAR_SELECTED_EVENT';
    }
  | {
      type: 'SET_SELECTED_SCHEDULE';
      schedule: ScheduleItem | undefined;
    }
  | {
      type: 'SET_TIME_FORMAT';
      format: TimeFormatType;
    }
  | {
      type: 'SET_LOADING';
      value: boolean;
    }
  | {
      type: 'SET_AVAILABLE_EVENTS';
      events: EventItem[];
    }
  | {
      type: 'SET_AVAILABLE_SCHEDULES';
      schedules: MappedScheduleItem[];
    };
