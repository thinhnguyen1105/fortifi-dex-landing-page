import React from 'react';

import { Footer } from '../components/Footer';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import SearchBar from '../modules/app/liquidity/SearchBar';
import TableLiquidity from '../modules/app/liquidity/TableLiquidity';
import { NavbarApp } from '../modules/app/NavbarApp';
import { Background } from '../modules/background/Background';
import { AppConfig } from '../utils/AppConfig';

function LiquidityPage() {
  return (
    <Background>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <NavbarApp />
      <Section>
        <div className="text-gray-300">
          <SearchBar />

          <div className="mt-4">
            <TableLiquidity />
          </div>
        </div>
      </Section>
      <Footer />
    </Background>
  );
}

export default LiquidityPage;
