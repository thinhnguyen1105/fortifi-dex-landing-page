import { ReactNode } from 'react';

import { BlurBottomCard } from './images/BlurBottomCard';

interface IProps {
  image: ReactNode;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

const FeatureCard = (props: IProps) => (
  <div className="flex flex-col justify-between my-20">
    <div className="p-6 flex justify-center">{props.image}</div>
    <div>
      <div className="px-6 pb-6">
        <div className="text-white text-xl font-bold mt-16">
          {props.title.toUpperCase()}
        </div>
        <div className="mt-2">{props.description}</div>
      </div>
      <div className="relative">
        <div className="p-6 absolute">
          <div className="hover:bg-slate-200 cursor-pointer inline-block rounded-full text-center font-medium text-violet-500 bg-white text-sm py-1 px-10 mr-4">
            {props.primaryButtonText.toUpperCase()}
          </div>
          <div className="md:inline-block hidden cursor-pointer rounded-full text-center font-medium text-white bg-slate-800 text-sm py-1 px-6">
            {props.secondaryButtonText.toUpperCase()}
          </div>
        </div>
        <div className="md:flex hidden">
          <BlurBottomCard />
        </div>
      </div>
    </div>
  </div>
);
export { FeatureCard };
