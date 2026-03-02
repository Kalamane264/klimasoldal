"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function KlimakClient() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.type == "ac");

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-10">
              {language === "hu"
                ? "Oldalfali split klímák – a legnépszerűbb lakossági megoldás"
                : "Wall-Mounted Split Air Conditioners – The Most Popular Residential Solution"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu"
                ? <>
                Az oldalfali split klíma a legelterjedtebb és legkedvezőbb árú klimatizálási megoldás lakossági felhasználók számára. Egyszerű telepítés, megbízható működés és kiváló ár-érték arány jellemzi, ezért családi házakban, lakásokban és kisebb irodákban egyaránt ideális választás.
                <br /><br />
                A modern inverteres technológiának köszönhetően nemcsak hűtésre, hanem hatékony fűtésre is alkalmasak, miközben energiatakarékosan és csendesen üzemelnek. A legtöbb modell már Wi-Fi vezérléssel, levegőtisztító funkciókkal és kényelmi extrákkal érkezik.
                </>
                : <>
                Wall-mounted split air conditioners are the most widely used and cost-effective climate control solution for residential applications. Easy installation, reliable operation, and excellent value for money make them an ideal choice for houses, apartments, and small offices alike.
                <br /><br />
                Thanks to modern inverter technology, these units are suitable not only for cooling but also for efficient heating, while operating quietly and energy-efficiently. Most models now come equipped with built-in Wi-Fi control, air purification features, and a range of comfort functions.
                </>}
            </p>
          </div>
          <ProductList products={klimak} />
        </div>
      </main>
    </div>
  );
}
