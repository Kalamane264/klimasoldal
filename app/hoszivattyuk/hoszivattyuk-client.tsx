"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function HoszivattyukClient() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.type == "hp").sort((a, b) => a.priceNum - b.priceNum);

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-10">
              {language === "hu"
                ? "Hőszivattyú rendszerek – egyedi tervezéssel és kivitelezéssel"
                : "Heat Pump Systems – Custom Design and Professional Installation"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu"
                ? <>
                Ezen az oldalon az általunk kínált hőszivattyú-rendszerek közül válogathat. A feltüntetett árak a készülékek irányárai, a telepítés minden esetben egyedi kalkuláció alapján történik.
                <br /><br />
                A hőszivattyús rendszer kialakítása összetett, épületgépészeti tervezést igénylő folyamat, amely nagyban függ az ingatlan adottságaitól, a meglévő fűtési rendszertől, a hőigénytől és a szükséges kiegészítő munkáktól. Éppen ezért pontos kivitelezési árat kizárólag előzetes helyszíni felmérést követően tudunk adni.
                <br /><br />
                A tervezéstől a rendszer kialakításán át a beüzemelésig teljes körű szakmai támogatást biztosítunk.
                </>
                : <>
                On this page you can explore the heat pump systems we offer. The listed prices refer to the unit price only; installation costs are calculated individually for each project.
                <br /><br />
                Installing a heat pump system is a complex building engineering process that depends on the property's characteristics, the existing heating system, the building’s heat demand, and any required additional works. For this reason, an accurate installation quote can only be provided after a prior on-site assessment.
                <br /><br />
                From system design through installation and commissioning, we provide full professional support at every stage of the project.
                </>}
            </p>
          </div>
          <ProductList products={klimak} />
        </div>
      </main>
    </div>
  );
}
