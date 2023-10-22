'use client';
type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className='rounded-lg border border-solid border-gray bg-white px-9 py-7'>
      {children}
    </div>
  );
};
