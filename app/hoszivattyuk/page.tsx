import type { Metadata } from "next";
import HoszivattyukClient from "./hoszivattyuk-client";

export const metadata: Metadata = {
  title: "Levegő-Víz Hőszivattyúk Telepítése és Tervezése",
  description: "Korszerű levegő-víz hőszivattyús rendszerek családi házak fűtésére és hűtésére. Teljes körű kivitelezés, ingyenes felmérés és folyamatosan elérhető akciós modellek.",
  
  openGraph: {
    title: "Levegő-Víz Hőszivattyúk Telepítése és Tervezése | AClimate",
    description: "Korszerű hőszivattyús rendszerek családi házak fűtésére és hűtésére. Teljes körű kivitelezés, garancia és akciós modellek.",
    url: 'https://aclimate.hu/hoszivattyuk',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/versati-iv.jpg',
        width: 1000,
        height: 1000,
        alt: 'AClimate hőszivattyú telepítés és rendszerek',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Hőszivattyú Rendszerek Telepítése | AClimate",
    description: "Energiatakarékos levegő-víz hőszivattyúk tervezése és kivitelezése garanciával és akciókkal.",
    images: ['https://aclimate.hu/versati-iv.jpg'],
  },
};

export default function Page() {
  
  return (
    <>
    <HoszivattyukClient />
    </>
  );
}
