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
            {`Partitcipate in Fortifi's test application to give valuable feedbacks
          and receive a reward for our community-driven program. Fortifi aims to
          enhance and optimize the platform to meet the needs of our users by
          collaborating with community.`}
          </div>
          <div className="mt-6">
            <div className="hover:bg-slate-200 cursor-pointer inline-block rounded-full text-center font-medium text-violet-500 bg-white text-sm py-1 px-10 mr-4">
              PARTICIPATE
            </div>
            <div className="md:inline-block hidden cursor-pointer rounded-full text-center font-medium text-white bg-slate-800 text-sm py-1 px-6">
              INFORMATION
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export { AirdropSection };
