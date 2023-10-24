import { Avatar } from './common/Avatar';

export const EventOwnerDetails = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Avatar />
      <p className='text-base font-semibold leading-normal text-gray'>
        Patrick Musa
      </p>
    </div>
  );
};
