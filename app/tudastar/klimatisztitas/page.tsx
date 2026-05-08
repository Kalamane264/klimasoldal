import type { Metadata } from "next";
import KlimatisztitasClient from "./KlimatisztitasClient";

export const metadata: Metadata = {
  title: "Klímatisztítás: Miért Fontos és Mit Jelent a Valódi Mosás? | AClimate",
  description: "A rendszeres klímatisztítás egészségvédelmi és garanciális okokból elengedhetetlen. Tudja meg, mi a különbség a valódi vegyszeres mosás és a látszattisztítás között. Pécs és környéke, 29 000 Ft.",
  openGraph: {
    title: "Klímatisztítás: Garancia, Egészség, Valódi Mosás | AClimate",
    description: "Miért kell évente tisztítani a klímát? Hogyan függ össze a garancia a rendszeres karbantartással? Mi a különbség a spray-es kezelés és a valódi vegyszeres mosás között?",
    url: "https://aclimate.hu/tudastar/klimatisztitas",
    siteName: "AClimate",
    locale: "hu_HU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klímatisztítás: Garancia és Egészség | AClimate",
    description: "Rendszeres vegyszeres klímatisztítás Pécs és 30 km-es körzetében, 29 000 Ft-tól, kiszállási díj nélkül.",
  },
};

export default function KlimatisztitasPage() {
  return <KlimatisztitasClient />;
}
