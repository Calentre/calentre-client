import { Scheduler } from '@/components/Scheduler';
import { getEventSchedules } from '@/helpers/api';

interface Props {
  params: { 'user-name'?: string; 'event-name'?: string };
}

export default async function Page({ params }: Props) {
  const eventName = params?.['event-name'];

  if (!eventName) {
    return 'event not found error'; // TODO
  }

  const schedulesResponse = await getEventSchedules(eventName);

  if (schedulesResponse.schedules.length === 0 || schedulesResponse.error) {
    return 'no schedules found for this event error'; // TODO
  }

  return <Scheduler schedules={schedulesResponse.schedules} />;
}
