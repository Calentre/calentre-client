import React from 'react';
import { CalentreLogo } from './CalentreLogo';

interface Props {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: Props) => {
  return (
    <div className='flex justify-center'>
      <main className='tablet:min-h-full tablet:p-4 mb-20 flex min-h-screen flex-grow items-center justify-center'>
        {children}
      </main>
      <div className='bg-gray-500 tablet:p-3 fixed bottom-0 w-full bg-white p-4'>
        <CalentreLogo withText />
      </div>
    </div>
  );
};

export default PrimaryLayout;
