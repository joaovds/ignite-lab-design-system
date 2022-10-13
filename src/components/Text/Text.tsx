import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
  asChild?: boolean;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Text: React.FC<TextProps> = ({
  asChild,
  children,
  size = 'md',
}) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Comp>
  );
};
