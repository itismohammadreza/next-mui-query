import type { AppProps } from "next/app";
import { ThemeProvider } from "@theme/theme";
import { Loading } from "@components/Loading";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toast } from "@components/Toast";
import '@locales/i18n';

const queryClient = new QueryClient();

const App = ({Component, pageProps}: AppProps) => {
  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Component {...pageProps} />
          <Loading/>
          <Toast/>
        </ThemeProvider>
      </QueryClientProvider>
  )
}

export default App;
