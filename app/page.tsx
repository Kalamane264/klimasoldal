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
      stockTitle: "Akciós készülékek",
      stockDesc: (
        <>
          Az{" "}
          <Link
            className="text-primary font-bold underline hover:opacity-80 transition-opacity cursor-pointer"
            href={"/akcios-klimak"}
          >
            Akciós készülékek
          </Link>{" "}
          menüpontban a legújabb, rendszeresen frissülő promóciós kínálatunkat
          találhatja. Az éppen aktuális akciós ajánlatok mindig a készlet
          erejéig tartanak. Természetesen továbbra is kínálunk{" "}
          <strong>
            egyedi akciós lehetőségeket személyes megkeresés alapján
          </strong>{" "}
          is.
        </>
      ),
      inquiryTitle: "Érdeklődjön személyre szabott ajánlatunkról",
      inquiryDesc: (
        <>
          Kapcsolatfelvétel vagy érdeklődés esetén további tájékoztatást
          nyújtunk az egyedi akciós lehetőségekről, amelyeket kifejezetten az Ön
          igényeihez szabhatunk.
        </>
      ),
      localTitle: "Helyi kedvezmények",
      localDesc: (
        <>
          Örömmel értesítjük, hogy{" "}
          <strong>Hird, Vasas, Somogy, Hosszúhetény és Pécsvárad</strong> környékén végzett
          telepítések esetén <strong>extra kedvezményt</strong> tudunk
          biztosítani!
        </>
      ),
    },
    en: {
      title: "Important Information",
      subtitle: "Information about stock and custom discounts.",
      stockTitle: "Promotional Devices",
      stockDesc: (
        <>
          In the{" "}
          <Link
            className="text-primary font-bold underline hover:opacity-80 transition-opacity cursor-pointer"
            href={"/akcios-klimak"}
          >
            <strong>Special Offers</strong>
          </Link>{" "}
          menu, you can find our latest, regularly updated promotional
          selection. Current special offers are always valid while stocks last.
          Of course, we continue to offer <strong>personalized special deals based on
          individual inquiries</strong> as well.
        </>
      ),
      inquiryTitle: "Inquire About Your Custom Offer",
      inquiryDesc:
        "Upon contact or inquiry, we provide detailed information about current personalized promotional opportunities that can be tailored specifically to your needs.",
      localTitle: "Local Discounts",
      localDesc: (
        <>
          We are pleased to inform you that for installations in the{" "}
          <strong>Hird, Vasas, Somogy, Hosszúhetény and Pécsvárad</strong> areas, we can
          provide <strong>extra discounts</strong>!
        </>
      ),
    },
  };

  const content = language === "hu" ? infoContent.hu : infoContent.en;

  return (
    <main className="min-h-screen">
      <Hero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="border-primary/10 shadow-lg bg-slate-50/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                  <div className="bg-primary/5 p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary/10">
                    <div className="flex items-center gap-4 text-primary mb-6">
                      <Info className="w-8 h-8" />
                      <h2 className="font-bold text-2xl">{content.title}</h2>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {content.subtitle}
                    </p>
                  </div>

                  <div className="p-10 space-y-8">
                    <div className="flex gap-5">
                      <div className="mt-1 flex-shrink-0">
                        <BadgePercent className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">
                          {content.stockTitle}
                        </h3>
                        <p className="text-slate-600 text-base leading-relaxed">
                          {content.stockDesc}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5">
                      <div className="mt-1 flex-shrink-0">
                        <PhoneCall className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">
                          {content.inquiryTitle}
                        </h3>
                        <p className="text-slate-600 text-base leading-relaxed">
                          {content.inquiryDesc}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5">
                      <div className="mt-1 flex-shrink-0">
                        <MapPin className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">
                          {content.localTitle}
                        </h3>
                        <p className="text-slate-600 text-base leading-relaxed">
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
