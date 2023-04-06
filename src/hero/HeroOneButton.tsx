import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-left">
    <h1 className="text-6xl font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    {props.description}
    {props.button}
  </header>
);

export { HeroOneButton };
