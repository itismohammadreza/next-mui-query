import { Providers } from "@components/Providers";
import { WithChildren } from "@models/common";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Nextjs Query Base',
    default: 'Nextjs Query Base',
  },
  description: 'The official Next.js base project.',
};

const RootLayout = ({children}: WithChildren) => {
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
