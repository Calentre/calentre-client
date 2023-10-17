type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className='border-gray rounded-lg border border-solid bg-white px-9 py-7'>
      {children}
    </div>
  );
};
