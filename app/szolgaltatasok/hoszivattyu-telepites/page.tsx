import type { Metadata } from "next";
import HoszivattyuClient from "./HoszivattyuClient";

export const metadata: Metadata = {
  title: "Hőszivattyú Telepítés és Beüzemelés: Teljes Körű Kivitelezés",
  description: "Professzionális hőszivattyú telepítés az ingyenes felméréstől a rendszerbe kötésig. H-tarifa ügyintézés, gépészeti szerelés és 3+2 év garancia a biztonságért.",
  
  openGraph: {
    title: "Hőszivattyú Telepítés és Rendszertervezés | AClimate",
    description: "Vállaljuk levegő-víz hőszivattyúk szakszerű telepítését és beüzemelését. Teljes körű gépészeti kivitelezés Pécsen és Budapesten, akciós ajánlatokkal.",
    url: 'https://aclimate.hu/szolgaltatasok/hoszivattyu-telepites',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/hoszivattyu-telepites.jpg',
        width: 1024,
        height: 1024,
        alt: 'AClimate hőszivattyú rendszer telepítése',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Hőszivattyú Telepítés Garanciával | AClimate",
    description: "Energiatakarékos fűtési rendszerek szakszerű kivitelezése. Kérje ingyenes helyszíni felmérésünket!",
    images: ['https://aclimate.hu/hoszivattyu-telepites.jpg'],
  },
};

export default function Page() {
  
  return (
    <>
    <HoszivattyuClient />
    </>
  );
}
