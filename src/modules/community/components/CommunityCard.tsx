import { ReactNode } from 'react';

import { UnderLine } from './UnderLine';

interface IProps {
  image: ReactNode;
  description: string;
  buttonText: string;
}

const CommunityCard = (props: IProps) => (
  <div className="flex flex-col justify-between items-center py-16">
    {props.image}
    <div className="flex flex-col items-center mt-10">
      <UnderLine />
      <div className="text-center mt-4">{props.description}</div>
      <div className="hover:bg-slate-500 inline-block mt-4 rounded-full cursor-pointer text-center font-medium text-white bg-slate-800 text-sm py-2 px-6">
        {props.buttonText}
      </div>
    </div>
  </div>
);

export { CommunityCard };
