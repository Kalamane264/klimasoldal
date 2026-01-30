"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function KlimaLista() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.type == "ac-multi");

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-10">
              {language === "hu"
                ? "Multi klímák – több helyiség hűtése és fűtése egy kültéri egységgel"
                : "Multi Split Systems – cooling and heating multiple rooms with a single outdoor unit"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu" ? 
                <>
                  A multi klímák olyan klímarendszerek, amelyeknél egy kültéri
                  egységhez több beltéri egység csatlakozik. Ideális megoldást
                  jelentenek, ha több szobát szeretne hűteni vagy fűteni kevesebb
                  kültéri egység elhelyezésével.
                  <br />
                  <br />A multi klímás rendszerek jól alkalmazhatók lakásokban,
                  családi házakban és irodákban, a beltéri egységek pedig igény
                  szerint kombinálhatók. A helyiségek hőmérséklete külön-külön
                  szabályozható, így kényelmes és hatékony megoldást nyújtanak
                  egész évben.
                </>
               : 
                <>
                  Multi-split systems are air conditioning solutions where
                  multiple indoor units are connected to a single outdoor unit.
                  They represent an ideal solution if you want to cool or heat
                  several rooms while minimizing the number of outdoor units
                  installed on the building. 
                  <br />
                  <br />
                  Multi-split systems are well-suited
                  for apartments, houses, and offices, and the indoor units can
                  be combined according to your specific needs. The temperature
                  of each room can be controlled individually, providing a
                  comfortable and efficient solution all year round.
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
