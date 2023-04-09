import { AppProps } from 'next/app';

import '../styles/global.css';
import 'antd/dist/reset.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
