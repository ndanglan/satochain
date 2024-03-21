import { cva } from 'class-variance-authority';

export const inputContainerIconVariants = cva(
  ['flex', 'items-center', 'justify-center'],
  {
    variants: {
      size: {
        md: ['h-5', 'w-5'],
      },
    },
  },
);

export const inputContainerVariants = cva(
  [
    'relative',
    'flex',
    'w-fit',
    'items-center',
    'whitespace-nowrap',
    'justify-center',
    'text-gray-11',
    'border',
    'border-gray-7',
    'transition-colors',
    'peer-invalid:text-red-11',
    'peer-invalid:bg-red-3',
    'peer-invalid:border-red-7',
  ],
  {
    variants: {
      size: {
        md: ['h-10', 'text-md', 'rounded-lg'],
      },
      side: {
        left: ['rounded-r-none', 'order-1'],
        right: ['rounded-l-none', 'order-3'],
      },
      isIcon: {
        true: [],
        false: [],
      },
      containerized: {
        true: [],
        false: [],
      },
      disabled: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      { size: 'md', isIcon: true, className: ['min-w-[2.5rem]'] },
      { size: 'md', isIcon: false, className: ['px-3'] },
      { containerized: true, disabled: true, className: ['bg-gray-9'] },
      { containerized: false, disabled: true, className: ['bg-gray-9'] },
      { containerized: true, disabled: false, className: ['bg-gray-3'] },
      { containerized: false, disabled: false, className: ['bg-gray-1'] },
      { containerized: false, side: 'left', className: ['border-r-0'] },
      { containerized: false, side: 'right', className: ['border-l-0'] },
    ],
  },
);

export const inputExtraVariants = cva([], {
  variants: {
    size: {
      md: [],
    },
    hasLeft: {
      true: ['border-l-0'],
      false: [],
    },
    hasRight: {
      true: ['border-r-0'],
      false: [],
    },
  },
  compoundVariants: [
    { size: 'md', hasLeft: false, className: ['rounded-l-lg'] },
    { size: 'md', hasRight: false, className: ['rounded-r-lg'] },
  ],
});

export const inputParentVariants = cva(['flex', 'relative'], {
  variants: {
    size: {
      md: ['h-14', 'rounded', 'flex', 'items-center'],
    },
    fullWidth: {
      true: ['w-full'],
      false: ['w-fit'],
    },
    variant: {
      outline: ['border', 'border-solid', 'border-M3-sys-dark-outline'],
      none: ['border-none'],
    },
  },
});

export const labelVariants = cva(
  [
    'absolute',
    'text-M3-sys-dark-on-surface-variant',
    'top-0',
    '-translate-y-1/2',
    'bg-black',
  ],
  {
    variants: {
      size: {
        md: ['text-xs/[16px]', 'left-4', 'px-1'],
      },
    },
  },
);

export const inputVariants = cva(
  [
    'peer',
    'flex',
    'order-2',
    'items-center',
    'text-M3-sys-dark-on-surface',
    'bg-transparent',
    'transition-colors',
    'border-gray-7',
    'hover:border-gray-8',
    'focus:outline-none',
    'only:focus-visible:ring-1',
    'focus-visible:ring-transparent',
    'placeholder:text-gray-11',
    'disabled:bg-gray-9',
    'invalid:bg-red-3',
    'invalid:text-red-11',
    'invalid:border-red-7',
    'invalid:hover:border-red-8',
  ],
  {
    variants: {
      size: {
        md: ['h-10', 'text-base', 'px-3'],
      },
      fullWidth: {
        true: ['w-full'],
        false: [],
      },
    },
  },
);
