import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Kapcsolat - Ingyenes Felmérés és Ajánlatkérés | AClimate",
  description: "Kérjen ingyenes helyszíni felmérést vagy árajánlatot klímaszerelésre és hőszivattyú telepítésre. Ügyfélszolgálatunk Pécsen és Budapesten is várja megkeresését.",
  
  openGraph: {
    title: "Lépjen kapcsolatba az AClimate Csapatával!",
    description: "Klímaszerelés, karbantartás vagy hőszivattyú tervezés? Írjon nekünk vagy hívjon minket bizalommal. Gyors válasz, szakértő tanácsadás és 3+2 év garancia.",
    url: 'https://aclimate.hu/kapcsolat',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png',
        width: 1408,
        height: 768,
        alt: 'AClimate ügyfélszolgálat és kapcsolatfelvétel',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Ingyenes Felmérés és Ajánlatkérés | AClimate",
    description: "Keresse szakértőinket klíma és hőszivattyú telepítéssel kapcsolatban Pécsen és Budapesten.",
    images: ['https://aclimate.hu/modern_smart_home_living_room_with_subtle_tech.png'],
  },
};

export default function Page() {
  
  return (
    <>
    <ContactClient />
    </>
  );
}
