import type { Metadata } from "next";
import { Suspense } from "react";
import LegcsatornasKlimakClient from "./legcsatornas-klimak-client";

export const metadata: Metadata = {
  title: "Légcsatornázható Klímák: Láthatatlan Hűtés és Fűtés",
  description: "Diszkrét, álmennyezetbe rejtett légcsatornás klíma rendszerek telepítése. Egyetlen egységgel több helyiség klimatizálása, ingyenes felmérés és akciós ajánlatok.",
  
  openGraph: {
    title: "Légcsatornázható Klímák: Láthatatlan Hűtés és Fűtés | AClimate",
    description: "Diszkrét, álmennyezetbe rejtett légcsatornás klímák professzionális telepítése. Több helyiség egyidejű hűtése és fűtése, folyamatos akciókkal.",
    url: 'https://aclimate.hu/legcsatornas-klimak',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/um6-legcsatornas-001.webp',
        width: 1000,
        height: 1000,
        alt: 'AClimate légcsatornázható klíma rendszerek',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Légcsatornázható Klímák Telepítése | AClimate",
    description: "Modern, rejtett klímamegoldások több helyiségbe, garanciális kivitelezéssel és akciókkal.",
    images: ['https://aclimate.hu/um6-legcsatornas-001.webp'],
  },
};

export default function Page() {
  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <LegcsatornasKlimakClient />
    </Suspense>
    </>
  );
}
