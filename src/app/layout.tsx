import PrimaryLayout from '@/components/common/PrimaryLayout';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Calentre: Client scheduler',
  description: 'TBD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}
