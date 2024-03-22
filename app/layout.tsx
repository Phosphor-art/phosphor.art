import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import ContextLayout from "@/components/ContextLayout";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phosphor - Agence de développement de sites internet",
  description: "Agence de développement de sites internet",
};

type RootLayoutProps = {
  children: ReactNode;
}
export default function RootLayout(Props: RootLayoutProps) {
  const { children } = Props;
  return (
      <html lang="fr">
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <title>Phosphor - Agence de développement de sites internet</title>
      </head>
      <body className={inter.className}>
          <ContextLayout>
            {children}
          </ContextLayout>
      </body>
      </html>
  );
}
