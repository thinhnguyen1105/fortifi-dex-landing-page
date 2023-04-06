import { Footer } from './Footer';
import { Hero } from './Hero';
import { FeatureTitle } from '../feature/FeatureTitle';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <FeatureTitle />
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Base };
