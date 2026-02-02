"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function KlimaLista() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.type == "ac-casette");

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-10">
              {language === "hu"
                ? "Kazettás klímák – diszkrét megjelenés, egyenletes komfort nagy terekben"
                : "Cassette Air Conditioners – discrete appearance, consistent comfort in large spaces"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu" ? 
                <>
                  A kazettás klímák olyan mennyezetbe süllyesztett klímaberendezések, amelyek elsősorban irodák, üzlethelyiségek, éttermek és nagyobb egybenyitott terek klimatizálására készültek. A több irányba áramló levegőnek köszönhetően a hűtés és fűtés egyenletesebb, mint hagyományos fali klímák esetén.
                  <br />
                  <br />
                  Esztétikus, alig látható kialakításuk jól illeszkedik modern belső terekbe, miközben a korszerű inverteres technológia energiatakarékos és megbízható működést biztosít egész évben.
                </>
               : 
                <>
                  Cassette air conditioners are ceiling-recessed units primarily designed for the climate control of offices, retail spaces, restaurants, and larger open-plan areas. Thanks to the multi-directional airflow, cooling and heating are more even compared to traditional wall-mounted units. 
                  <br />
                  <br />
                  Their aesthetic, barely visible design fits well into modern interiors, while advanced inverter technology ensures energy-efficient and reliable operation all year round.
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
