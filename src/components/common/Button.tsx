'use client';
type Props = {
  children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };
  return <button onClick={handleClick}>{children}</button>;
};
