import type { Metadata } from "next";
import VillanyszerelesClient from "./VillanyszerelesClient";

export const metadata: Metadata = {
  title: "Villanyszerelés és Klíma Elektromos Bekötés",
  description: "Szakszerű villanyszerelés klíma- és hőszivattyú telepítéshez. H-tarifa ügyintézés, mérőhely-szabványosítás és teljes körű elektromos kivitelezés Pécsen és Budapesten.",
  
  openGraph: {
    title: "Villanyszerelés és Elektromos Kivitelezés | AClimate",
    description: "Biztonságos elektromos hálózat klímákhoz és hőszivattyúkhoz. H-tarifa kiépítés, hálózatbővítés és szakszerű bekötés garanciával.",
    url: 'https://aclimate.hu/szolgaltatasok/villanyszereles',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/villanyszereles.jpg',
        width: 1024,
        height: 1024,
        alt: 'AClimate villanyszerelés és elektromos hálózat kiépítése',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Klíma és Hőszivattyú Villanyszerelés | AClimate",
    description: "Teljes körű elektromos kivitelezés a klímatelepítéstől a H-tarifa ügyintézésig.",
    images: ['https://aclimate.hu/villanyszereles.jpg'],
  },
};

export default function Page() {
  
  return (
    <>
    <VillanyszerelesClient />
    </>
  );
}
