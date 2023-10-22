'use client';

import { MouseEventHandler } from 'react';

interface Props {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};
