import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from '../theme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
