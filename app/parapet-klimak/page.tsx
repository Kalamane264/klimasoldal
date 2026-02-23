"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function KlimaLista() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.type == "ac-parapet");

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-10">
              {language === "hu"
                ? "Parapet klímák – Rugalmas elhelyezés padlóra vagy mennyezet alá"
                : "Floor-Ceiling Air Conditioners – Flexible placement on the floor or under the ceiling"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu" ? 
                <>
                  A parapet klímák a legsokoldalúbb beltéri egységek közé tartoznak, hiszen kialakításuk lehetővé teszi a padló közeli (radiátor-szerű) és a mennyezet alatti vízszintes elhelyezést is. 
                  <br />
                  <br />
                  Ez a rugalmasság ideálissá teszi őket irodákba, üzlethelyiségekbe vagy olyan helyiségekbe, ahol a falak adottságai miatt változatos telepítési megoldásra van szükség. Nagy teljesítményű légáramukkal hatékonyan hűtik vagy fűtik át a nagyobb tereket is, miközben modern megjelenésükkel bármilyen környezetbe beilleszkednek.
                </>
               : 
                <>
                 Floor-ceiling (parapet) air conditioners are among the most versatile indoor units, as their design allows for both floor-level (radiator-like) and horizontal installation under the ceiling. 
                 <br />
                 <br />
                 This flexibility makes them ideal for offices, shops, or any room where wall constraints require diverse installation solutions. With their high-performance airflow, they efficiently cool or heat even larger spaces while blending into any environment with their modern design.
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
