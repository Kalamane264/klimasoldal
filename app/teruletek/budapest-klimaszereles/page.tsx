"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Button } from "@/app/ui/button";
import { ArrowLeft, CheckCircle2, Zap, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BudapestKlimaszerelesPage(){
    
  const { language } = useLanguage();
  const area = "budapest";

  const content = {
    budapest: {
      hu: {
        title: "Klímaszerelés és hőszivattyú-telepítés Budapesten",
        intro: "Budapest összes kerületében és a környező Pest megyei településeken rendszeresen végzünk klímaszerelési és hőszivattyú-telepítési munkákat családi házakban és társasházakban egyaránt. A helyi adottságok ismeretében gyorsan és hatékonyan tudjuk megtervezni és kivitelezni a megfelelő megoldást.",
        services: {
          title: "Milyen szolgáltatásokat végzünk Budapesten?",
          items: [
            { title: "Klímaszerelés Budapesten", desc: "Új klímaberendezések telepítése lakásokban és családi házakban." },
            { title: "Klímatisztítás és karbantartás", desc: "Meglévő rendszerek tisztítása, időszakos ellenőrzése minden kerületben." },
            { title: "Hőszivattyú-telepítés", desc: "Energiatakarékos fűtési megoldások tervezése és kivitelezése a főváros környékén." },
            { title: "Hibakeresés, javítás", desc: "Gyors segítség meghibásodás esetén Budapest egész területén." }
          ]
        },
        localSpecifics: {
          title: "Budapesti sajátosságok",
          content: "Budapesten gyakoriak a műemlékvédelem alatt álló épületek, valamint a szigorúbb társasházi szabályozások, ahol a klíma- és hőszivattyú-rendszerek telepítése speciális engedélyeket vagy egyedi műszaki megoldásokat igényel. Tapasztalt csapatunk segít a szabályos kivitelezésben."
        },
        availability: {
          title: "Kiszállás és elérhetőség",
          content: "Budapest kiemelt szolgáltatási területünk, ezért garantáljuk a gyors kiszállást, a díjmentes helyszíni felmérést és a rugalmas időpont-egyeztetést a hét minden napján."
        },
        whyUs: {
          title: "Miért minket választanak Budapesten?",
          items: ["Rendszeres helyi munkák", "Ismerjük a pesti és budai ingatlantípusokat", "Átlátható feltételek és garancia"]
        },
        cta: "Klímaszerelésre vagy hőszivattyú-telepítésre van szüksége Budapesten?"
      },
      en: {
        title: "AC Installation and Heat Pump Solutions in Budapest",
        intro: "We regularly perform air conditioning and heat pump installations in all districts of Budapest and surrounding Pest county, serving both detached houses and apartments. With our local knowledge, we plan and execute the most efficient solutions for your home.",
        services: {
          title: "Services in Budapest",
          items: [
            { title: "AC Installation", desc: "Professional setup of new cooling systems in homes and apartments." },
            { title: "Maintenance & Cleaning", desc: "Regular cleaning and periodic checks for existing systems in all districts." },
            { title: "Heat Pump Installation", desc: "Energy-efficient heating design and implementation in the capital region." },
            { title: "Repair Services", desc: "Fast assistance for any malfunctions across the entire Budapest area." }
          ]
        },
        localSpecifics: {
          title: "Local Characteristics",
          content: "Budapest often features historical buildings and strict residential regulations where AC or heat pump installation requires special permits or unique technical solutions. Our experienced team ensures compliant and professional execution."
        },
        availability: {
          title: "Availability & Response",
          content: "Budapest is our primary service area, which allows us to guarantee rapid response times, free on-site consultations, and flexible scheduling."
        },
        whyUs: {
          title: "Why Choose Us in Budapest?",
          items: ["Frequent local projects", "Familiarity with local building types", "Transparent terms and full warranty"]
        },
        cta: "Need AC installation or a heat pump in Budapest?"
      }
    },
    pecs: {
      hu: {
        title: "Klímaszerelés és hőszivattyú-telepítés Pécsen",
        intro: "Pécsen és környékén rendszeresen végzünk klímaszerelési és hőszivattyú-telepítési munkákat családi házakban és társasházakban egyaránt. A helyi adottságok ismeretében gyorsan és hatékonyan tudjuk megtervezni és kivitelezni a megfelelő megoldást.",
        services: {
          title: "Milyen szolgáltatásokat végzünk Pécsen?",
          items: [
            { title: "Klímaszerelés Pécsen", desc: "Új klímaberendezések telepítése lakásokban és családi házakban." },
            { title: "Klímatisztítás és karbantartás", desc: "Meglévő rendszerek tisztítása, időszakos ellenőrzése." },
            { title: "Hőszivattyú-telepítés és karbantartás", desc: "Energiatakarékos fűtési megoldások tervezése és kivitelezése Baranya megyében." },
            { title: "Hibakeresés, javítás", desc: "Gyors segítség meghibásodás esetén Pécs környékén." }
          ]
        },
        localSpecifics: {
          title: "Pécsi sajátosságok",
          content: "Pécsen és környékén gyakoriak a családi házas ingatlanok, valamint a domborzatilag tagolt városrészek (Mecsekoldal), ahol a klíma- és hőszivattyú-rendszerek telepítése egyedi műszaki megoldásokat igényel."
        },
        availability: {
          title: "Kiszállás és elérhetőség",
          content: "Pécs kiemelt szolgáltatási területünk, ezért biztosítjuk a gyors kiszállást, díjmentes felmérést és rugalmas időpont-egyeztetést a helyi lakosoknak."
        },
        whyUs: {
          title: "Miért minket választanak Pécsen?",
          items: ["Rendszeres helyi munkák", "Ismerjük a mecseki ingatlantípusokat", "Átlátható feltételek"]
        },
        cta: "Klímaszerelésre vagy hőszivattyú-telepítésre van szüksége Pécsen?"
      },
      en: {
        title: "AC Installation and Heat Pump Solutions in Pécs",
        intro: "We regularly provide professional AC and heat pump installation services in Pécs and the surrounding area. Our expertise in local building types and conditions ensures efficient results for every project.",
        services: {
          title: "Services in Pécs",
          items: [
            { title: "AC Installation", desc: "Expert setup of new air conditioning units for houses and apartments." },
            { title: "Maintenance", desc: "Thorough cleaning and inspection of existing systems." },
            { title: "Heat Pump Solutions", desc: "Modern, sustainable heating and cooling designs for the Pécs region." },
            { title: "Repairs", desc: "Swift troubleshooting and repair services for any system failure." }
          ]
        },
        localSpecifics: {
          title: "Local Characteristics",
          content: "The diverse terrain of Pécs, especially the Mecsek hillside, often requires customized mounting and technical solutions for external units to ensure optimal performance and aesthetics."
        },
        availability: {
          title: "Availability",
          content: "As a priority service area, we offer fast response times and free professional assessments for all residential clients in Pécs."
        },
        whyUs: {
          title: "Why Choose Us in Pécs?",
          items: ["Strong local presence", "Specialized Mecsek region expertise", "Clear pricing and reliability"]
        },
        cta: "Looking for AC or heat pump solutions in Pécs?"
      }
    }
  };

  const data = content[area as keyof typeof content] || content.budapest;
  const t = language === 'hu' ? data.hu : data.en;

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/teruletek">
            <Button variant="ghost" className="mb-8 flex items-center gap-2 hover:bg-slate-100 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {language === 'hu' ? 'Vissza a területekhez' : 'Back to areas'}
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8">
                {t.title}
              </h1>
              
              <div className="prose prose-lg text-muted-foreground mb-12">
                <p>{t.intro}</p>
              </div>

              {/* Services List */}
              <section className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">
                  {t.services.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {t.services.items.map((item, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Local Specifics */}
              <section className="mb-16 bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                    {t.localSpecifics.title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {t.localSpecifics.content}
                  </p>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <MapPin className="w-48 h-48" />
                </div>
              </section>

              {/* Availability & Why Us */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    {t.availability.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.availability.content}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    {t.whyUs.title}
                  </h2>
                  <ul className="space-y-3">
                    {t.whyUs.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Local reference placeholder if needed, for now CTA */}
              <div className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-3xl text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6">
                  {t.cta}
                </h2>
                <Link href="/kapcsolat">
                  <Button size="lg" className="cursor-pointer bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg rounded-full">
                    {language === 'hu' ? 'Vegye fel velünk a kapcsolatot' : 'Contact us today'}
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