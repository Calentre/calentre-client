'use client';
import { Inter } from 'next/font/google';

type Props = {
  size?: number;
  withText?: boolean;
};

const inter = Inter({ subsets: ['latin'] });

export const CalentreLogo = ({ size = 34, withText }: Props) => {
  return (
    <div className='bottom-0 flex flex-col items-center'>
      <div className='flex items-center gap-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={size}
          height={size}
          viewBox='0 0 34 33'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.16348 0C2.75948 0 0 2.72104 0 6.07762V24.8853C0 28.2419 2.75949 30.963 6.16348 30.963H25.3487C28.7527 30.963 31.5122 28.2419 31.5122 24.8853V6.07763C31.5122 2.72105 28.7527 0 25.3487 0H6.16348ZM13.6269 7.33333C10.2229 7.33333 7.46341 10.0544 7.46341 13.411V17.552C7.46341 20.9086 10.2229 23.6296 13.6269 23.6296H17.8853C21.2893 23.6296 24.0488 20.9086 24.0488 17.552V13.411C24.0488 10.0544 21.2893 7.33333 17.8853 7.33333H13.6269Z'
            fill='url(#paint0_linear_28_270)'
          />
          <path
            d='M17.4146 22.7813C17.4146 19.4248 20.1741 16.7037 23.5781 16.7037H27.8365C31.2405 16.7037 34 19.4248 34 22.7813V26.9224C34 30.2789 31.2405 33 27.8365 33H23.5781C20.1741 33 17.4146 30.2789 17.4146 26.9224V22.7813Z'
            fill='url(#paint1_linear_28_270)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_28_270'
              x1='17'
              y1='0'
              x2='17'
              y2='33'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#A675E9' />
              <stop offset='1' stopColor='#0AAEF8' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_28_270'
              x1='25.7073'
              y1='9.37039'
              x2='25.7073'
              y2='40.3334'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F8B453' />
              <stop offset='1' stopColor='#F8419D' />
            </linearGradient>
          </defs>
        </svg>
        {withText && (
          <p
            className={`tablet:text-sm text-base font-bold leading-normal tracking-[8.88px] text-light-gray`}
          >
            CALENTRE
          </p>
        )}
      </div>
      {withText && (
        <p
          className={`tablet:text-[10px] text-xs font-normal leading-[normal] text-light-gray`}
        >
          Powered by
        </p>
      )}
    </div>
  );
};
