'use client';

interface Props {
  children: React.ReactNode;
  onClick?: (el: unknown) => void;
}

export const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};
