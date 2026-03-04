import type { Metadata } from "next";
import TeruletekClient from "./TeruletekClient";

export const metadata: Metadata = {
  title: "Szolgáltatási Területek: Klímaszerelés Pécsen és Budapesten",
  description: "Klímaszerelés, hőszivattyú telepítés és karbantartás Baranya vármegyében és Budapest teljes területén. Nézze meg, hol érhetőek el akciós szolgáltatásaink!",
  
  openGraph: {
    title: "AClimate Szolgáltatási Területek | Pécs és Budapest",
    description: "Professzionális klíma- és hőszivattyú kivitelezés Baranya megyében, Budapesten és Pest vármegyében. Ingyenes felmérés és garanciális munkavégzés.",
    url: 'https://aclimate.hu/teruletek',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png',
        width: 1408,
        height: 768,
        alt: 'AClimate szolgáltatási területek térképe',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Hol szerelünk? | AClimate Területi Lefedettség",
    description: "Klímaszerelés és hőszivattyú telepítés Pécsen, Budapesten és környékén 3+2 év garanciával.",
    images: ['https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png'],
  },
};

export default function Page() {
  
  return (
    <>
    <TeruletekClient />
    </>
  );
}
