import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phosphor - Agence de développement web",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: ReactNode;
}
export default function RootLayout(Props: RootLayoutProps) {
  const { children } = Props;
  return (
      <html lang="fr">
      <body className={inter.className}>{children}</body>
      </html>
  );
}
