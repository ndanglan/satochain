import { cva } from 'class-variance-authority';

// -----------------------------------------------------------------------------
// Button
// -----------------------------------------------------------------------------

export const buttonIconVariants = cva(
  ['flex', 'items-center', 'justify-center'],
  {
    variants: {
      size: {
        md: ['w-5', 'h-5'],
        lg: ['w-8', 'h-8'],
      },
      intent: {
        left: ['-ml-2'],
        right: ['-mr-2'],
      },
    },
  },
);

export const buttonVariants = cva(
  [
    'w-fit',
    'whitespace-nowrap',
    'font-semibold',
    'transition-colors',
    'flex',
    'gap-2',
    'justify-center',
    'items-center',
    'no-underline',
    'outline-none',
    'hover:z-10',
    'focus:z-20',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-blue-9',
  ],
  {
    variants: {
      size: {
        md: ['px-6', 'h-10', 'text-sm', 'font-semibold', 'rounded-[100px]'],
        lg: ['px-6', 'h-14', 'text-base', 'font-bold', 'rounded-[100px]'],
      },
      variant: {
        outline: ['border', 'bg-transparent'],
        filled: [''],
      },
      intent: {
        none: [
          // Outline
          'data-[variant=outline]:text-primary',
          'data-[variant=outline]:border-primary',
          'data-[variant=outline]:hover:bg-primary/[0.08]',
          'data-[variant=outline]:focus:bg-primary/[0.12]',
          'data-[variant=outline]:active:bg-primary/[0.12]',
          // filled
          'data-[variant=filled]:bg-primary',
          'data-[variant=filled]:text-white',
          'data-[variant=filled]:hover:shadow-elevation-dark-1',
          'data-[variant=filled]:focus:bg-primary',
          'data-[variant=filled]:active:bg-primary',
        ],
        linear: [
          // Outline
          'data-[variant=outline]:bg-lin',
          'data-[variant=outline]:text-white',
          'data-[variant=outline]:border-transparent',
          'data-[variant=outline]:hover:opacity-[0.92]',
          'data-[variant=outline]:focus:opacity-[0.88]',
          'data-[variant=outline]:active:opacity-[0.88]',

          // filled
          'data-[variant=filled]:bg-primary',
          'data-[variant=filled]:text-white',
          'data-[variant=filled]:hover:shadow-elevation-dark-1',
          'data-[variant=filled]:focus:bg-primary',
          'data-[variant=filled]:active:bg-primary',
        ],
      },
      disabled: {
        true: 'aria-disabled pointer-events-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        disabled: true,
        className:
          'text-M3-sys-dark-on-surface/[0.38] border-M3-sys-dark-on-surface/[0.12]',
      },
      {
        variant: 'filled',
        disabled: true,
        className:
          'text-M3-sys-dark-on-surface/[0.38] bg-M3-sys-dark-on-surface/[0.12]',
      },
    ],
  },
);

// -----------------------------------------------------------------------------
// Button Group
// -----------------------------------------------------------------------------

export const buttonGroupStyles = [
  'button--group',
  'group',
  'flex',
  '-space-x-[1px]',
];
