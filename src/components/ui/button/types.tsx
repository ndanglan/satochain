import type { VariantProps } from 'class-variance-authority';

import { buttonVariants } from './styles';

// ---------------------------------------–-------------------------------------
// Variant props
// ---------------------------------------–-------------------------------------

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

export type ButtonGroupProps = JSX.IntrinsicElements['div'];

export type ButtonProps = JSX.IntrinsicElements['button'] &
  Omit<ButtonVariantProps, 'variant' | 'intent'> &
  (
    | {
        variant?: 'filled';
        intent?: 'none';
      }
    | {
        variant?: Exclude<ButtonVariantProps['variant'], 'filled'>;
        intent?: Exclude<ButtonVariantProps['intent'], 'none'>;
      }
  ) & {
    href?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    newTab?: boolean;
  };
