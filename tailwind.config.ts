import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: '#4D4D4D',
        'light-gray': '#808080',
        'carbon-gray': '#262626',
        'off-gray': '#B3B3B3',
        'mutted-gray': '#7676801f',
        'carbon-black': '#0D0D0D',
        purple: '#8D3FF2',
        'hover-purple': '#E9D9FF',
      },
    },
  },
  plugins: [],
};
export default config;
