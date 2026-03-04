import type { Metadata } from "next";
import SmartHomeClient from "./SmartHomeClient";

export const metadata: Metadata = {
  title: "Okos Klímavezérlés Kiépítése: Intelligens Hűtés-Fűtés",
  description: "Tegye okossá klímáját! WiFi-vezérlés telepítése, távoli elérés beállítása és okosotthon integráció Pécsen és Budapesten. Kényelem és energiamegtakarítás.",
  
  openGraph: {
    title: "Okos Klímavezérlés és Intelligens Rendszerek | AClimate",
    description: "Vezérelje klímáját vagy hőszivattyúját bárhonnan! Okosotthon megoldások kiépítése szakértőktől. Takarítson meg energiát okos vezérléssel.",
    url: 'https://aclimate.hu/szolgaltatasok/okosotthon',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://aclimate.hu/okosotthon.png',
        width: 1024,
        height: 1024,
        alt: 'AClimate okosotthon és klímavezérlés telepítés',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Okos Klímamegoldások Telepítése | AClimate",
    description: "Klímavezérlés okostelefonról. WiFi modulok beépítése és beállítása garanciával.",
    images: ['https://aclimate.hu/okosotthon.png'],
  },
};

export default function Page() {
  
  return (
    <>
    <SmartHomeClient />
    </>
  );
}
