'use client';
import { EventsOwner } from '@/types/eventsOwner';
import { MeetingItem } from '@/types/meetings';
import { SchedulerProviderAction } from '@/types/scheduler';
import { Dispatch, createContext, useReducer } from 'react';
import { SchedulerReducer, schedulerReducer } from './reducer';

interface Props {
  children: React.ReactNode;
}

export interface SchedulerState {
  selectedMeeting?: MeetingItem;
  eventsOwner: EventsOwner;
  availableMeetings: MeetingItem[];
  loading: boolean;
}

export interface SchedulerProviderProps {
  schedulerState: SchedulerState;
  dispatch: Dispatch<SchedulerProviderAction>;
}

export const SchedulerContext = createContext<SchedulerProviderProps>(
  {} as SchedulerProviderProps
);

const DEMO_EVENTS_OWNER = {
  name: 'Patrick Musa',
  avatar: 'some picture',
  userName: 'pmusa',
  description:
    'I help you overcome obstacles, set meaningful goals, and create a purposeful, confident, and fulfilling life.',
};

const DEMO_MEETINGS = [
  {
    name: 'Life Coaching Introduction',
    duration: '30 Mins',
    fee: 'Free',
    id: 1,
    appendedUrlName: 'life-coaching-introduction',
  },
  {
    name: "Calentre's introduction",
    duration: '60 Mins',
    fee: '$39.00',
    id: 2,
    appendedUrlName: 'calentres-introduction',
  },
  {
    name: 'Real State Industry',
    duration: '15 Mins',
    fee: '$99.00',
    id: 3,
    appendedUrlName: 'real-state-industry',
  },
];

export const SchedulerProvider = ({ children }: Props) => {
  const [schedulerState, dispatch] = useReducer<SchedulerReducer>(
    schedulerReducer,
    {
      selectedMeeting: undefined,
      eventsOwner: DEMO_EVENTS_OWNER,
      availableMeetings: DEMO_MEETINGS,
      loading: false,
    }
  );

  return (
    <SchedulerContext.Provider value={{ schedulerState, dispatch }}>
      {children}
    </SchedulerContext.Provider>
  );
};
