import { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return (
    <input
      className={clsx(
        'w-full py-4 px-3 rounded',
        'bg-gray-800 transition-colors',
        'text-gray-100 text-xs placeholder:text-gray-400 font-sans',
      )}
      {...props}
    />
  );
};
