import { Providers } from "@components/Providers";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    template: '%s | Nextjs Query Base',
    default: 'Nextjs Query Base',
  },
  description: 'The official Next.js base project.',
};

const RootLayout = ({children}: PropsWithChildren) => {
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

export default RootLayout;
