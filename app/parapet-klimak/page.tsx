import type { Metadata } from "next";
import ParapetKlimakClient from "./parapet-klimak-client";

export const metadata: Metadata = {
  title: "Parapet Klímák: Rugalmas Mennyezeti és Padlóközeli Megoldások",
  description: "Helytakarékos parapet klímák telepítése mennyezetre vagy padlóközeli pozícióba. Ideális tetőterekbe, üzletekbe és ferde falfelületekre, folyamatos akciókkal.",
  
  openGraph: {
    title: "Parapet Klímák: Mennyezeti és Padlóközeli Megoldások | AClimate",
    description: "Rugalmasan telepíthető parapet klímák mennyezeti vagy padlóközeli elhelyezéssel. Ingyenes felmérés és folyamatosan elérhető akciós készülékek.",
    url: 'https://aclimate.hu/parapet-klimak',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/um6-parapet-001.webp',
        width: 1000,
        height: 1000,
        alt: 'AClimate parapet klíma telepítés',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Parapet Klímák Telepítése | AClimate",
    description: "Sokoldalú parapet klímák mennyezeti vagy padlóközeli szereléssel, garanciával és akciókkal.",
    images: ['https://aclimate.hu/um6-parapet-001.webp'],
  },
};

export default function Page() {
  
  return (
    <>
    <ParapetKlimakClient />
    </>
  );
}
