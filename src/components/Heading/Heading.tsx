import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
  asChild?: boolean;
  children: ReactNode;
  size?: 'lg' | 'xl' | '2xl';
}

export const Heading: React.FC<HeadingProps> = ({
  asChild,
  children,
  size = 'md',
}) => {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={clsx('text-gray-100 font-bold font-sans', {
        'text-lg': size === 'lg',
        'text-xl': size === 'xl',
        'text-2xl': size === '2xl',
      })}
    >
      {children}
    </Comp>
  );
};
