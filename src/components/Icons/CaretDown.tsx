type Props = {
  size?: number;
  color?: string;
};

export const CaretDown = ({ size = 18, color = '#1A1A1A' }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
    >
      <path
        d='M14.625 6.75L9 12.375L3.375 6.75'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
