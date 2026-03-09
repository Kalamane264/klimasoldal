"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function KlimakClient() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.action).sort((a, b) => a.priceNum - b.priceNum);

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-10">
              {language === "hu"
                ? "Akciós Klímaberendezések, telepítéssel"
                : "Special offers on Air Conditioning Units with installation"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu"
                ? <>
                Találja meg az otthonába legjobban illő klímaberendezést kedvezményes áron! Akciós kínálatunkban megbízható gyártók modelljeit gyűjtöttük össze, hogy Önnek ne kelljen kompromisszumot kötnie a minőség és a költségek között. 
                <br /><br />
                Minden nálunk vásárolt készülékhez szakszerű telepítést és a gyártó által vállalt teljes körű garanciát (típustól függően akár 5 évet) biztosítunk. Böngésszen aktuális ajánlataink között a készlet erejéig!
                </>
                : <>
                Find the perfect air conditioning solution for your home at a discounted price! Our special offers feature models from reliable manufacturers, ensuring you don't have to compromise on quality or your budget. 
                <br /><br />
                For every unit purchased, we provide professional installation and the full manufacturer's warranty (up to 5 years, depending on the model). Browse our current deals while stocks last!
                </>}
            </p>
          </div>
          <ProductList products={klimak} />
        </div>
      </main>
    </div>
  );
}
