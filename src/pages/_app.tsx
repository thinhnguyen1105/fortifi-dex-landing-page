import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { ConfigProvider, theme } from 'antd';
import { AppProps } from 'next/app';
import '../styles/global.css';
import 'antd/dist/reset.css';
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  zkSync,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [zkSync, mainnet, goerli, polygon, optimism, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Fortify Dapp',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#8055E6',
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);

export default MyApp;
