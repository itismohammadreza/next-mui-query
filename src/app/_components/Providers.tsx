'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@theme/theme";
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import '@locales/i18n';
import { PropsWithChildren } from "react";

export const Providers = ({children}: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 3
      }
    }
  });


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
