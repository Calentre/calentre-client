import classNames from 'classnames';

interface Props {
  horizontal?: boolean;
  vertical?: boolean;
  margin?: 4 | 6;
}

export const Divider = ({ vertical, horizontal, margin = 4 }: Props) => {
  const margins = {
    4: horizontal ? 'my-4' : 'mx-4',
    6: horizontal ? 'my-6' : 'mx-6',
  };
  return (
    <div
      className={classNames(`${margins[margin]} bg-off-gray`, {
        'h-px w-full': horizontal && !vertical,
        'h-full w-px': !horizontal && vertical,
      })}
    />
  );
};
