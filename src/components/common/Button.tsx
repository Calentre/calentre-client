'use client';

import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  onClick?: (el: unknown) => void;
  theme?: 'carbon' | 'aurora' | 'outlined-sunrise';
  disabled?: boolean;
  block?: boolean;
  href?: string;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  theme = 'carbon',
  disabled,
  block,
  href,
  className,
}: Props) => {
  const classes = classNames(
    `border border-solid text-sm font-normal ${className}`,
    {
      'rounded-3xl border-off-gray bg-off-gray px-16 py-2 text-light-gray':
        disabled,
      'rounded-3xl border-light-gray bg-gradient-to-r from-sky-500 to-fuchsia-500 px-16 py-2 text-white':
        theme === 'aurora' && !disabled,
      'rounded-3xl border-light-gray bg-carbon-gray px-16 py-2 text-white':
        theme === 'carbon' && !disabled,
      'rounded-[5px] border-purple bg-transparent hover:border-transparent hover:bg-[linear-gradient(180deg,_#F8B453_0%,_#F8419D_100%)] hover:text-white':
        theme === 'outlined-sunrise' && !disabled,
      'w-full': block,
    }
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button
      // TODO: refactor these conditional classNames
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
