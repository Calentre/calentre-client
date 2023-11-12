'use client';

import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  withoutBorder?: boolean;
  withPadding?: boolean;
};

export const Card = ({
  children,
  withoutBorder,
  withPadding = true,
}: Props) => {
  return (
    <div
      className={classNames('rounded-lg bg-white', {
        'border border-solid border-gray': !withoutBorder,
        'px-9 py-7': withPadding,
      })}
    >
      {children}
    </div>
  );
};
