import { MeetingSelector } from '@/components/MeetingSelector';
import { Scheduler } from '@/components/Scheduler';
import { CalentreLogo } from '@/components/common/CalentreLogo';
import { SchedulerProvider } from '@/providers/SchedulerProvider';

export default function Home() {
  return (
    <SchedulerProvider>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='pt-32'>
          <MeetingSelector />
          <Scheduler />
        </div>
        <CalentreLogo withText />
      </main>
    </SchedulerProvider>
  );
}
