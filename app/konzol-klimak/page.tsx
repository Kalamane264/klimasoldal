import type { Metadata } from "next";
import KonzolKlimaClient from "./konzol-klimak-client";

export const metadata: Metadata = {
  title: "Konzol Klímák: Radiátorszerű Padlóközeli Hűtés és Fűtés",
  description: "Esztétikus, padlóközeli konzol klímák kiemelkedő fűtési teljesítménnyel. Kettős légkifúvás, csendes működés, ingyenes felmérés és folyamatosan elérhető akciós készülékek.",
  
  openGraph: {
    title: "Konzol Klímák: Padlóközeli Hűtés és Fűtés | AClimate",
    description: "Esztétikus, padlóközeli konzol klímák telepítése kiváló fűtési hatásfokkal. Folyamatosan elérhető akciós készülékek és ingyenes felmérés.",
    url: 'https://aclimate.hu/konzol-klimak',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/konzol-1.webp',
        width: 1000,
        height: 1000,
        alt: 'AClimate konzol klíma megoldások',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Konzol Klímák Telepítése | AClimate",
    description: "Padlóközeli konzol klímák kiemelkedő fűtési teljesítménnyel, garanciával és akciókkal.",
    images: ['https://aclimate.hu/konzol-1.webp'],
  },
};

export default function Page() {
  
  return (
    <>
    <KonzolKlimaClient />
    </>
  );
}
