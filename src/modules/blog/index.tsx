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
          shortDescription="Layer 2 refers to a secondary framework or protocol that is built on top of an..."
          link="https://academy.binance.com/en/glossary/layer-2"
          img="/assets/images/blog-01.png"
        />
        <BlogCard
          title="What Is a Zero-Knowledge Proof?"
          shortDescription="While the inherent transparency of blockchains provides an advantage in many situations..."
          link="https://blog.chain.link/what-is-a-zero-knowledge-proof-zkp/"
          img="/assets/images/blog-02.png"
        />
        <BlogCard
          title="What Is zkSync Era?"
          shortDescription="CoinMarketCap Alexandria takes a look into an Ethereum layer-two zero-knowledge ..."
          link="https://coinmarketcap.com/alexandria/article/what-is-zksync-the-ultimate-guide-to-the-zksync-ecosystem"
          img="/assets/images/blog-03.png"
        />
      </div>
    </Section>
    <DividerDash />
  </div>
);

export { BlogSection };
