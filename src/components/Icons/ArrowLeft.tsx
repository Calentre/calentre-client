type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export const ArrowLeft = ({
  size = 24,
  color = '#0D0D0D',
  strokeWidth = 2,
}: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
      className='cursor-pointer'
    >
      <path
        d='M15 19.5L7.5 12L15 4.5'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
