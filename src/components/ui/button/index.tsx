import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { Slot } from '@radix-ui/react-slot';

import {
  buttonGroupStyles,
  buttonIconVariants,
  buttonVariants,
} from './styles';
import type { ButtonGroupProps, ButtonProps } from './types';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const Button = forwardRef(
  (
    {
      className,
      variant = 'filled',
      size = 'md',
      intent = 'none',
      disabled = false,
      href,
      leftIcon,
      rightIcon,
      newTab = false,
      children,
      ...rest
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    const props = {
      className: twMerge(
        clsx(
          buttonVariants({
            size,
            variant,
            intent: !disabled ? intent : undefined,
            disabled,
          }),
          className,
        ),
      ),
      'data-variant': variant,
      'data-disabled': disabled,
      'aria-disabled': disabled,
      disabled,
      ref,
      ...rest,
    };

    // Destructure `ref` from `props: JSX.IntrinsicElements['button']`, so the
    // remaining props are type-compatible with `<Link />` for the `<Slot />`
    // component to merge in.
    const { ref: _, ...restWithoutRef } = props;

    if (href && !disabled) {
      return (
        <Slot ref={ref} {...restWithoutRef}>
          <Link
            href={href}
            {...(newTab
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {leftIcon ? (
              <span
                className={`${buttonIconVariants({ size, intent: 'left' })}`}
                button-left-icon=""
              >
                {leftIcon}
              </span>
            ) : null}
            <span button-content="">{children}</span>
            {rightIcon ? (
              <span
                className={buttonIconVariants({ size, intent: 'right' })}
                button-right-icon=""
              >
                {rightIcon}
              </span>
            ) : null}
          </Link>
        </Slot>
      );
    }

    return (
      <button {...props}>
        {leftIcon ? (
          <span
            className={buttonIconVariants({ size, intent: 'left' })}
            button-left-icon=""
          >
            {leftIcon}
          </span>
        ) : null}
        <span button-content="">{children}</span>
        {rightIcon ? (
          <span
            className={buttonIconVariants({ size, intent: 'right' })}
            button-right-icon=""
          >
            {rightIcon}
          </span>
        ) : null}
      </button>
    );
  },
);

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={twMerge(clsx(buttonGroupStyles, className))} {...rest}>
      {children}
    </div>
  );
};

// -----------------------------------------------------------------------------
// Export
// -----------------------------------------------------------------------------

Button.displayName = 'Button';
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
export default Button;
