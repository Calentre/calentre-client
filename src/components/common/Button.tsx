'use client';

import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  onClick?: (el: unknown) => void;
  theme?: 'carbon' | 'aurora' | 'outlined-sunrise';
  disabled?: boolean;
  block?: boolean;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  theme = 'carbon',
  disabled,
  block,
  className,
}: Props) => {
  return (
    <button
      className={classNames(
        `border border-solid text-sm font-normal ${className}`,
        {
          'border-off-gray bg-off-gray text-light-gray': disabled,
          'rounded-3xl border-light-gray bg-gradient-to-r from-sky-500 to-fuchsia-500 px-16 py-2 text-white':
            theme === 'aurora',
          'rounded-3xl border-light-gray bg-carbon-gray px-16 py-2 text-white':
            theme === 'carbon',
          'rounded-[5px] border-purple bg-transparent hover:border-transparent hover:bg-[linear-gradient(180deg,_#F8B453_0%,_#F8419D_100%)] hover:text-white':
            theme === 'outlined-sunrise',
          'w-full': block,
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
