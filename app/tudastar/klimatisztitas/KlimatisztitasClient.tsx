"use client";

import { useLanguage } from "@/app/lib/i18n";
import { useGoBack } from "@/app/lib/useGoBack";
import { Card } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import Image from "next/image";
import klimatisztitasKep from "@/public/klimatisztitas.png";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Droplets,
  Zap,
  Wind,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Star,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function KlimatisztitasClient() {
  const { language } = useLanguage();
  const goBack = useGoBack();

  const hu = language === "hu";

  const whyClean = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: hu ? "Egészség" : "Health",
      desc: hu
        ? "A piszkos beltéri egységben penész, baktériumok és allergének szaporodnak el. A klíma ezeket a levegőbe juttatja – különösen veszélyes ez gyermekek, asztmások és allergiások számára."
        : "A dirty indoor unit harbours mould, bacteria and allergens, which the AC blows into the air – especially hazardous for children, asthmatics and allergy sufferers.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: hu ? "Energiahatékonyság" : "Energy efficiency",
      desc: hu
        ? "Egy eltömött hőcserélőn keresztül a klíma lényegesen több áramot fogyaszt ugyanannyi hőteljesítményért. A rendszeres tisztítás jellemzően 10–20%-kal csökkenti az áramfogyasztást."
        : "A clogged heat exchanger means the unit draws significantly more power for the same output. Regular cleaning typically cuts energy use by 10–20%.",
    },
    {
      icon: <Wind className="w-5 h-5" />,
      title: hu ? "Élettartam" : "Longevity",
      desc: hu
        ? "A szennyezett egységek kompresszora és ventilátora fokozottan terhelt, ami korai meghibásodáshoz vezet. A tisztán tartott klíma akár 5–8 évvel tovább működik."
        : "Dirty units put excessive strain on the compressor and fan, leading to premature failure. A well-maintained AC can last 5–8 years longer.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: hu ? "Garancia" : "Warranty",
      desc: hu
        ? "A legtöbb gyártó a garancia fenntartásához évente legalább egy szakszerű tisztítást ír elő. Ennek igazolása hiányában a garancia megvonható."
        : "Most manufacturers require at least one professional clean per year to maintain the warranty. Without proof of service, warranty claims can be rejected.",
    },
  ];

  const dosAndDonts = [
    {
      ok: true,
      text: hu
        ? "Teljes vegyszeres gépi mosás: beltéri egység mosózsákkal, kültéri egység alapos tisztítása"
        : "Full chemical machine wash: indoor unit with washing bag, thorough outdoor unit cleaning",
    },
    {
      ok: true,
      text: hu
        ? "Hőcserélők, csepptálca, ventilátor átöblítése mosószeres oldattal és tiszta vízzel"
        : "Heat exchangers, drip tray and fan flushed with cleaning solution and clean water",
    },
    {
      ok: true,
      text: hu
        ? "Kültéri egység lamellái és ventilátora: szennyeződés, pollen, nyárfa-pehely eltávolítása"
        : "Outdoor unit fins and fan: removal of dirt, pollen and poplar fluff",
    },
    {
      ok: false,
      text: hu
        ? "Csak beltéri egységre vonatkozó tisztítás – a kültéri egység nélkül a munka nem teljes"
        : "Indoor-unit-only service – without cleaning the outdoor unit, the job is incomplete",
    },
    {
      ok: false,
      text: hu
        ? "Fertőtlenítő spray-vel való \"tisztítás\" – ez nem mosás, csak felületi illatosítás, nem távolítja el a lerakódásokat"
        : "Disinfectant spray \"cleaning\" – this is not washing; it only masks odours and does not remove deposits",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Button
            onClick={goBack}
            variant="ghost"
            className="cursor-pointer mb-8 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {hu ? "Vissza" : "Back"}
          </Button>

          <div className="max-w-3xl mx-auto">

            {/* Header */}
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
                {hu ? "Tudástár" : "Knowledge Base"}
              </Badge>
              <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4 leading-tight">
                {hu
                  ? "Klímatisztítás: miért fontos és mi a különbség a valódi mosás és a látszattisztítás között?"
                  : "AC Cleaning: Why it matters and what separates a real wash from a cosmetic clean"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {hu
                  ? "A rendszeres, szakszerű klímatisztítás nem csupán az egészséget védi – a garancia megőrzésének is feltétele."
                  : "Regular professional AC cleaning not only protects your health – it is also a condition for maintaining your warranty."}
              </p>
            </div>

             {/* Hero image */}
            <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={klimatisztitasKep}
                alt={hu ? "Szakszerű klímatisztítás mosózsákos eljárással" : "Professional AC cleaning with washing bag method"}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* Why clean */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {hu ? "Miért kell rendszeresen tisztítani a klímát?" : "Why does an AC need regular cleaning?"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyClean.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Card className="p-5 h-full border-border/50">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary/10 text-primary rounded-lg p-2">
                          {item.icon}
                        </span>
                        <span className="font-semibold text-slate-900">{item.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Warranty section */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {hu ? "Garancia és tisztítás: az összefüggés" : "Warranty and cleaning: the connection"}
              </h2>
              <div className="space-y-4">
                <Card className="p-6 border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    {hu
                      ? "A legtöbb klímaberendezés gyártója a garancia fenntartásához évente legalább egy szakszerű tisztítást ír elő. Ez nem csupán ajánlás – ha garanciaigény esetén nem tudja igazolni a rendszeres karbantartást, a szerviz elutasíthatja a garanciális javítást."
                      : "Most AC manufacturers require at least one professional clean per year as a condition for warranty coverage. This is not merely a recommendation – if you cannot prove regular maintenance when making a warranty claim, the service may be refused."}
                  </p>
                </Card>

                {/* Syen highlight */}
                <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 bg-amber-500 text-white rounded-xl p-2 mt-0.5">
                      <Star className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-bold text-amber-900 text-lg mb-2">
                        {hu ? "Syen: kiterjesztett garancia rendszeres tisztítással" : "Syen: extended warranty with regular cleaning"}
                      </p>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        {hu
                          ? "A Syen klímák alapesetben 3 + 2 év garanciával rendelkeznek. Ha azonban évente kétszer elvégzik a szakszerű tisztítást, a garancia 5 + 2 évre bővíthető – ez összesen 7 év garanciavédelem, ami a piacon kiemelkedően hosszú futamidő."
                          : "Syen ACs come with a standard 3 + 2-year warranty. However, if professional cleaning is carried out twice a year, the warranty extends to 5 + 2 years – a total of 7 years of coverage, which is exceptionally long in the market."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Real cleaning vs fake */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {hu ? "Mi számít valódi tisztításnak?" : "What counts as real cleaning?"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {hu
                  ? "A piacon sokféle \"klímatisztítás\" létezik – de nem mindegyik ér annyit, amennyit kérnek érte."
                  : "The market offers many forms of \"AC cleaning\" – but not all are worth what is charged for them."}
              </p>
              <div className="space-y-3">
                {dosAndDonts.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 rounded-xl px-5 py-4 ${
                      item.ok
                        ? "bg-emerald-50 border border-emerald-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    {item.ok ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <p className={`text-sm leading-relaxed ${item.ok ? "text-emerald-900" : "text-red-900"}`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <Card className="mt-6 p-5 border-orange-200 bg-orange-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-orange-900 leading-relaxed">
                    {hu
                      ? "A spray-es kezelés után a gép tisztának tűnhet és kellemes illatú lehet – de a hőcserélő lamelláiban és a csepptálcában megmaradnak a lerakódások, penész és baktériumok. Ez nem felel meg a gyártók által előírt \"szakszerű tisztítás\" követelményének."
                      : "After a spray treatment, the unit may seem clean and smell fresh – but deposits, mould and bacteria remain in the heat exchanger fins and drip tray. This does not meet the manufacturers' requirements for \"professional cleaning\"."}
                  </p>
                </div>
              </Card>
            </section>

            {/* Our service & pricing */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {hu ? "Amit mi vállalunk" : "Our service"}
              </h2>

              <Card className="p-6 border-primary/20 bg-primary/[0.03] mb-4">
                <p className="font-semibold text-slate-900 mb-3">
                  {hu ? "Teljes vegyszeres gépi mosás – beltéri + kültéri egység" : "Full chemical machine wash – indoor + outdoor unit"}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {hu
                      ? "Beltéri egység: mosózsákos eljárással, mosószeres oldattal átöblítve – lamellacsomag, csepptálca, ventilátor alaposan megtisztítva"
                      : "Indoor unit: washing-bag method, flushed with cleaning solution – coil, drip tray and fan thoroughly cleaned"}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {hu
                      ? "Kültéri egység: lamellacsomag, ventilátorlapát, szűrők – szennyeződés, pollen, pehely eltávolítása"
                      : "Outdoor unit: fins, fan blades, filters – removal of dirt, pollen and fluff"}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {hu
                      ? "Elvégzett munkáról számla, amellyel a garancia igazolható"
                      : "Invoice of completed service for warranty proof"}
                  </li>
                </ul>
              </Card>

              {/* Price box */}
              <div className="rounded-2xl border-2 border-primary bg-primary text-white px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-white/80 text-sm mb-1">
                    {hu ? "Egységes ár / klíma" : "Flat rate / AC unit"}
                  </p>
                  <p className="text-4xl font-bold">29 000 Ft</p>
                  <p className="text-white/80 text-sm mt-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {hu
                      ? "Kiszállási díj nélkül Pécs 30 km-es körzetében"
                      : "No call-out fee within 30 km of Pécs"}
                  </p>
                </div>
                <Link href="/kapcsolat">
                  <Button className="cursor-pointer bg-white text-primary hover:bg-white/90 rounded-full px-7 font-semibold flex-shrink-0">
                    {hu ? "Időpontot kérek" : "Request appointment"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* Contact CTA box */}
            <div className="rounded-2xl bg-primary/5 border border-primary/15 px-8 py-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0 bg-primary text-white rounded-xl p-3">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="font-semibold text-lg text-foreground">
                  {hu
                    ? "Kérdése van a klímatisztítással kapcsolatban?"
                    : "Have questions about AC cleaning?"}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {hu
                    ? "Írjon nekünk, és egyeztetünk egy megfelelő időpontot."
                    : "Send us a message and we'll arrange a convenient time."}
                </p>
              </div>
              <Link href="/kapcsolat" className="flex-shrink-0">
                <Button className="cursor-pointer bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                  {hu ? "Kapcsolatfelvétel" : "Get in touch"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
