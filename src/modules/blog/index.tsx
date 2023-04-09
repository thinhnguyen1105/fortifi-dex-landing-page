import { BlogCard } from './components/BlogCard';
import { Section } from '../../layout/Section';
import { DividerDash } from '../community/components/DividerDash';

const BlogSection = () => (
  <div className="bg-slate-950">
    <DividerDash />
    <Section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <BlogCard
          title="What Is A Layer-2 Blockchain?"
          shortDescription="Layer 2 refers to a secondary framework or protocol that is built on top of an existing blockchain system..."
          link="https://academy.binance.com/en/glossary/layer-2"
        />
        <BlogCard
          title="What Is a Zero-Knowledge Proof?"
          shortDescription="While the inherent transparency of blockchains provides an advantage in many situations..."
          link="https://blog.chain.link/what-is-a-zero-knowledge-proof-zkp/"
        />
        <BlogCard
          title="What Is zkSync Era?"
          shortDescription="CoinMarketCap Alexandria takes a look into an Ethereum layer-two zero-knowledge ..."
          link="https://coinmarketcap.com/alexandria/article/what-is-zksync-the-ultimate-guide-to-the-zksync-ecosystem"
        />
      </div>
    </Section>
    <DividerDash />
  </div>
);

export { BlogSection };
