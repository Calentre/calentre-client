import classNames from 'classnames';

interface Props {
  horizontal?: boolean;
  vertical?: boolean;
}

export const Divider = ({ vertical, horizontal }: Props) => {
  return (
    <div
      className={classNames('my-4 bg-off-gray', {
        'h-px w-full': horizontal && !vertical,
        'h-full w-px': !horizontal && vertical,
      })}
    />
  );
};
