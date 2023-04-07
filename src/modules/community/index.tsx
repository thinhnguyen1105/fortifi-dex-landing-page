import { CommunityCard } from './components/CommunityCard';
import { DiscordImage } from './components/DiscordImage';
import { GithubImage } from './components/GithubImage';
import { TeleImage } from './components/TeleImage';
import { TwitterImage } from './components/TwitterImage';
import { Section } from '../../layout/Section';

const CommunitySection = () => (
  <div className="bg-slate-950">
    <Section>
      <div className="text-4xl text-center font-normal text-white">
        Join Fortifi!
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-20">
        <CommunityCard
          image={<TeleImage />}
          description="Join Fortifi community on Telegram"
          buttonText="JOIN TELEGRAM"
        />
        <CommunityCard
          image={<DiscordImage />}
          description="Become members of Fortifi on Discord"
          buttonText="JOIN DISCORD"
        />
        <CommunityCard
          image={<TwitterImage />}
          description="Get the latest news on Fortifi Twitter"
          buttonText="FOLLOW"
        />
        <CommunityCard
          image={<GithubImage />}
          description="Visit the Foritifi repositories on GitHub"
          buttonText="VISIT GITHUB"
        />
      </div>
    </Section>
  </div>
);

export { CommunitySection };
