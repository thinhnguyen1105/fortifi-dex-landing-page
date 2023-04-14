import Link from 'next/link';

import { Logo } from '../../components/Logo';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

interface IItemNavbar {
  text: string;
  link: string;
}

const ItemNavbar = (props: IItemNavbar) => (
  <li>
    <Link href={props.link}>
      <a className="text-slate-500 font-bold hover:text-white px-4">
        {props.text}
      </a>
    </Link>
  </li>
);

const NavbarApp = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo />}>
      <div className="md:flex justify-between text-sm mt-6">
        <ItemNavbar text="Swap" link="/swap" />
        <ItemNavbar text="Liquidity" link="/liquidity" />
        {/* <ItemNavbar text="Stake" link="/" />
      <ItemNavbar text="Bridge" link="/" />
      <ItemNavbar text="Vote" link="/" />
      <ItemNavbar text="Chart" link="/" /> */}
      </div>
    </NavbarTwoColumns>
  </Section>
);

export { NavbarApp };
