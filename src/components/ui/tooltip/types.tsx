import type { VariantProps } from 'class-variance-authority';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { tooltipVariants } from './styles';

// -----------------------------------------------------------------------------
// Variant props
// -----------------------------------------------------------------------------

type TooltipVariantProps = VariantProps<typeof tooltipVariants>;

// -----------------------------------------------------------------------------
// Component props
// -----------------------------------------------------------------------------

export type TooltipProps = Omit<
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
  'content'
> &
  TooltipVariantProps & {
    // Root props
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    noDelay?: boolean;
    // Remaining props
    content: React.ReactNode;
    triggerProps?: React.ComponentPropsWithoutRef<
      typeof TooltipPrimitive.Trigger
    >;
    hasArrow?: boolean;
    inPortal?: boolean;
  };
