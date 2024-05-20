import type { AppProps } from "next/app";
import { ThemeProvider } from "@theme/theme";
import '@locales/i18n';
import { Loading } from "@components/Loading";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = ({Component, pageProps}: AppProps) => {
  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Component {...pageProps} />
          <Loading/>
        </ThemeProvider>
      </QueryClientProvider>
  )
}

export default App;
