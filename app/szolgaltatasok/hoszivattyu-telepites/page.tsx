"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Button } from "@/app/ui/button";
import { useGoBack } from "@/app/lib/useGoBack";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  TrendingDown,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/accordion";

export default function HeatPumpInstallation() {
  const { language } = useLanguage();
  const goBack = useGoBack();

  const t =
    language === "hu"
      ? {
          h1: "Hőszivattyú telepítés lakossági rendszerekhez",
          lead: "Modern, fenntartható fűtési és hűtési megoldások, amelyekkel jelentősen csökkentheti rezsiköltségeit.",
          description: {
            intro: "Hőszivattyús szolgáltatásaink keretében vállaljuk:",
            bullets: [
              "Teljes körű tervezés és méretezés",
              "Szakszerű telepítés és beüzemelés",
              "H-tarifa ügyintézés támogatása",
              "Rendszeres karbantartás",
            ],
          },
          benefits: [
            {
              title: "Rezsicsökkentés",
              desc: "Akár 70% megtakarítás",
              icon: <TrendingDown className="w-6 h-6" />,
            },
            {
              title: "Értéknövelés",
              desc: "Növeli az ingatlan értékét",
              icon: <ShieldCheck className="w-6 h-6" />,
            },
            {
              title: "Környezetbarát",
              desc: "Alacsony károsanyag-kibocsátás",
              icon: <CheckCircle2 className="w-6 h-6" />,
            },
            {
              title: "Modern technológia",
              desc: "Jövőbiztos megoldás",
              icon: <Settings className="w-6 h-6" />,
            },
          ],
          forWhom: [
            "Új építésű házakhoz",
            "Korszerűsítés előtt állóknak",
            "Gázról leválni kívánóknak",
            "Napelemes rendszerek mellé",
          ],
          faq: [
            {
              q: "Mennyi idő alatt térül meg?",
              a: "A jelenlegi energiaárak mellett 5-8 év az átlagos megtérülés.",
            },
            {
              q: "Zajos a kültéri egység?",
              a: "A modern hőszivattyúk halkabbak, mint egy átlagos beszélgetés.",
            },
            {
              q: "Működik fagyban is?",
              a: "Igen, a korszerű rendszerek -25°C-ig üzembiztosak.",
            },
          ],
          area: "Hőszivattyú telepítést Budapesten és Pécs környékén vállalunk.",
          cta: "Kérjen ingyenes felmérést hőszivattyú telepítéshez!",
        }
      : {
          h1: "Residential Heat Pump Installation",
          lead: "Modern, sustainable heating and cooling solutions that significantly reduce your energy bills.",
          description: {
            intro: "Our heat pump services include:",
            bullets: [
              "Complete system planning",
              "Professional installation",
              "Administrative support for subsidies",
              "Regular maintenance",
            ],
          },
          benefits: [
            {
              title: "Utility Savings",
              desc: "Up to 70% reduction",
              icon: <TrendingDown className="w-6 h-6" />,
            },
            {
              title: "Property Value",
              desc: "Increases home equity",
              icon: <ShieldCheck className="w-6 h-6" />,
            },
            {
              title: "Eco-friendly",
              desc: "Low carbon footprint",
              icon: <CheckCircle2 className="w-6 h-6" />,
            },
            {
              title: "Modern Tech",
              desc: "Future-proof solution",
              icon: <Settings className="w-6 h-6" />,
            },
          ],
          forWhom: [
            "New construction",
            "Home upgrades",
            "Gas replacement",
            "Solar PV owners",
          ],
          faq: [
            {
              q: "What is the ROI period?",
              a: "With current energy prices, usually 5-8 years.",
            },
            {
              q: "Is the outdoor unit noisy?",
              a: "Modern units are quieter than an average conversation.",
            },
            {
              q: "Does it work in freezing cold?",
              a: "Yes, modern systems operate reliably down to -25°C.",
            },
          ],
          area: "We provide heat pump installation in Budapest and Pécs regions.",
          cta: "Request a free assessment for your heat pump system!",
        };

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Button
            onClick={goBack}
            variant="ghost"
            className="cursor-pointer mb-8 flex items-center gap-2 hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "hu"
              ? "Vissza"
              : "Back"}
          </Button>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
                  {t.h1}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                  {t.lead}
                </p>
                <Link href="/kapcsolat">
                  <Button
                    size="lg"
                    className="cursor-pointer bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg"
                  >
                    {language === "hu" ? "Kapcsolatfelvétel" : "Contact Us"}
                  </Button>
                </Link>
              </div>

              <section className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">
                  {language === "hu" ? "Miben segítünk?" : "How we can help?"}
                </h2>
                <div className="bg-slate-50 p-8 rounded-3xl border border-border/50">
                  <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                    {t.description.intro}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {t.description.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-600 leading-relaxed"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
                  {language === "hu"
                    ? "Miért érdemes minket választani?"
                    : "Why choose us?"}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="text-center p-6 bg-white border border-border/50 rounded-2xl shadow-sm"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 leading-snug">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-16 bg-slate-900 text-white p-8 md:p-12 rounded-3xl">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                  {language === "hu" ? "Kinek ajánlott?" : "For whom?"}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.forWhom.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
                    >
                      <span className="font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 flex items-center gap-2">
                  {language === "hu" ? "Gyakori kérdések" : "FAQ"}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {t.faq.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-bold text-slate-900 leading-snug">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-2 pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              <section className="mb-16 p-8 bg-slate-50 border border-border/50 rounded-3xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                      {language === "hu"
                        ? "Területi megjelenés"
                        : "Service Areas"}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t.area}
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-primary p-12 rounded-3xl text-center text-white shadow-xl shadow-primary/20">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">
                  {t.cta}
                </h2>
                <Link href="/kapcsolat">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="cursor-pointer bg-white text-primary hover:bg-slate-100 rounded-full px-12 py-8 text-xl font-bold"
                  >
                    {language === "hu" ? "Kapcsolatfelvétel" : "Contact Us"}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
