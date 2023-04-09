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
            @apply inline-block rounded-full cursor-pointer text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-sm {
            @apply font-semibold text-sm py-1 px-4;
          }

          .btn-primary {
            @apply text-violet-500 font-semibold bg-white px-8;
          }

          .btn-secondary {
            @apply text-white font-semibold bg-blue-700;
          }

          .btn-primary:hover {
            @apply bg-slate-200;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
