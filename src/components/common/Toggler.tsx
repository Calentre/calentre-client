import classNames from 'classnames';

type Props = {
  options: string[];
  onChange: (value: string) => void;
  value?: string;
};

export const Toggler = ({ options, onChange, value }: Props) => {
  const isActive = value ?? options[0];

  return (
    <div className='bg-mutted-gray flex h-fit w-fit shrink-0 items-center justify-center rounded-[5px] p-[2px]'>
      {options.map((option, index) => (
        <p
          key={`toggle-option-${index}`}
          className={classNames(
            'text-carbon-black cursor-pointer rounded-[3px] px-[20px] py-[10px] text-xs font-medium leading-4',
            {
              'bg-white shadow-md': isActive === option,
            }
          )}
          onClick={() => onChange(option)}
        >
          {option}
        </p>
      ))}
    </div>
  );
};
