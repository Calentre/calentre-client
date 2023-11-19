interface Props {
  label?: string;
}

export const Four04 = ({ label = "404: This page doesn't exists." }: Props) => {
  return (
    <div>
      <h3 className='text-4xl font-bold tracking-widest'>{label}</h3>
    </div>
  );
};
