const sizes = {
  // 32px
  '2xl': 'h-8 w-8',
  // 24px
  xl: 'w-6 h-6',
  // 20px
  lg: 'w-5 h-5',
  // 16px
  md: 'h-4 w-4',
  // 14px
  sm: 'h-3.5 w-3.5',
  // 12px
  xs: 'h-3 w-3',
  // 10px
  '2xs': 'h-2.5 w-2.5'
} as const;

type Props = {
  name: string;
  size?: keyof typeof sizes;
  className?: string;
};

export const Icon = ({ name, size, className = '' }: Props) => {
  return (
    <svg className={`${size ? sizes[size] : ''} ${className}`}>
      <use href={`/assets/icons/sprite.svg#${name}`} />
    </svg>
  );
};
