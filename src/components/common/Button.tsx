'use client';

import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  onClick?: (el: unknown) => void;
  theme?: 'carbon' | 'aurora';
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  theme = 'carbon',
  disabled,
}: Props) => {
  const getTheme = () => {
    if (disabled) return '';
    switch (theme) {
      case 'aurora':
        return 'border-ligh-gray text-white bg-gradient-to-r from-sky-500 to-fuchsia-500';
      default:
        return 'bg-carbon-gray border-ligh-gray text-white';
    }
  };

  return (
    <button
      className={classNames(
        `rounded-3xl border border-solid px-16 py-2 text-sm font-normal ${getTheme()}`,
        {
          'bg-off-gray border-off-gray text-ligh-gray': disabled,
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
