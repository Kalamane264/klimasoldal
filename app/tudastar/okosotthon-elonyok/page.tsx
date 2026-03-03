import type { Metadata } from "next";
import SmartHomeClient from "./SmartHomeClient";

export const metadata: Metadata = {
  title: "Okosotthon és Klíma: Kényelem és Energiahatékonyság",
  description: "Hogyan teheti otthonát okosabbá klímavezérléssel? Az okosotthon rendszerek előnyei, a távoli vezérlés és az automatizált hűtés-fűtés lehetőségei.",
  
  openGraph: {
    title: "Okosotthon Előnyök: Intelligens Klíma és Hőszivattyú | AClimate",
    description: "Vezérelje otthona hőmérsékletét bárhonnan! Ismerje meg az okosotthon rendszerek előnyeit a hatékony és kényelmes hűtés-fűtés szolgálatában.",
    url: 'https://aclimate.hu/tudastar/okosotthon-elonyok',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'article',
    images: [
      {
         url: 'https://aclimate.hu/szolgaltatasok_hero.png', // Ha van specifikus képed a cikkhez, itt add meg
        width: 1408,
        height: 736,
        alt: 'Okosotthon klímavezérlés és kényelem',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Klímavezérlés az Okosotthonban | AClimate",
    description: "Maximális kényelem és alacsonyabb rezsi intelligens klímavezérléssel. Olvassa el szakértői cikkünket!",
    images: ['https://aclimate.hu/szolgaltatasok_hero.png'],
  },
};

export default function SmartHome() {
  
  return (
    <>
    <SmartHomeClient />
    </>
  );
}
