import { Footer } from './Footer';
import { Hero } from './Hero';
import { Meta } from '../layout/Meta';
import { AirdropSection } from '../modules/airdrop';
import { BlogSection } from '../modules/blog';
import { CommunitySection } from '../modules/community';
import { FeatureTitle } from '../modules/feature/FeatureTitle';
import { RoadmapSection } from '../modules/roadmap';
import { StatisticSection } from '../modules/statistic';
import { AppConfig } from '../utils/AppConfig';

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
