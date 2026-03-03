import type { Metadata } from "next";
import TudastarClient from "./TudastarClient";

export const metadata: Metadata = {
  title: "Klíma és Hőszivattyú Tudástár: Tanácsok és Megoldások",
  description: "Szakértői cikkek, vásárlási tanácsok és hasznos tudnivalók klímaberendezésekről és hőszivattyúkról. Segítünk a választásban, telepítésben és karbantartásban.",
  
  openGraph: {
    title: "Klíma és Hőszivattyú Tudástár | AClimate Szakértői Blog",
    description: "Minden, amit a modern hűtés-fűtésről tudni érdemes. Szakértői tanácsok, akciós megoldások és technológiai újdonságok egy helyen.",
    url: 'https://aclimate.hu/tudastar',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website', // Később a konkrét cikkeknél ez 'article' lesz!
    images: [
      {
        url: 'https://aclimate.hu/szolgaltatasok_hero.png',
        width: 1408,
        height: 736,
        alt: 'AClimate Tudástár - Szakértői tanácsok klímaszereléshez',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Klíma és Hőszivattyú Tudástár | AClimate",
    description: "Hasznos tanácsok és szakértői cikkek a hatékony hűtés-fűtés világából.",
    images: ['https://aclimate.hu/szolgaltatasok_hero.png'],
  },
};

export default function Szolgaltatasok() {
  
  return (
    <>
    <TudastarClient />
    </>
  );
}
