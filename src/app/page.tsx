import { Scheduler } from '@/components/Scheduler';
import { CalentreLogo } from '@/components/common/CalentreLogo';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Scheduler />
      <CalentreLogo withText />
    </main>
  );
}
