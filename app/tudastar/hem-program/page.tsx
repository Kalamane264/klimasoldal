import type { Metadata } from "next";
import HEMProgramClient from "./HEMProgramClient";

export const metadata: Metadata = {
  title: "HEM-program: Energiahatékonysági Támogatás és Megtakarítás",
  description: "Minden, amit a HEM-programról tudni kell. Hogyan csökkentheti rezsiköltségeit klíma- vagy hőszivattyú telepítéssel? Szakértői útmutató és pályázati feltételek.",
  
  openGraph: {
    title: "HEM-program Útmutató: Rezsioptimalizálás Okosan | AClimate",
    description: "Ismerje meg a HEM-program előnyeit! Segítünk az energiahatékonysági tanácsadásban és a megfelelő készülékek kiválasztásában a maximális megtakarításért.",
    url: 'https://aclimate.hu/tudastar/hem-program',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'article',
    images: [
      {
         url: 'https://aclimate.hu/szolgaltatasok_hero.png', // Ha van specifikus képed a cikkhez, itt add meg
        width: 1408,
        height: 736,
        alt: 'HEM-program energiahatékonysági tanácsadás AClimate',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "HEM-program és Energiahatékonyság | AClimate",
    description: "Hogyan profitálhat a HEM-programból? Klíma és hőszivattyú telepítés szakértői támogatással.",
    images: ['https://aclimate.hu/szolgaltatasok_hero.png'],
  },
};

export default function Szolgaltatasok() {
  
  return (
    <>
    <HEMProgramClient />
    </>
  );
}
