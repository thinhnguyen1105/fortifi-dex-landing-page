import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-left">
    <h1 className="w-full">{props.title}</h1>
    {props.description}
    {props.button}
  </header>
);

export { HeroOneButton };
