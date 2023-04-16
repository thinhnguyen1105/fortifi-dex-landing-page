import { ReactNode } from 'react';

import { Button, Tooltip } from 'antd';

import { Logo } from './Logo';
import { Partner } from './Partner';
import { TestAnimation } from '../animation';
import { HeroText } from '../icons/HeroText';
import { Section } from '../layout/Section';
import { Background } from '../modules/background/Background';
import { HeroOneButton } from '../modules/hero/HeroOneButton';
import { NavbarTwoColumns } from '../modules/navigation/NavbarTwoColumns';
import Bridge from '../modules/related-link/Bridge';
import ChainList from '../modules/related-link/ChainList';
import Defilima from '../modules/related-link/Defilima';
import DexScreener from '../modules/related-link/DexScreener';
import EcoSystem from '../modules/related-link/EcoSystem';
import Explorer from '../modules/related-link/Explorer';

// interface IItemNavbar {
//   text: string;
//   link: string;
// }

// const ItemNavbar = (props: IItemNavbar) => (
//   <li>
//     <Link href={props.link}>
//       <a className="text-slate-500 hover:font-bold hover:text-white px-4">
//         {props.text}
//       </a>
//     </Link>
//   </li>
// );

interface IProps {
  children: ReactNode;
  link: string;
}

const RelatedLink = (props: IProps) => {
  return (
    <div
      onClick={() => window.open(props.link, '_blank')}
      className="relative cursor-pointer"
    >
      <Partner />
      <div className="absolute top-3 p-6">{props.children}</div>
    </div>
  );
};

const Hero = () => (
  <div className="font-sans">
    <Background>
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo />}>
          <div className="md:flex hidden justify-between text-sm ">
            {/* <ItemNavbar text="Swap" link="/" />
          <ItemNavbar text="Liquidity" link="/" /> */}
            {/* <ItemNavbar text="Stake" link="/" />
          <ItemNavbar text="Bridge" link="/" />
          <ItemNavbar text="Vote" link="/" />
          <ItemNavbar text="Chart" link="/" /> */}
          </div>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-10">
        <HeroOneButton
          title={
            <div className="relative flex">
              <HeroText />
              <div className="md:absolute md:flex hidden -right-24 -top-44">
                <TestAnimation path="/animation/Hero/data.json" />
              </div>
            </div>
          }
          description={
            <>
              <div className="font-medium text-md leading-6 mt-4 md:w-2/3 mb-8">
                Fortify represents an innovative and pioneering integration of
                cutting-edge DEX methodologies into the protocols that have the
                ability to incentivize veFORTI holders in order to allocate
                emissions towards liquidity pools. This revolutionary approach
                delivers a supple and agile mechanism to accelerate and amplify
                liquidity with unparalleled effectiveness.
              </div>
            </>
          }
          button={
            <Tooltip placement="topLeft" title={'Coming soon'}>
              {/* <Button>LAUNCH APP</Button> */}
              <Button
                size="large"
                className="font-bold bg-white text-violet-500 font-sans"
                type="default"
              >
                LAUNCH APP
              </Button>
            </Tooltip>
          }
        />
      </Section>
      <Section yPadding="">
        <div className="text-center text-xl mt-4">
          {String('Related Links').toUpperCase()}
        </div>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-4 mt-4">
          <RelatedLink link="https://ecosystem.zksync.io/">
            <EcoSystem />
          </RelatedLink>
          <RelatedLink link="https://explorer.zksync.io/">
            <Explorer />
          </RelatedLink>
          <RelatedLink link="https://bridge.zksync.io/">
            <Bridge />
          </RelatedLink>
          <RelatedLink link="https://chainlist.org/chain/324">
            <ChainList />
          </RelatedLink>
          <RelatedLink link="https://defillama.com/chain/zkSync%20Era">
            <Defilima />
          </RelatedLink>
          <RelatedLink link="https://dexscreener.com/zksync">
            <DexScreener />
          </RelatedLink>
        </div>
      </Section>
    </Background>
  </div>
);

export { Hero };
