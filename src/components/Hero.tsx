import Link from 'next/link';

import { Logo } from './Logo';
import { Partner } from './Partner';
import { PartnerCamera } from './PartnerCamera';
import { PartnerStartup } from './PartnerStartup';
import { HeroText } from '../icons/HeroText';
import { Section } from '../layout/Section';
import { Background } from '../modules/background/Background';
import { Button } from '../modules/button/Button';
import { HeroOneButton } from '../modules/hero/HeroOneButton';
import { NavbarTwoColumns } from '../modules/navigation/NavbarTwoColumns';

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

const Hero = () => (
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
          <>
            <HeroText />
          </>
        }
        description={
          <>
            <div className="text-md leading-6 mt-4 md:w-2/3 mb-8">
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
          <Link href="/swap">
            <a>
              <Button>LAUNCH APP</Button>
            </a>
          </Link>
        }
      />
    </Section>
    <Section yPadding="">
      <div className="text-center text-xl mt-4">
        {String('Related Links').toUpperCase()}
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4 mt-4">
        <Partner />
        <PartnerCamera />
        <PartnerStartup />
        <Partner />
        <PartnerCamera />
        <PartnerStartup />
      </div>
    </Section>
  </Background>
);

export { Hero };
