'use client';
import { EventsOwner } from '@/types/eventsOwner';
import { MeetingItem } from '@/types/meetings';
import { SchedulerProviderAction } from '@/types/scheduler';
import { Dispatch, createContext, useReducer } from 'react';
import { SchedulerReducer, schedulerReducer } from './reducer';

interface Props {
  children: React.ReactNode;
  data: {
    user: any;
    ok: boolean;
  };
}

export interface SchedulerState {
  selectedMeeting?: MeetingItem;
  selectedHour?: Date;
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

const MOCKED_DEMO_MEETINGS: MeetingItem[] = [
  {
    name: 'Life Coaching Introduction',
    duration: '30 Mins',
    fee: 'Free',
    id: 1,
    appendedUrlName: 'life-coaching-introduction',
    schedules: [
      {
        day: new Date(2024, 1, 14),
        hours: [
          new Date(2024, 1, 14, 13, 30),
          new Date(2024, 1, 14, 14),
          new Date(2024, 1, 14, 16, 30),
          new Date(2024, 1, 14, 17),
        ],
      },
    ],
  },
  {
    name: "Calentre's introduction",
    duration: '60 Mins',
    fee: '$39.00',
    id: 2,
    appendedUrlName: 'calentres-introduction',
    schedules: [
      {
        day: new Date(2024, 1, 16),
        hours: [new Date(2024, 1, 16, 18, 30)],
      },
      {
        day: new Date(2024, 1, 17),
        hours: [
          new Date(2024, 1, 17, 14, 30),
          new Date(2024, 1, 17, 18, 30),
          new Date(2024, 1, 17, 19),
        ],
      },
      {
        day: new Date(2024, 1, 20),
        hours: [new Date(2024, 1, 20, 14, 30), new Date(2024, 1, 20, 19)],
      },
      {
        day: new Date(2024, 2, 2),
        hours: [
          new Date(2024, 2, 2, 12, 30),
          new Date(2024, 2, 2, 15),
          new Date(2024, 2, 2, 16, 30),
          new Date(2024, 2, 2, 18),
        ],
      },
      {
        day: new Date(2024, 2, 17),
        hours: [
          new Date(2024, 2, 17, 14, 30),
          new Date(2024, 2, 17, 18, 30),
          new Date(2024, 2, 17, 19),
        ],
      },
    ],
  },
  {
    name: 'Real State Industry',
    duration: '15 Mins',
    fee: '$99.00',
    id: 3,
    appendedUrlName: 'real-state-industry',
    schedules: [
      {
        day: new Date(2024, 1, 17),
        hours: [
          new Date(2024, 1, 17, 9, 30),
          new Date(2024, 1, 17, 10),
          new Date(2024, 1, 17, 11, 30),
          new Date(2024, 1, 17, 12),
        ],
      },
    ],
  },
];

export const SchedulerProvider = ({ children, data }: Props) => {
  const [schedulerState, dispatch] = useReducer<SchedulerReducer>(
    schedulerReducer,
    {
      selectedMeeting: undefined,
      eventsOwner: DEMO_EVENTS_OWNER,
      availableMeetings: MOCKED_DEMO_MEETINGS,
      loading: false,
      selectedHour: undefined,
    }
  );

  return (
    <SchedulerContext.Provider value={{ schedulerState, dispatch }}>
      {children}
    </SchedulerContext.Provider>
  );
};
