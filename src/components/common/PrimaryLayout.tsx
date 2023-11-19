import React from 'react';
import { CalentreLogo } from './CalentreLogo';

interface Props {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: Props) => {
  return (
    <>
      <main className='flex min-h-screen items-center justify-center'>
        {children}
      </main>
      <div className='bg-gray-500 fixed bottom-6 left-1/2 -translate-x-1/2 transform p-4'>
        <CalentreLogo withText />
      </div>
    </>
  );
};

export default PrimaryLayout;
