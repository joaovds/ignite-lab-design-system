import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  asChild?: boolean;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ asChild, children }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'w-full py-4 px-3 rounded',
        'bg-cyan-500 transition-colors',
        'hover:bg-cyan-300 focus:ring-2 ring-white',
        'text-black text-sm font-semibold font-sans',
      )}
    >
      {children}
    </Comp>
  );
};
