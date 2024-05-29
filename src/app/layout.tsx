import { Providers } from "@components/Providers";
import { ReactNode } from "react";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
