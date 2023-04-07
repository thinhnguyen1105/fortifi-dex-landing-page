import { ReactNode } from 'react';

import Link from 'next/link';

import { SettingIcon } from '../../icons/Setting';
import { Button } from '../button/Button';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>
    <div className="flex items-center">
      <Link href="/">
        <a className="mr-4">
          <Button sm>CONNECT WALLET</Button>
        </a>
      </Link>
      <SettingIcon />
    </div>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
