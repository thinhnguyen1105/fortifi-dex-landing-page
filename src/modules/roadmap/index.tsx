import { DividerImage } from './images/DividerImage';
import { RoadmapImage } from './images/RoadmapImage';
import { Section } from '../../layout/Section';

const RoadmapSection = () => (
  <div className="bg-slate-950">
    <Section>
      <RoadmapImage />
    </Section>
    <DividerImage />
  </div>
);

export { RoadmapSection };
