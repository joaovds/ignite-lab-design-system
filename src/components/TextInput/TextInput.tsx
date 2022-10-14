import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => {
  return (
    <div
      className={clsx(
        'w-full py-4 px-3 rounded',
        'flex items-center gap-3',
        'bg-gray-800 transition-colors',
        'focus-within:ring-2 ring-cyan-300',
      )}
    >
      {children}
    </div>
  );
};

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => {
  return <Slot className={clsx('w-6 h-6', 'text-gray-400')}>{children}</Slot>;
};

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const TextInputInput: React.FC<TextInputInputProps> = ({ ...props }) => {
  return (
    <input
      className={clsx(
        'flex-1',
        'bg-transparent outline-none',
        'text-gray-100 text-xs placeholder:text-gray-400 font-sans',
      )}
      {...props}
    />
  );
};

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Icon: TextInputIcon,
  Input: TextInputInput,
  Root: TextInputRoot,
};
