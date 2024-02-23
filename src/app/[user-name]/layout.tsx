import { getUserDetails } from '@/helpers/getUserDetails';
import { SchedulerProvider } from '@/providers/SchedulerProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calentre: Client scheduler',
  description: 'TBD',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { 'user-name'?: string };
}) {
  const userId = params?.['user-name'];
  const user = await getUserDetails(userId);

  return (
    <main>
      <SchedulerProvider data={user}>{children}</SchedulerProvider>
    </main>
  );
}
