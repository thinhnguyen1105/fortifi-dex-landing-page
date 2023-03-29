import Link from 'next/link';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="bg-slate-900">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="/">
            <a className="text-white">Lock</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-white">Liquid</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-white">Swap</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-white">Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-teal-300">{'Swap Your Tokens\n'}</span>
            <span className="text-indigo-500">With Low Slippage</span>
          </>
        }
        description="Forti.fi smart routing, deep liquidity, and latest AMM technology allow you to enjoy low slippage and high return when swapping one cryptocurrency for another."
        button={
          <Link href="/">
            <a>
              <Button xl>SWAP NOW</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
