"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Card, CardContent } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { ShieldCheck, Zap, Info, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { ArrowLeft } from "lucide-react";

export default function HEMProgramClient() {
  const { language } = useLanguage();

  const content = {
    hu: {
      title: "Hitelesített Energiamegtakarítás (HEM) – Miért jó ez Önnek?",
      intro:
        "A HEM program egy olyan magyarországi kezdeményezés, amely az energiahatékonysági beruházásokat ösztönzi. Laikus szemmel nézve ez egyfajta „visszatérítés” vagy kedvezmény, amit a korszerűsítés után kaphat.",
      sections: [
        {
          title: "Mi az a HEM?",
          icon: <Info className="w-5 h-5 text-primary" />,
          text: "A Hitelesített Energiamegtakarítás lényege, hogy ha Ön olyan beruházást hajt végre (pl. klímatelepítés vagy hőszivattyú), amely bizonyíthatóan csökkenti az energiafelhasználást, akkor az ebből származó megtakarítás „pénzzé tehető”.",
        },
        {
          title: "Hogyan működik a folyamat?",
          icon: <Zap className="w-5 h-5 text-amber-500" />,
          text: "A telepítés után egy energetikai audit igazolja a megtakarítást. Ezt a megtakarítást (mint vagyoni értékű jogot) energiakereskedő cégek vásárolják meg, mert nekik törvényi kötelezettségük energiamegtakarítást felmutatni.",
        },
        {
          title: "Mekkora előnyt jelent?",
          icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
          text: "A HEM segítségével a beruházási költség egy része (akár 10-20%-a is) közvetve visszajöhet kedvezmény vagy készpénzes kifizetés formájában. Ez különösen jelentős egy nagyobb hőszivattyús rendszer esetében.",
        },
      ],
      steps: [
        "Korszerű eszköz kiválasztása (A++ vagy jobb)",
        "Szakszerű telepítés az AClimate csapatával",
        "Dokumentáció és hitelesítés",
        "A megtakarítás értékesítése és a kedvezmény jóváírása",
      ],
    },
    en: {
      title: "Certified Energy Savings (HEM) – Why is it good for you?",
      intro:
        "The HEM program is a Hungarian initiative that encourages energy efficiency investments. From a layman's perspective, it's a type of 'refund' or discount you can receive after modernization.",
      sections: [
        {
          title: "What is HEM?",
          icon: <Info className="w-5 h-5 text-primary" />,
          text: "The essence of Certified Energy Savings is that if you make an investment (e.g., AC installation or heat pump) that provably reduces energy consumption, the resulting savings can be 'monetized'.",
        },
        {
          title: "How does the process work?",
          icon: <Zap className="w-5 h-5 text-amber-500" />,
          text: "After installation, an energy audit certifies the savings. These savings (as a valuable right) are purchased by energy trading companies, as they have a legal obligation to demonstrate energy savings.",
        },
        {
          title: "How big is the benefit?",
          icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
          text: "With HEM, a portion of the investment cost (up to 10-20%) can indirectly return in the form of a discount or cash payment. This is particularly significant for larger heat pump systems.",
        },
      ],
      steps: [
        "Selection of modern equipment (A++ or better)",
        "Professional installation with the AClimate team",
        "Documentation and certification",
        "Sale of savings and crediting the discount",
      ],
    },
  };

  const active = language === "hu" ? content.hu : content.en;

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/tudastar">
            <Button
              variant="ghost"
              className="cursor-pointer mb-8 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === "hu"
                ? "Vissza a tudástárhoz"
                : "Back to knowledge base"}
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                  {active.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                  {active.intro}
                </p>
              </div>

              <div className="grid gap-6">
                {active.sections.map((section, idx) => (
                  <Card
                    key={idx}
                    className="border-none shadow-sm bg-slate-50/50"
                  >
                    <CardContent className="p-6 flex gap-4">
                      <div className="mt-1 p-2 bg-white rounded-lg shadow-sm h-fit">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">
                          {section.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {language === "hu"
                    ? "A folyamat lépései"
                    : "Steps of the process"}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {active.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-sm font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl">
                <p className="text-slate-500 mb-4">
                  {language === "hu"
                    ? "Szeretné igénybe venni a HEM kedvezményt a telepítés mellé?"
                    : "Would you like to use the HEM discount with your installation?"}
                </p>
                <Link href="/kapcsolat">
                  <Badge className="px-6 py-2 text-sm cursor-pointer hover:bg-primary/90 transition-colors">
                    {language === "hu"
                      ? "Érdeklődöm a részletekről"
                      : "Inquire about details"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
