import { BlogCard } from './components/BlogCard';
import { DividerDash } from '../community/components/DividerDash';
import { Section } from '../layout/Section';

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
