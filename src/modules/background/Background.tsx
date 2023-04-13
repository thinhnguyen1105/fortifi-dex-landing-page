import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className="md:bg-gradient-dot bg-slate-950 bg-cover">
    {props.children}
  </div>
);

export { Background };
