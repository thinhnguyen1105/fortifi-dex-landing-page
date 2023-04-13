import { Card } from 'antd';

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
        <Card className="md:w-1/2 w-full">
          <TitleSwap />
          <BodySwap />
        </Card>
      </div>
    </Section>
    <Footer />
  </Background>
);

export default AppPage;
