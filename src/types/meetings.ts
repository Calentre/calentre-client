export interface MeetingSchedule {
  day: Date;
  hours: Date[];
}

export interface MeetingItem {
  name: string;
  duration: string;
  fee: string;
  id: number;
  appendedUrlName: string;
  schedules: MeetingSchedule[];
}

export interface AvailableHours {
  // will revisit this interface
  hour: Date;
}

export interface Timezone {
  // will revisit this interface
  name: string;
}

export interface AvailableDates {
  // will revisit this interface
  date: Date;
  day: string;
  hours: AvailableHours[];
}

export interface Platform {
  // will revisit this interface
  icon: string;
  name: string;
}

export interface Meeting extends MeetingItem {
  availableDates: AvailableDates[];
  timezones: Timezone[];
  description: string;
  platform: Platform;
}
