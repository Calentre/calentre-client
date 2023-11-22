import { Scheduler } from '@/components/Scheduler';
import { SchedulerProvider } from '@/providers/SchedulerProvider';

type Props = {};

export default function Page(props: Props) {
  return (
    <SchedulerProvider>
      <Scheduler />
    </SchedulerProvider>
  );
}
