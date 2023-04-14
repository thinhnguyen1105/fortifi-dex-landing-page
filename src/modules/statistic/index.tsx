import { Numbers } from './images/Numbers';
import { Section } from '../../layout/Section';

const StatisticSection = () => (
  <div className="bg-slate-950">
    <Section>
      <div className="text-5xl font-normal text-white">Fortify Statistics</div>
      <div className="py-8">
        <Numbers />
      </div>
    </Section>
  </div>
);

export { StatisticSection };
