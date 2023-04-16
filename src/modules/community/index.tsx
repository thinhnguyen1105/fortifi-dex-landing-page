import { CommunityCard } from './components/CommunityCard';
import { DiscordImage } from './components/DiscordImage';
import { TeleImage } from './components/TeleImage';
import { TwitterImage } from './components/TwitterImage';
import { Section } from '../../layout/Section';
import { AppConfig } from '../../utils/AppConfig';

const CommunitySection = () => (
  <div className="bg-slate-950">
    <Section>
      <div className="text-4xl text-center font-normal text-white font-sans">
        Join Fortify!
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-20">
        <CommunityCard
          image={<TeleImage />}
          description="Join Fortify community on Telegram"
          buttonText="JOIN TELEGRAM"
          url={AppConfig.telegram}
        />
        <CommunityCard
          image={<DiscordImage />}
          description="Become members of Fortify on Discord"
          buttonText="JOIN DISCORD"
          url={AppConfig.discord}
        />
        <CommunityCard
          image={<TwitterImage />}
          description="Get the latest news on Fortify Twitter"
          buttonText="FOLLOW"
          url={AppConfig.twitter}
        />
        <CommunityCard
          image={<TeleImage />}
          description="Join Fortify channel on Telegram"
          buttonText="VISIT CHANNEL"
          url={AppConfig.annoucement}
        />
      </div>
    </Section>
  </div>
);

export { CommunitySection };
