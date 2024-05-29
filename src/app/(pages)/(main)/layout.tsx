import { Navbar } from "@components/Navbar";
import { ReactNode } from "react";

export default function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Navbar>
      {children}
    </Navbar>
  );
}
