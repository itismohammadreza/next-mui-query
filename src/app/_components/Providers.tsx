'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@theme/theme";
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { WithChildren } from "@models/common";
import '@locales/i18n';

export const Providers = ({children}: WithChildren) => {
  const queryClient = new QueryClient();

  return (
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Loading/>
          <Toast/>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
  );
}
