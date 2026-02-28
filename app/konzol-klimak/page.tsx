"use client";

import ProductList from "../components/ProductList";
import { products } from "@/app/lib/products";
import { useLanguage } from "@/app/lib/i18n";

export default function KlimaLista() {
  const { language } = useLanguage();
  const klimak = products.filter((p) => p.type == "ac-console");

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-10">
              {language === "hu"
                ? "Konzol klímák – padlóközeli elhelyezés a maximális fűtési komfortért"
                : "Console Air Conditioners – Floor-level placement for maximum heating comfort"}
            </h1>
            <p className="text-lg text-muted-foreground maxWidth_700">
              {language === "hu" ? 
                <>
                  A konzol klímák kifejezetten az alsó falfelületekre optimalizált, padlóra állítható vagy falra szerelhető egységek. 
                  <br />
                  <br />
                  Ez a típus a legjobb választás, ha a cél a professzionális hőszivattyús fűtés: a padlóközeli elhelyezés és a speciális alsó-felső légkifúvás révén a készülék közvetlenül a lábmagasságban kezdi el a fűtést, megszüntetve a hideg zónákat. Kompakt méretüknek köszönhetően tökéletesen illeszkednek az ablakok alá, modern és hatékony alternatívát kínálva a hagyományos fűtési rendszerekkel szemben.
                </>
               : 
                <>
                Console air conditioners are units specifically optimized for lower wall surfaces, available as floor-standing or wall-mounted models. 
                <br />
                <br />
                This type is the ultimate choice for professional heat pump heating: thanks to the floor-level placement and specialized dual (top and bottom) airflow, the device starts heating directly at foot level, eliminating cold zones. Due to their compact size, they fit perfectly under windows, offering a modern and efficient alternative to traditional heating systems.
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
