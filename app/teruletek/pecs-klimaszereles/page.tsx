import type { Metadata } from "next";
import PecsKlimaszerelesClient from "./PecsKlimaszerelesClient";

export const metadata: Metadata = {
  title: "Klímaszerelés Pécs: Professzionális Telepítés Baranya Megyében",
  description: "Szakszerű klímaszerelés és hőszivattyú telepítés Pécsen, Komlón, Mohácson és környékén. Ingyenes helyszíni felmérés, akciós árak és 3+2 év garancia helyi szakértőktől.",
  
  openGraph: {
    title: "Klímaszerelés és Hőszivattyú Kivitelezés Pécsen | AClimate",
    description: "Megbízható klímatelepítés és karbantartás Pécsen és Baranya vármegyében. Válogasson akciós készülékeink közül 3 év teljes körű és 2 év kompresszor garanciával.",
    url: 'https://aclimate.hu/teruletek/pecs-klimaszereles',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png',
        width: 1408,
        height: 768,
        alt: 'AClimate klímaszerelés Pécs és Baranya vármegye',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Pécsi Klímaszerelés és Szerviz | AClimate",
    description: "Klíma és hőszivattyú megoldások Pécsen és környékén. Gyors kiszállás és szakszerű beüzemelés garanciával.",
    images: ['https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png'],
  },
};

export default function Page() {
  
  return (
    <>
    <PecsKlimaszerelesClient />
    </>
  );
}
