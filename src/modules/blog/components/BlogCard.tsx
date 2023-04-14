import { BackgroundCard } from './BackgroundCard';

interface IProps {
  title: string;
  shortDescription: string;
  link: string;
  img: string;
}

const BlogCard = (props: IProps) => (
  <div className="relative">
    <div className="absolute md:top-7 top-6 p-5">
      <img className="mb-6" src={props.img} alt="blog-image" />
      <div className="text-white font-sans">{props.title}</div>
      <div className="mt-2 font-medium">{props.shortDescription}</div>
      <div
        onClick={() => window.open(props.link, '_blank')}
        className="font-sans hover:bg-slate-500 inline-block mt-12 rounded-full cursor-pointer text-center font-medium text-white bg-slate-800 text-sm py-2 px-6"
      >
        READ BLOG POST
      </div>
    </div>
    <BackgroundCard />
  </div>
);
export { BlogCard };
