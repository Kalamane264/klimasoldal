import type { Metadata } from "next";
import BudapestKlimaszerelesClient from "./BudapestKlimaszerelesClient";

export const metadata: Metadata = {
  title: "Klímaszerelés Budapest: Gyors Telepítés és Karbantartás",
  description: "Professzionális klímaszerelés Budapest minden kerületében és Pest vármegyében. Ingyenes felmérés, tiszta munkavégzés és akciós készülékek 3+2 év garanciával.",
  
  openGraph: {
    title: "Klímaszerelés és Hőszivattyú Telepítés Budapesten | AClimate",
    description: "Szakszerű klímatelepítés és beüzemelés Budapesten és környékén. Garanciális kivitelezés, szakértő csapat és folyamatos akciók minden kerületben.",
    url: 'https://aclimate.hu/teruletek/budapest-klimaszereles',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png',
        width: 1408,
        height: 768,
        alt: 'AClimate klímaszerelés Budapest és környéke',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Budapesti Klímaszerelés Garanciával | AClimate",
    description: "Gyors és precíz klímatelepítés Budapest minden kerületében. Kérje ingyenes helyszíni felmérésünket!",
    images: ['https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png'],
  },
};

export default function Page() {
  
  return (
    <>
    <BudapestKlimaszerelesClient />
    </>
  );
}
