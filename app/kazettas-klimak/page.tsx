import type { Metadata } from "next";
import { Suspense } from "react";
import KazettasKlimakClient from "./kazettas-klimak-client";

export const metadata: Metadata = {
  title: "Kazettás Klímák Telepítése Irodákba és Otthonokba",
  description: "Esztétikus, álmennyezetbe építhető kazettás klímák professzionális telepítéssel. Helytakarékos hűtési megoldások, ingyenes felmérés és akciós készülékek.",
  
  openGraph: {
    title: "Kazettás Klímák Telepítése Irodákba és Otthonokba | AClimate",
    description: "Esztétikus, álmennyezetbe építhető kazettás klímák professzionális telepítéssel. Ingyenes felmérés és folyamatosan elérhető akciós készülékek.",
    url: 'https://aclimate.hu/kazettas-klimak',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/um6-kazettas-002.jpg',
        width: 1000,
        height: 1000,
        alt: 'AClimate kazettás klíma megoldások',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Kazettás Klímák Telepítése | AClimate",
    description: "Álmennyezetbe építhető, esztétikus klímamegoldások irodákba és nagyobb terekbe.",
    images: ['https://aclimate.hu/um6-kazettas-002.jpg'],
  },
};

export default function Page() {
  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <KazettasKlimakClient />
    </Suspense>
    </>
  );
}
