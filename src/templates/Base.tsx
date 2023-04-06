import { AirdropSection } from '../airdrop';
import { BlogSection } from '../blog';
import { CommunitySection } from '../community';
import { FeatureTitle } from '../feature/FeatureTitle';
import { Meta } from '../layout/Meta';
import { RoadmapSection } from '../roadmap';
import { StatisticSection } from '../statistic';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <FeatureTitle />
    <StatisticSection />
    <AirdropSection />
    <RoadmapSection />
    <CommunitySection />
    <BlogSection />
    <Footer />
  </div>
);

export { Base };
