import { TestAnimation } from '../animation';
import { Section } from '../layout/Section';
import { FeatureCard } from './FeatureCard';
import { FarmImage } from './images/FarmImage';
import { LaunchPadImage } from './images/LaunchPadImage';
import { LiquidityImage } from './images/LiquidityImage';
import { StakeImage } from './images/StakeImage';
import { Ve33Image } from './images/Ve33Image';

const FeatureTitle = () => (
  <div className="bg-slate-950">
    <Section>
      <div className="text-5xl font-semibold text-white">Fortifi Feature</div>
      <div className="text-xl">
        Swap tokens, provide liquidity, stake and vote
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-16">
        <FeatureCard
          image={<TestAnimation />}
          title="EXCHANGE"
          description="Assets are traded by utilizing intelligent routing, abundant liquidity, and the newest automated market maker (AMM) technology to achieve minimal price slippage"
          primaryButtonText="Trade"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={<LiquidityImage />}
          title="LIQUIDITY"
          description="By contributing liquidity to the exchange, you can receive LP Tokens that entitle you to redeemable trading fees, thereby facilitating liquidity provision and ensuring a stable trading environment"
          primaryButtonText="LIQUIDITY"
          secondaryButtonText="Read more"
        />

        <FeatureCard
          image={<StakeImage />}
          title="STAKE"
          description="Fortifi empowers users to earn passive income by staking their Fortifi ($FORTI) or other tokens. This feature serves as an enticing value-add that encourages greater participation and engagement within our platform"
          primaryButtonText="STAKE"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={<FarmImage />}
          title="FARM"
          description="Fortifi's yield farming incentivizes liquidity providers to stake their crypto assets in a smart contract-based liquidity pool, offering transaction fee percentages, lender interest, and governance tokens as incentives"
          primaryButtonText="FARM"
          secondaryButtonText="Read more"
        />
        <FeatureCard
          image={<LaunchPadImage />}
          title="launchpad"
          description="Fortifi’s IFO aka launchpad offers a fundraising model for emerging DeFi projects through pre-sales events hosted after strict project vetting"
          primaryButtonText="PARTICIPATE"
          secondaryButtonText="Read more"
        />

        <FeatureCard
          image={<Ve33Image />}
          title="Ve(3,3)"
          description="The Ve(3,3) model, inspired by Convex or Curve's vote-escrow mechanism and Olympus DAO's Staking Dilution (3,3), allows $FORTI holders to manage allocated emissions which reduces emission dilution. The model incentivizes fee generation and rewards long-term supporters while aligning stakeholder interests."
          primaryButtonText="Vote"
          secondaryButtonText="Read more"
        />
      </div>
    </Section>
  </div>
);

export { FeatureTitle };
