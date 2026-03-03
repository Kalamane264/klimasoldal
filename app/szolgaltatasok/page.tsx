import type { Metadata } from "next";
import SzolgaltatasokClient from "./szolgaltatasok-client";

export const metadata: Metadata = {
  title: "Klímaszerelés, Karbantartás és Hőszivattyú Telepítés",
  description: "Szakszerű klímaszerelés, rendszeres karbantartás és hőszivattyú telepítés Pécsen és Budapesten. Teljes körű gépészeti kivitelezés, garanciával és akciós árakkal.",
  
  openGraph: {
    title: "Klímaszerelés, Karbantartás és Hőszivattyú Telepítés | AClimate",
    description: "Szakszerű klímaszerelés, rendszeres karbantartás és hőszivattyú telepítés garanciával. Ingyenes felmérés és folyamatosan elérhető akciós szolgáltatások.",
    url: 'https://aclimate.hu/szolgaltatasok',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/szolgaltatasok_hero.png',
        width: 1408,
        height: 736,
        alt: 'AClimate klímaszerelés és szerviz szolgáltatások',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Klímaszerelés és Szolgáltatások | AClimate",
    description: "Klíma- és hőszivattyú szerelés, karbantartás és szerviz garanciával, akciós árakon.",
    images: ['https://aclimate.hu/szolgaltatasok_hero.png'],
  },
};

export default function Szolgaltatasok() {
  
  return (
    <>
    <SzolgaltatasokClient />
    </>
  );
}
