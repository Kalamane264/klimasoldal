import type { Metadata } from "next";
import MultiKlimakClient from "./multi-klimak-client";

export const metadata: Metadata = {
  title: "Multi Split Klíma Rendszerek Telepítése",
  description: "Több helyiség hűtése egyetlen kültéri egységgel. Esztétikus és helytakarékos multi klíma rendszerek ingyenes felméréssel és akciós készülékekkel.",
  
  openGraph: {
    title: "Multi Split Klíma Rendszerek Telepítése | AClimate",
    description: "Több helyiség hűtése egyetlen kültéri egységgel. Esztétikus és helytakarékos multi klíma rendszerek, folyamatos akciókkal.",
    url: 'https://aclimate.hu/multi-klimak',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/gree-multi.webp',
        width: 900,
        height: 900,
        alt: 'AClimate multi split klíma rendszer',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Multi Split Klíma Rendszerek | AClimate",
    description: "Helytakarékos klímamegoldások több helyiségbe, garanciális telepítéssel.",
    images: ['https://aclimate.hu/gree-multi.webp'],
  },
};

export default function Page() {
  
  return (
    <>
    <MultiKlimakClient />
    </>
  );
}
