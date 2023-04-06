import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  sm?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-sm': props.sm,
    'btn-base': !props.xl,
    'btn-primary': !props.sm,
    'btn-secondary': props.sm,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-full text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-sm {
            @apply font-bold text-sm py-1 px-4;
          }

          .btn-primary {
            @apply text-violet-500 font-bold bg-white;
          }

          .btn-secondary {
            @apply text-white font-bold bg-blue-700;
          }

          .btn-primary:hover {
            @apply bg-teal-400;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
