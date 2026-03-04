import type { Metadata } from "next";
import KlimaszerelesClient from "./KlimaszerelesClient";

export const metadata: Metadata = {
  title: "Profi Klímaszerelés és Telepítés: Garanciális Kivitelezés",
  description: "Szakszerű klímaszerelés és telepítés Pécsen és Budapesten. Ingyenes helyszíni felmérés, tiszta munkavégzés és akciós klímák 3+2 év garanciával.",
  
  openGraph: {
    title: "Klímaszerelés és Telepítés Szakértőktől | AClimate",
    description: "Minőségi klímaszerelés az ingyenes felméréstől a beüzemelésig. Válogasson akciós készülékeink közül, melyekre 3 év teljes körű és 2 év kompresszor garanciát vállalunk.",
    url: 'https://aclimate.hu/szolgaltatasok/klimaszereles',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/klimaszereles.jpg',
        width: 1024,
        height: 1024,
        alt: 'AClimate klímaszerelés és professzionális telepítés',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Klímaszerelés és Telepítés Garanciával | AClimate",
    description: "Gyors és tiszta klímatelepítés Pécs és Budapest környékén. Kérje ingyenes felmérésünket!",
    images: ['https://aclimate.hu/klimaszereles.jpg'],
  },
};

export default function Page() {
  
  return (
    <>
    <KlimaszerelesClient />
    </>
  );
}
