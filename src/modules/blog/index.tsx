import { BlogCard } from './components/BlogCard';
import { Section } from '../../layout/Section';
import { DividerDash } from '../community/components/DividerDash';

const BlogSection = () => (
  <div className="bg-slate-950">
    <DividerDash />
    <Section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Section>
    <DividerDash />
  </div>
);

export { BlogSection };
