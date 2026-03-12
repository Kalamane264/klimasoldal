import type { Metadata } from "next";
import { LanguageProvider } from "@/app/lib/i18n";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import "./styles.scss";

import Navbar from '@/app/components/Navbar';
import { Footer } from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit"
})

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans"
})

export const metadata: Metadata = {
  title: "AClimate - Klímaszerelés és Hőszivattyú telepítés | Pécs & Budapest",
  description: "Klímaszerelés és karbantartás Pécsen és Budapest környékén. Ingyenes helyszíni felmérés, garanciális kivitelezés és folyamatosan elérhető akciós készülékek.",
  
  openGraph: {
    title: "AClimate - Klímaszerelés és Hőszivattyú telepítés | Pécs & Budapest",
    description: "Klímaszerelés és karbantartás Pécsen és Budapest környékén. Ingyenes helyszíni felmérés, garanciális kivitelezés és folyamatosan elérhető akciós készülékek.",
    url: 'https://aclimate.hu',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png', 
        width: 1408,
        height: 768,
        alt: 'AClimate klímaszerelés',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "AClimate - Klímaszerelés és Hőszivattyú telepítés",
    description: "Klímaszerelés és karbantartás Pécsen és Budapest környékén.",
    images: ['https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon--22.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${outfit.variable} ${dm_sans.variable} mybody`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
