'use client';
import { Button } from '@/components/common/Button';
import { render, screen } from '@testing-library/react';

describe('Button.tsx', () => {
  it('should render children correctly', () => {
    const expectedText = 'hello button';
    render(<Button onClick={jest.fn()}>{expectedText}</Button>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  describe('when "aurora" theme is selected', () => {
    it('should have correct classNames', () => {
      render(
        <Button onClick={jest.fn()} theme='aurora'>
          hello button
        </Button>
      );

      expect(screen.getByRole('button')).toHaveClass(
        'border-light-gray text-white bg-gradient-to-r from-sky-500 to-fuchsia-500'
      );
    });
  });

  describe('when no theme is selected', () => {
    it('should have default classNames', () => {
      render(<Button onClick={jest.fn()}>hello button</Button>);

      expect(screen.getByRole('button')).toHaveClass(
        'bg-carbon-gray border-light-gray text-white'
      );
    });
  });

  describe('when disabled is true', () => {
    it('should be disabled', () => {
      render(
        <Button onClick={jest.fn()} disabled>
          hello button
        </Button>
      );

      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should have disable classNames', () => {
      render(
        <Button onClick={jest.fn()} disabled>
          hello button
        </Button>
      );

      expect(screen.getByRole('button')).toHaveClass(
        'bg-off-gray border-off-gray text-light-gray'
      );
    });
  });
});
