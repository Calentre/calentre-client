type Props = {
  size?: number;
  color?: string;
};

export const Www = ({ size = 18, color = '#1A1A1A' }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill='none'
    >
      <path
        d='M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.25 9H15.75'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 15.567C10.5533 15.567 11.8125 12.6268 11.8125 8.9998C11.8125 5.37285 10.5533 2.43262 9 2.43262C7.4467 2.43262 6.1875 5.37285 6.1875 8.9998C6.1875 12.6268 7.4467 15.567 9 15.567Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
