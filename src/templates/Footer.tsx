import { Logo } from './Logo';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

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

interface IPropsFooterList {
  title: string;
}

const FooterList = (props: IPropsFooterList) => (
  <div>
    <div className="text-white font-semibold">{props.title}</div>
    <div className="text-xs text-gray-400 mt-4">FAQ</div>
    <div className="text-xs text-gray-400 mt-2">Blog</div>
    <div className="text-xs text-gray-400 mt-2">Audits</div>
    <div className="text-xs text-gray-400 mt-2">Brand Assets</div>
  </div>
);

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <Logo />
        </div>
        <div className="row-span-2">
          <div className="md:grid hidden grid-cols-4">
            <FooterList title="About" />
            <FooterList title="Community" />
            <FooterList title="Documentation" />
            <FooterList title="Analytics" />
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
