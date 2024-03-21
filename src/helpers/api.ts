import { EventsOwner } from '@/types/eventsOwner';
import { EventItem, MappedScheduleItem } from '@/types/meetings';
import { clientJsonFetch } from './fetch';

type GetUserDetailsResponse = {
  ok: boolean;
  error?: unknown;
  user: EventsOwner | null;
};

type GetUserEventsResponse = {
  ok: boolean;
  error?: unknown;
  events: EventItem[];
};

type GetEventsSchedulesResponse = {
  ok: boolean;
  error?: unknown;
  schedules: MappedScheduleItem[];
};

export const getUserDetails = async (userName: string) => {
  try {
    const response = await clientJsonFetch<GetUserDetailsResponse>(
      `user/details?user=${userName}`
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return { user: response.user };
  } catch (error) {
    return { error, user: null };
  }
};

export const getUserEvents = async (userName: string) => {
  try {
    const response = await clientJsonFetch<GetUserEventsResponse>(
      `user/events?user=${userName}`
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return { events: response.events };
  } catch (error) {
    return { error, events: [] };
  }
};

export const getEventSchedules = async (eventName: string) => {
  try {
    const response = await clientJsonFetch<GetEventsSchedulesResponse>(
      `events/schedules?event=${eventName}`
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return { schedules: response.schedules };
  } catch (error) {
    return { error, schedules: [] };
  }
};
