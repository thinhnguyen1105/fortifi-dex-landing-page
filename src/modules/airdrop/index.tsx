import { AirdropImage } from './images/AirdropImage';
import { Section } from '../../layout/Section';

const AirdropSection = () => (
  <div className="bg-slate-950">
    <Section>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div className="py-8 ">
          <AirdropImage />
        </div>
        <div>
          <div className="text-3xl font-normal text-white">
            Airdrop for Loyalty users
          </div>
          <div className="mt-4">
            {`Join Fortify's beta testing program to provide valuable feedback and be rewarded for your active participation in our community-driven initiative. Fortify is dedicated to continuously improving and optimizing our platform to cater to the evolving needs of our users, and we value the collaborative efforts of our community in achieving this goal.`}
          </div>
          <div className="mt-6">
            <div className="hover:bg-slate-200 cursor-pointer inline-block rounded-full text-center font-medium text-violet-500 bg-white text-sm py-2 px-10 mr-4">
              PARTICIPATE
            </div>
            <div className="hover:bg-slate-500 md:inline-block hidden cursor-pointer rounded-full text-center font-medium text-white bg-slate-800 text-sm py-2 px-6">
              INFORMATION
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export { AirdropSection };
