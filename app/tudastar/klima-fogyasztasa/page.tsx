import type { Metadata } from "next";
import KlimaFogyasztasaClient from "./KlimaFogyasztasaClient";

export const metadata: Metadata = {
  title: "Mennyit fogyaszt valójában egy klíma? | AClimate",
  description:
    "A 3,5 kW-os klíma nem fogyaszt 3,5 kW áramot! Megmagyarázzuk a COP/EER fogalmát, és konkrét forintban megadjuk, mennyibe kerül egy klíma egy nyári hónapban.",
  openGraph: {
    title: "Mennyit fogyaszt valójában egy klíma?",
    description:
      "Megcáfoljuk a legnagyobb tévhitet, és konkrét számokkal mutatjuk meg, mennyibe kerül ténylegesen egy klíma üzemeltetése nyáron.",
    images: ["https://aclimate.hu/szolgaltatasok_hero.png"],
  },
};

export default function KlimaFogyasztasaPage() {
  return <KlimaFogyasztasaClient />;
}
