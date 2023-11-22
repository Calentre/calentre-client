import { EventSelector } from '@/components/EventSelector';
import { SchedulerProvider } from '@/providers/SchedulerProvider';

type Props = {};

export default function Page(props: Props) {
  return (
    <SchedulerProvider>
      <EventSelector />
    </SchedulerProvider>
  );
}
