import type { Metadata } from "next";
import EducationClient from "./EducationClient";

export const metadata: Metadata = {
  title: "Hőszivattyú vagy Klíma? – Melyik a jobb választás?",
  description: "Részletes összehasonlítás: hőszivattyú vs. klímás fűtés. Megnézzük a költségeket, a hatékonyságot és a komfortérzetet, hogy Ön a legjobb döntést hozhassa.",
  
  openGraph: {
    title: "Hőszivattyú vs. Klíma: Melyikkel érdemes fűteni? | AClimate",
    description: "Döntési útmutató: Mi a különbség a hőszivattyú és a klímás fűtés között? Előnyök, hátrányok és megtérülés szakértői szemmel.",
    url: 'https://aclimate.hu/tudastar/hoszivattyu-vs-klima',
    siteName: 'AClimate',
    locale: 'hu_HU',
    type: 'article', // Mivel ez egy konkrét tartalom/cikk
    images: [
      {
        url: 'https://aclimate.hu/szolgaltatasok_hero.png', // Ha van specifikus képed a cikkhez, itt add meg
        width: 1408,
        height: 736,
        alt: 'Hőszivattyú és klíma összehasonlítása',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Hőszivattyú vagy Klímás fűtés? | AClimate Tudástár",
    description: "Segítünk dönteni: melyik fűtési megoldás éri meg jobban hosszú távon?",
    images: ['https://aclimate.hu/szolgaltatasok_hero.png'],
  },
};

export default function Education() {
  
  return (
    <>
    <EducationClient />
    </>
  );
}
