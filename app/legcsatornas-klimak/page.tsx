"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function KlimaLista() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.type == "ac-ducted");

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-10">
              {language === "hu"
                ? "Légcsatornás klímák – rejtett klimatizálás teljes lakásokhoz és nagy terekhez"
                : "Ducted Air Conditioners – concealed climate control for entire apartments and large spaces"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu" ? 
                <>
                  A légcsatornás klímák olyan központi klímarendszerek, amelyeknél a levegő nem közvetlenül a készülékből áramlik a helyiségbe, hanem légcsatornákon keresztül jut el több szobába. A beltéri egység álmennyezetben, gépészeti térben vagy padlástérben kap helyet, így a rendszer szinte teljesen láthatatlan marad.
                  <br />
                  <br />
                  Ez a megoldás ideális családi házak, irodák, üzlethelyiségek vagy nagyobb alapterületű ingatlanok klimatizálására, ahol fontos az egységes megjelenés és az egyenletes hőmérséklet-eloszlás. A korszerű inverteres technológia energiatakarékos működést biztosít hűtés és fűtés üzemmódban egyaránt.
                </>
               : 
                <>
                  Ducted air conditioners are central HVAC systems where air does not flow directly from the unit into the room, but is distributed to multiple rooms through a network of ducts. The indoor unit is installed within a suspended ceiling, a mechanical room, or an attic space, allowing the system to remain almost entirely invisible.
                  <br />
                  <br />
                  This solution is ideal for climate control in family homes, offices, retail spaces, or larger properties where a uniform appearance and even temperature distribution are essential. Modern inverter technology ensures energy-efficient operation in both cooling and heating modes.
                </>
              }
            </p>
          </div>
          <ProductList products={klimak} />
        </div>
      </main>
    </div>
  );
}
