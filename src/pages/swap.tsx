import { Footer } from '../components/Footer';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarApp } from '../modules/app/NavbarApp';
import BodySwap from '../modules/app/swap/BodySwap';
import TitleSwap from '../modules/app/swap/TitleSwap';
import { Background } from '../modules/background/Background';
import { AppConfig } from '../utils/AppConfig';

const AppPage = () => (
  <Background>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavbarApp />
    <Section>
      <div className="flex justify-center">
        <div className="bg-indigo-800/20 p-6 border-fuchsia-200 text-white md:w-1/2 w-full rounded-md border ">
          <TitleSwap />
          <BodySwap />
        </div>
      </div>
    </Section>
    <Footer />
  </Background>
);

export default AppPage;
