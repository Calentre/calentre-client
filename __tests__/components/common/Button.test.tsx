import { Button } from '@/components/common/Button';
import { render, screen } from '@testing-library/react';

describe('Button.tsx', () => {
  it('should render children correctly', () => {
    const expectedText = 'hello button';
    render(<Button onClick={jest.fn()}>{expectedText}</Button>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
