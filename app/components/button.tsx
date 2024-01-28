import { Button as ShadCNButton, ButtonProps } from './ui/button';
import { cn } from '~/lib/utils';

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <ShadCNButton
      {...props}
      className={cn('rounded-full px-6 py-3', className)}
    />
  );
}
