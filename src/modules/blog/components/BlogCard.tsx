import { BackgroundCard } from './BackgroundCard';

const BlogCard = () => (
  <div className="relative">
    <div className="absolute bottom-6 p-6">
      <div className="text-white">The Eco Rounter-Effortlessly Co...</div>
      <div>
        Introducing external liquidity into swapr with no extra cost to the user
      </div>
      <div className="inline-block mt-12 rounded-full cursor-pointer text-center font-medium text-white bg-slate-800 text-sm py-2 px-6">
        READ BLOG POST
      </div>
    </div>
    <BackgroundCard />
  </div>
);
export { BlogCard };
