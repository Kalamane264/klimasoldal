import type { Metadata } from "next";
import { Suspense } from "react";
import KlimakClient from "./klimak-client";

export const metadata: Metadata = {
  title: "Akciós Klímák és Kedvezményes Telepítés",
  description: "Böngésszen legjobb akciós klíma ajánlataink között! Megbízható márkák kedvezményes áron, szakszerű telepítéssel és gyártói garanciával a készlet erejéig.",
  
  openGraph: {
    title: "Akciós Klímák és Kedvezményes Telepítés | AClimate",
    description: "Kiváló ár-érték arányú klímaberendezések és akciós szerelési csomagok. Találja meg az ideális megoldást otthonába kedvezményes áron!",
    url: 'https://aclimate.hu/akcios-klimak',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/akcios_klimak_og.png',
        width: 1408,
        height: 768,
        alt: 'AClimate - Akciós klímák és telepítés',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Akciós Klímák és Kedvezményes Telepítés 2026 | AClimate",
    description: "Prémium klímaberendezések akciós áron, szakszerű telepítéssel. Tekintse meg aktuális ajánlatainkat!",
    images: ['https://aclimate.hu/akcios_klimak_og.png'],
  },
};

export default function Page() {
  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <KlimakClient />
    </Suspense>
    </>
  );
}
