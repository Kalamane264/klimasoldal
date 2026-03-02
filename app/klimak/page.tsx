import type { Metadata } from "next";
import KlimakClient from "./klimak-client";

export const metadata: Metadata = {
  title: "Oldalfali Klímák Telepítése és Kínálata",
  description: "Modern, energiatakarékos oldalfali klímaberendezések lakásokba és családi házakba. Ingyenes helyszíni felmérés Pécsen és Budapesten, folyamatosan elérhető akciós készülékek.",
  
  openGraph: {
    title: "Oldalfali Klímák Telepítése és Kínálata | AClimate",
    description: "Modern, energiatakarékos oldalfali klímák lakásokba és családi házakba. Ingyenes felmérés és folyamatosan elérhető akciós készülékek.",
    url: 'https://aclimate.hu/klimak',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/klima_oldalfali.webp',
        width: 900,
        height: 900,
        alt: 'AClimate - Lakossági klímaszerelés',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Oldalfali Klímák Telepítése és Kínálata | AClimate",
    description: "Energiatakarékos oldalfali klímák lakásokba, ingyenes felméréssel és garanciával.",
    images: ['https://aclimate.hu/klima_oldalfali.webp'],
  },
};

export default function Szolgaltatasok() {
  
  return (
    <>
    <KlimakClient />
    </>
  );
}
