"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function HoszivattyuLista() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.type == "hp");

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              {language === "hu"
                ? "Hőszivattyúk telepítéssel – választható rendszerek"
                : "Heat pumps with installation – available models"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu"
                ? `Ezen az oldalon az általunk kínált hőszivattyú-rendszerek közül válogathat.
                A feltüntetett árak a telepítést is tartalmazzák.
                A megfelelő hőszivattyú kiválasztása az épület adottságaitól, a fűtési rendszertől 
                és az energiaigénytől is függ — a tervezéstől a kivitelezésig szakmai támogatást 
                nyújtunk.`
                : `On this page, you can browse our range of heat pump systems. All listed prices 
                include the cost of installation.
                Choosing the right heat pump depends on the building's characteristics, the 
                existing heating system, and your energy requirements. We provide professional 
                support throughout the entire process, from planning to installation.`}
            </p>
          </div>
          <ProductList products={klimak} />
        </div>
      </main>
    </div>
  );
}
