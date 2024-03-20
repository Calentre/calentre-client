'use client';
import { EventsOwner } from '@/types/eventsOwner';
import { EventItem, MappedScheduleItem, ScheduleItem } from '@/types/meetings';
import { SchedulerProviderAction } from '@/types/scheduler';
import { Dispatch, createContext, useEffect, useReducer } from 'react';
import { SchedulerReducer, schedulerReducer } from './reducer';

export type TimeFormatType = '12h' | '24h';

interface Props {
  children: React.ReactNode;
  events: EventItem[]; // possible undefined or empty array
  eventsOwner: EventsOwner;
}

export interface SchedulerState {
  selectedEvent?: EventItem;
  selectedSchedule?: ScheduleItem;
  eventsOwner: EventsOwner;
  availableEvents: EventItem[];
  availableSchedules: MappedScheduleItem[];
  loading: boolean;
  timeFormat: TimeFormatType;
}

export interface SchedulerProviderProps {
  schedulerState: SchedulerState;
  dispatch: Dispatch<SchedulerProviderAction>;
}

export const SchedulerContext = createContext<SchedulerProviderProps>(
  {} as SchedulerProviderProps
);

// const MOCKED_ADMIN_TIMEZONE = 'Africa/Lagos';

export const SchedulerProvider = ({ children, events, eventsOwner }: Props) => {
  const [schedulerState, dispatch] = useReducer<SchedulerReducer>(
    schedulerReducer,
    {
      selectedEvent: undefined,
      eventsOwner,
      availableEvents: events,
      availableSchedules: [],
      loading: true,
      selectedSchedule: undefined,
      timeFormat: '12h',
    }
  );

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', value: false });
  }, [events]);

  if (schedulerState.loading) {
    // TODO: loader here
    return '';
  }

  return (
    <SchedulerContext.Provider value={{ schedulerState, dispatch }}>
      {children}
    </SchedulerContext.Provider>
  );
};
