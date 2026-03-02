"use client";

import { Hero } from "./components/Hero";
import { Info, BadgePercent, MapPin, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/app/ui/card";
import Link from "next/link";
import { useLanguage } from "@/app/lib/i18n";

export default function Home() {
  const { language } = useLanguage();

  const infoContent = {
    hu: {
      title: "Fontos tudnivalók",
      subtitle: "Tájékoztató a készletről és az egyedi kedvezményekről.",
      stockTitle: "Állandó és akciós készlet",
      stockDesc: <>A <Link href="/klimak" className="text-primary hover:underline font-medium">Készülékek</Link> menüpontban az állandóan elérhető kínálatunkat láthatja. Ezen felül rendszeresen kínálunk <strong>egyedi akciós készülékeket</strong> is.</>,
      inquiryTitle: "Érdeklődjön aktuális ajánlatainkról",
      inquiryDesc: "Kapcsolatfelvétel vagy érdeklődés esetén részletes tájékoztatást nyújtunk az éppen aktuális, kiemelt akciós lehetőségekről.",
      localTitle: "Helyi kedvezmények",
      localDesc: <>Örömmel értesítjük, hogy <strong>Hird, Vasas, Somogy és Hosszúhetény</strong> környékén végzett telepítések esetén <strong>extra kedvezményt</strong> tudunk biztosítani!</>
    },
    en: {
      title: "Important Information",
      subtitle: "Information about stock and custom discounts.",
      stockTitle: "Permanent and Sale Stock",
      stockDesc: <>In the <Link href="/klimak" className="text-primary hover:underline font-medium">Products</Link> section, you can see our permanently available range. In addition, we regularly offer <strong>unique discounted devices</strong>.</>,
      inquiryTitle: "Inquire About Our Current Offers",
      inquiryDesc: "Upon contact or inquiry, we provide detailed information about our current featured promotional opportunities.",
      localTitle: "Local Discounts",
      localDesc: <>We are pleased to inform you that for installations in the <strong>Hird, Vasas, Somogy, and Hosszúhetény</strong> areas, we can provide <strong>extra discounts</strong>!</>
    }
  };

  const content = language === "hu" ? infoContent.hu : infoContent.en;

  return (
   <main className="min-h-screen">
    <Hero />
    
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/10 shadow-sm bg-slate-50/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                <div className="bg-primary/5 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary/10">
                  <div className="flex items-center gap-3 text-primary mb-4">
                    <Info className="w-6 h-6" />
                    <h2 className="font-bold text-xl">{content.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {content.subtitle}
                  </p>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <BadgePercent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{content.stockTitle}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {content.stockDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1">
                      <PhoneCall className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{content.inquiryTitle}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {content.inquiryDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{content.localTitle}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {content.localDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
   </main>
  );
}
