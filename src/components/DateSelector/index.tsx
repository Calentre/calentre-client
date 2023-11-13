import { Card } from '../common/Card';
import { DateDetails } from './DateDetails';
import { EventDetails } from './EventDetails';

export const DateSelector = () => {
  return (
    <Card withPadding={false}>
      <div className='flex flex-row'>
        <EventDetails />
        <DateDetails />
      </div>
    </Card>
  );
};
