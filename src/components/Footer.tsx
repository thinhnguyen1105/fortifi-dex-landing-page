import { Logo } from './Logo';
import { Section } from '../layout/Section';
import { Background } from '../modules/background/Background';

const UpButton = () => (
  <svg
    width="32"
    // height="34"
    viewBox="0 0 32 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 16.9333L16 2L2 16.9333"
      stroke="url(#paint0_linear_90_328)"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30 31.9333L16 17L2 31.9333"
      stroke="url(#paint1_linear_90_328)"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_90_328"
        x1="16"
        y1="2"
        x2="16"
        y2="16.9333"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#5F45FF" />
        <stop offset="1" stop-color="#1CE5D6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_90_328"
        x1="16"
        y1="17"
        x2="16"
        y2="31.9333"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#5F45FF" />
        <stop offset="1" stop-color="#1CE5D6" />
      </linearGradient>
    </defs>
  </svg>
);

interface IFooter {
  title: string;
  url: string;
}
interface IPropsFooterList {
  title: string;
  list: IFooter[];
}

const FooterList = (props: IPropsFooterList) => (
  <div>
    <div className="font-sans text-white font-semibold">{props.title}</div>
    {props.list.map((item, index) => (
      <div
        onClick={() => {
          if (item.url !== '/') window.open(item.url, '_blank');
        }}
        key={index}
        className="text-xs text-gray-500 hover:text-white mt-4 cursor-pointer w-fit"
      >
        {item.title}
      </div>
    ))}
  </div>
);

const listAbout = [
  { title: 'FAQ', url: '/' },
  { title: 'Brand Assets', url: '/' },
  { title: 'Guides', url: '/' },
  { title: 'Terms of Service', url: '/' },
];
const listCommunity = [
  { title: 'Discussion', url: 'https://t.me/Fortify_Chat' },
  { title: 'Announcement', url: 'https://t.me/Fortify_Ann' },
  { title: 'Discord', url: 'https://discord.gg/MyFucBDsFZ' },
];
const listDevelopers = [
  { title: 'Application', url: '/' },
  { title: 'Github', url: '/' },
  { title: 'Audits ', url: '/' },
];

const Footer = () => (
  <Background>
    <Section>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <Logo />
        </div>
        <div className="row-span-2">
          <div className="md:grid hidden grid-cols-4">
            <div></div>
            <FooterList title="About" list={listAbout} />
            <FooterList title="Community" list={listCommunity} />
            <FooterList title="Developers" list={listDevelopers} />
          </div>
        </div>
        <div className="row-span-3 flex justify-end">
          <button
            className="cursor-pointer flex"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <UpButton />
          </button>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
