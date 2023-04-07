import Link from 'next/link';

import { Logo } from './Logo';
import { Partner } from './Partner';
import { PartnerCamera } from './PartnerCamera';
import { PartnerStartup } from './PartnerStartup';
import { Section } from '../layout/Section';
import { Background } from '../modules/background/Background';
import { Button } from '../modules/button/Button';
import { HeroOneButton } from '../modules/hero/HeroOneButton';
import { NavbarTwoColumns } from '../modules/navigation/NavbarTwoColumns';

interface IItemNavbar {
  text: string;
  link: string;
}

const ItemNavbar = (props: IItemNavbar) => (
  <li>
    <Link href={props.link}>
      <a className="text-slate-500 hover:font-bold hover:text-white px-4">
        {props.text}
      </a>
    </Link>
  </li>
);

const Hero = () => (
  <Background color="bg-slate-950">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <div className="md:flex hidden justify-between text-sm ">
          <ItemNavbar text="Swap" link="/" />
          <ItemNavbar text="Liquidity" link="/" />
          <ItemNavbar text="Stake" link="/" />
          <ItemNavbar text="Bridge" link="/" />
          <ItemNavbar text="Vote" link="/" />
          <ItemNavbar text="Chart" link="/" />
        </div>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-teal-300">{'ve(3,3) DEX\n'}</span>
            <span className="text-violet-500">on zkSync Era</span>
          </>
        }
        description={
          <>
            <div className="text-xl mt-4">
              Forti.fi is the decentralized exchange built on zkSync Era
            </div>
            <div className="text-xl mb-16">
              with the vote escrow ve(3,3) mechanism
            </div>
          </>
        }
        button={
          <Link href="/">
            <a>
              <Button>LAUNCH APP</Button>
            </a>
          </Link>
        }
      />
    </Section>
    <Section yPadding="">
      <div className="text-center text-xl mt-4">ROUTING THROUGH</div>
      <div className="flex">
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
