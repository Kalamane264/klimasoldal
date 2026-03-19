import type { Metadata } from "next";
import OtthonfelujitasClient from "./OtthonfelujitasClient";

export const metadata: Metadata = {
  title: "Otthonfelújítási Támogatás 2026: Megtakarítás Klímával és Hőszivattyúval | AClimate",
  description: "Átfogó útmutató a magyar otthonfelújítási támogatásokhoz: Vidéki Program (3 M Ft) és KEHOP Plusz (5 M Ft). Tudja meg, mennyit spórolhat klíma- vagy hőszivattyú-telepítéssel!",

  openGraph: {
    title: "Otthonfelújítási Támogatás 2026 – Spóroljon Milliókat | AClimate",
    description: "Két állami program, amelyekkel akár 5 millió forint vissza nem térítendő támogatást kaphat klíma- vagy hőszivattyú-telepítéshez. Részletes összehasonlítás, megtakarítási számítások.",
    url: "https://aclimate.hu/tudastar/otthonfelujitasi-tamogatas",
    siteName: "AClimate",
    locale: "hu_HU",
    type: "article",
    images: [
      {
        url: "https://aclimate.hu/szolgaltatasok_hero.png",
        width: 1408,
        height: 736,
        alt: "Otthonfelújítási Támogatás 2026 – AClimate útmutató",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Otthonfelújítási Támogatás 2026 | AClimate",
    description: "Megtudhatja, mennyi állami támogatást kaphat klíma- vagy hőszivattyú-telepítéshez Magyarországon.",
    images: ["https://aclimate.hu/szolgaltatasok_hero.png"],
  },
};

export default function OtthonfelujitasPage() {
  return <OtthonfelujitasClient />;
}
