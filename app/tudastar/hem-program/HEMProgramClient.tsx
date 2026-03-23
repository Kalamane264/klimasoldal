"use client";

import { useLanguage } from "@/app/lib/i18n";
import { useGoBack } from "@/app/lib/useGoBack";
import { Card, CardContent } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Button } from "@/app/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Banknote,
  CheckCircle2,
  AlertTriangle,
  Info,
  HelpCircle,
  ShieldCheck,
  Gift,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HEMProgramClient() {
  const { language } = useLanguage();
  const goBack = useGoBack();

  const hu = {
    badge: "Energiahatékonysági támogatás",
    title: "HEM – Hitelesített Energiamegtakarítás",
    subtitle:
      "Ha energiahatékony berendezést telepít, a megtakarítása pénzt ér. Ez a HEM program lényege – és akár 500 000 Ft kedvezményt is jelenthet.",
    intro:
      "Sokan hallottak már a HEM programról, de kevesen értik pontosan, hogyan is működik. Ez a cikk megpróbálja egyszerűen, lépésről lépésre elmagyarázni: mi ez, miért kaphat miatta pénzt, és mit kell tennie ahhoz, hogy tényleg megkapja.",

    whatIs: {
      title: "Mi az a HEM, egyszerűen fogalmazva?",
      lead: "Ha Ön gázkazánról klímára vagy hőszivattyúra vált, kevesebb energiát fogyaszt. Ez az energiamegtakarítás – meglepő módon – pénzt ér.",
      analogy:
        "Képzelje el úgy, mint a visszaváltható palackot: a megtakarítása egy olyan igazolás, amit energiakereskedő cégek (pl. MVM, E.ON) megvesznek Öntől. Cserébe Ön kedvezményt vagy készpénzt kap.",
      why: "De miért vennék meg mások az Ön megtakarítását?",
      whyAnswer:
        "Mert törvényi kötelezettségük van rá. Az EU-s energiahatékonysági szabályok alapján az energiakereskedőknek évente bizonyítaniuk kell, hogy hozzájárultak az ügyfelek energiamegtakarításához. Ha nem tudják saját beruházásaikkal teljesíteni ezt, megveszik mások igazolásait – ez a HEM (Hitelesített Energiamegtakarítás).",
    },

    howMuch: {
      title: "Mennyi pénzről van szó?",
      subtitle:
        "A kedvezmény mértéke függ attól, milyen berendezést telepít és jelenleg mivel fűt. Íme a jellemző tartományok:",
      rows: [
        { device: "Split klímaberendezés (fűtős)", amount: "85 000 – 400 000 Ft", note: "Gázkazánról való váltásnál a magasabb érték elérhető" },
        { device: "Levegő-víz hőszivattyú", amount: "100 000 – 500 000+ Ft", note: "Nagyobb rendszereknél akár ennél is több" },
        { device: "Több klíma egyszerre", amount: "összeadódik", note: "Minden egységre külön HEM keletkezik" },
      ],
      marketNote: "A HEM-igazolások piaci ára 2024-ben kb. 11 700 Ft/GJ volt. A pontos összeget mindig energetikai auditor határozza meg.",
    },

    example: {
      title: "Konkrét példa: 100 m2-es ház, gázkazánról 2 db fűtős split klímára váltás",
      rows: [
        { label: "Beruházás összege (2 db Gree klíma + szerelés)", value: "kb. 700 000 Ft", highlight: false },
        { label: "Hitelesített energiamegtakarítás", value: "kb. 15 GJ", highlight: false },
        { label: "HEM kedvezmény értéke (11 700 Ft/GJ)", value: "kb. 175 000 Ft", highlight: true },
        { label: "Ténylegesen fizetett összeg", value: "kb. 525 000 Ft", highlight: true },
      ],
      footnote:
        "A pontos összeg az ingatlan adataitól, a régi fűtés típusától és az új berendezés teljesítményétől függ. Az energiamegtakarítást auditor számítja ki.",
    },

    howToGet: {
      title: "Hogyan kapja meg a kedvezményt?",
      subtitle: "Két fő forma létezik – mindkettő legális és bevett gyakorlat:",
      options: [
        {
          icon: <Gift className="w-6 h-6 text-emerald-600" />,
          title: "A telepítésnél levonják az árból",
          desc: "A kivitelező vagy a forgalmazó (pl. az AClimate) Ön helyett intézi a HEM-et, és az értékét rögtön levonja a számlából. Önnek nem kell semmit intézni – egyszerűen kevesebbet fizet.",
          tag: "Legegyszerűbb",
          tagColor: "bg-emerald-100 text-emerald-800",
        },
        {
          icon: <Banknote className="w-6 h-6 text-blue-600" />,
          title: "Utólag érkezik pénzátutalás",
          desc: "Egyes energiakereskedők a telepítés és hitelesítés után közvetlenül utalják át a HEM ellenértékét az Ön bankszámlájára. Ezt általában a kereskedő szervezi.",
          tag: "Készpénzes változat",
          tagColor: "bg-blue-100 text-blue-800",
        },
      ],
    },

    steps: {
      title: "A folyamat lépésről lépésre",
      subtitle:
        "Ön valójában keveset tesz – a legtöbbet a kivitelező és az auditor intézi. De fontos tudni, mi történik a háttérben.",
      items: [
        {
          num: 1,
          title: "Megállapodás a kivitelezővel",
          desc: "Mielőtt a telepítés elkezdődik, a kivitelező (pl. az AClimate) bemutatja, hogy igénybe vehető-e HEM az adott beruházáshoz. Ha igen, aláírnak egy HEM-keletkeztetési megállapodást – ez jogosítja fel a kivitelezőt arra, hogy az Ön nevében intézze a folyamatot.",
        },
        {
          num: 2,
          title: "Telepítés elvégzése",
          desc: "A berendezés beszerelése a szokásos módon történik. Fontos, hogy a számla és a dokumentáció megfelelő legyen – ez az audit alapja.",
        },
        {
          num: 3,
          title: "Energetikai audit",
          desc: "Egy független, akkreditált energetikai auditor felmérést végez. Kiszámítja, hogy az új berendezés mennyi energiát takarít meg a régihez képest – az eredményt gigajoule-ban (GJ) fejezi ki. Ez az a szám, ami alapján a kedvezmény összege meghatározásra kerül.",
        },
        {
          num: 4,
          title: "HEM regisztráció",
          desc: "Az auditor igazolása alapján a HEM-et bejegyzik a hivatalos nyilvántartásba. Ettől a pillanattól vagyoni értékű jogként létezik.",
        },
        {
          num: 5,
          title: "Kedvezmény jóváírása",
          desc: "A kereskedő megvásárolja a HEM-et, Ön pedig megkapja az ellenértéket: vagy számlán levonva, vagy banki átutalásként.",
        },
      ],
    },

    conditions: {
      title: "Mikor jár a HEM kedvezmény?",
      subtitle:
        "Nem minden telepítéshez jár automatikusan. Az alábbiakat érdemes előre ellenőrizni:",
      yes: [
        "Az ingatlanban van meglévő, önálló fűtési rendszer (gázkazán, konvektor, elektromos fűtés stb.)",
        "Az adott helyiségben még nincs fűtésre alkalmas klíma",
        "Az új berendezés SCOP értéke legalább 4,1 (ez a fűtési hatékonyság mértéke – a legtöbb modern klíma megfelel)",
        "A beruházás elvégzése után kerül sor a hitelesítésre (nem előre)",
        "A HEM-et átadják az energiakereskedőnek (erről szól a megállapodás)",
      ],
      no: [
        "Kombinálható-e KEHOP Plusz programmal? Csak részlegesen – KEHOP esetén a HEM legfeljebb 70%-ban számolható el",
        "Nyaraló vagy nem lakott ingatlan esetén általában nem jár",
        "Ha nem volt korábbi fűtési rendszer (pl. újonnan épített ingatlan), a megtakarítás nehezen igazolható",
      ],
    },

    tax: {
      title: "Adómentes jövedelem",
      desc: "2024. január 1-jétől visszamenőleg is: a HEM átadásából Ön által kapott összeg személyi jövedelemadó-mentes (SZJA-mentes). Nem kell bevallani, nem kell utána adózni.",
    },

    faq: [
      {
        q: "Be kell-e mennem valahova, vagy intézik helyettem?",
        a: "A legtöbb esetben a kivitelező mindent intéz: megállapodás, auditor, nyilvántartás, kedvezmény jóváírása. Önnek elegendő beleegyezni és aláírni a megállapodást.",
      },
      {
        q: "Mennyi idő alatt érkezik meg a kedvezmény?",
        a: "Ha az árból vonják le, azonnal megjelenik a számlán. Ha utólagos átutalás, az audit és regisztráció után általában néhány héten belül megérkezik.",
      },
      {
        q: "Garantált az összeg?",
        a: "Az auditor pontos kalkulációt végez, de a HEM piaci ára változhat. A kivitelező általában becsléssel tud előre tájékoztatni, a végleges összeget az audit határozza meg.",
      },
      {
        q: "Kombinálható a Vidéki Otthonfelújítási Programmal?",
        a: "Igen, a Vidéki Programmal általában kombinálható a HEM, mivel az nem EU-s finanszírozású. A KEHOP Plusz esetén viszont csak 70%-os elszámolással használható együtt.",
      },
    ],

    cta: "Érdeklődjön a HEM kedvezményről az ajánlatkérésnél – ingyenesen megnézzük, Ön esetében mekkora összeg érhető el.",
  };

  const en = {
    badge: "Energy efficiency support",
    title: "HEM – Certified Energy Savings",
    subtitle:
      "When you install energy-efficient equipment, your savings have monetary value. This is the HEM program – and it can mean up to HUF 500,000 in discounts.",
    intro:
      "Many people have heard of the HEM program, but few understand exactly how it works. This article explains step by step: what it is, why you can get money from it, and what you need to do to actually receive it.",

    whatIs: {
      title: "What is HEM, in simple terms?",
      lead: "When you switch from a gas boiler to an AC unit or heat pump, you consume less energy. This energy saving – surprisingly – has monetary value.",
      analogy:
        "Think of it like a refundable bottle deposit: your savings are a certificate that energy trading companies (e.g., MVM, E.ON) purchase from you. In return, you receive a discount or cash.",
      why: "But why would others buy your savings?",
      whyAnswer:
        "Because they are legally required to. Under EU energy efficiency regulations, energy traders must annually prove that they contributed to customer energy savings. If they cannot meet this through their own investments, they purchase certificates from others – this is HEM (Certified Energy Savings).",
    },

    howMuch: {
      title: "How much money are we talking about?",
      subtitle:
        "The discount depends on what equipment you install and what you currently heat with. Here are typical ranges:",
      rows: [
        { device: "Split AC unit (with heating function)", amount: "HUF 85,000 – 400,000", note: "Higher amounts when switching from gas boiler" },
        { device: "Air-to-water heat pump", amount: "HUF 100,000 – 500,000+", note: "Even more for larger systems" },
        { device: "Multiple AC units at once", amount: "amounts add up", note: "Separate HEM is generated for each unit" },
      ],
      marketNote: "The market price of HEM certificates in 2024 was approx. HUF 11,700/GJ. The exact amount is always determined by an energy auditor.",
    },

    example: {
      title: "Concrete example: 100 m2 house, switching from gas boiler to 2 heating split ACs",
      rows: [
        { label: "Investment amount (2 Gree AC units + installation)", value: "approx. HUF 700,000", highlight: false },
        { label: "Certified energy savings", value: "approx. 15 GJ", highlight: false },
        { label: "HEM discount value (HUF 11,700/GJ)", value: "approx. HUF 175,000", highlight: true },
        { label: "Amount actually paid", value: "approx. HUF 525,000", highlight: true },
      ],
      footnote:
        "The exact figures depend on the property data, the type of old heating, and the performance of the new equipment. An auditor performs the precise calculation.",
    },

    howToGet: {
      title: "How do you receive the discount?",
      subtitle: "There are two main forms – both are legal and common practice:",
      options: [
        {
          icon: <Gift className="w-6 h-6 text-emerald-600" />,
          title: "Deducted from the price at installation",
          desc: "The installer or distributor handles the HEM on your behalf and immediately deducts its value from the invoice. You don't need to do anything – you simply pay less.",
          tag: "Easiest option",
          tagColor: "bg-emerald-100 text-emerald-800",
        },
        {
          icon: <Banknote className="w-6 h-6 text-blue-600" />,
          title: "Bank transfer received after installation",
          desc: "Some energy traders transfer the HEM value directly to your bank account after installation and certification. This is typically arranged by the trader.",
          tag: "Cash option",
          tagColor: "bg-blue-100 text-blue-800",
        },
      ],
    },

    steps: {
      title: "The process step by step",
      subtitle:
        "You actually do very little – most is handled by the installer and auditor. But it's good to know what happens in the background.",
      items: [
        {
          num: 1,
          title: "Agreement with the installer",
          desc: "Before installation begins, the installer (e.g., AClimate) presents whether HEM is available for the given investment. If so, they sign a HEM generation agreement – this authorizes the installer to handle the process on your behalf.",
        },
        {
          num: 2,
          title: "Installation",
          desc: "The equipment is installed in the usual way. It's important that the invoice and documentation are correct – this is the basis for the audit.",
        },
        {
          num: 3,
          title: "Energy audit",
          desc: "An independent, accredited energy auditor conducts an assessment. They calculate how much energy the new equipment saves compared to the old one – the result is expressed in gigajoules (GJ). This figure determines the discount amount.",
        },
        {
          num: 4,
          title: "HEM registration",
          desc: "Based on the auditor's certificate, the HEM is registered in the official registry. From this point it exists as a property right.",
        },
        {
          num: 5,
          title: "Discount credited",
          desc: "The trader purchases the HEM, and you receive the consideration: either deducted from the invoice or as a bank transfer.",
        },
      ],
    },

    conditions: {
      title: "When is the HEM discount available?",
      subtitle:
        "It's not automatically available for every installation. Check the following in advance:",
      yes: [
        "The property has an existing independent heating system (gas boiler, convector, electric heating, etc.)",
        "The room does not yet have a heating-capable AC unit",
        "The new equipment has a SCOP value of at least 4.1 (most modern AC units meet this)",
        "Certification takes place after the investment is completed (not in advance)",
        "The HEM is transferred to the energy trader (this is what the agreement covers)",
      ],
      no: [
        "Can it be combined with KEHOP Plus? Only partially – HEM can be counted at max 70% alongside KEHOP",
        "Generally not available for holiday homes or uninhabited properties",
        "If there was no previous heating system (e.g., newly built property), savings are difficult to certify",
      ],
    },

    tax: {
      title: "Tax-free income",
      desc: "From January 1, 2024 (retroactively): the amount you receive from transferring HEM is exempt from personal income tax (SZJA-free). No declaration required, no tax to pay.",
    },

    faq: [
      {
        q: "Do I need to go anywhere, or is it handled for me?",
        a: "In most cases, the installer handles everything: agreement, auditor, registration, discount crediting. You just need to consent and sign the agreement.",
      },
      {
        q: "How long does it take to receive the discount?",
        a: "If deducted from the price, it appears immediately on the invoice. If it's a subsequent transfer, it typically arrives within a few weeks after the audit and registration.",
      },
      {
        q: "Is the amount guaranteed?",
        a: "The auditor performs a precise calculation, but HEM market prices can change. The installer can usually provide an estimate in advance; the final amount is determined by the audit.",
      },
      {
        q: "Can it be combined with the Rural Renovation Program?",
        a: "Yes, HEM is generally combinable with the Rural Program as it is not EU-funded. However, for KEHOP Plus, only 70% accounting is allowed alongside it.",
      },
    ],

    cta: "Ask about the HEM discount when requesting a quote – we'll check free of charge how much you can receive.",
  };

  const c = language === "hu" ? hu : en;

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Button
            onClick={goBack}
            variant="ghost"
            className="cursor-pointer mb-8 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "hu" ? "Vissza" : "Back"}
          </Button>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10 border-0 text-sm px-3 py-1">
              {c.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              {c.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {c.subtitle}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-primary pl-6 italic">
              {c.intro}
            </p>
          </motion.div>

          {/* What is HEM */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              {c.whatIs.title}
            </h2>
            <Card className="border-none shadow-sm bg-amber-50/60 mb-4">
              <CardContent className="p-6">
                <p className="text-slate-800 font-medium text-lg leading-relaxed mb-3">
                  {c.whatIs.lead}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {c.whatIs.analogy}
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-slate-50">
              <CardContent className="p-6 flex gap-4">
                <div className="mt-1 p-2 bg-white rounded-lg shadow-sm h-fit flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-2">{c.whatIs.why}</p>
                  <p className="text-slate-600 leading-relaxed">{c.whatIs.whyAnswer}</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How much */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
              {c.howMuch.title}
            </h2>
            <p className="text-muted-foreground mb-6">{c.howMuch.subtitle}</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">
                      {language === "hu" ? "Berendezés típusa" : "Equipment type"}
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">
                      {language === "hu" ? "Jellemző kedvezmény" : "Typical discount"}
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700 hidden md:table-cell">
                      {language === "hu" ? "Megjegyzés" : "Note"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.howMuch.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-3 text-slate-800 font-medium">{row.device}</td>
                      <td className="px-4 py-3 text-primary font-bold">{row.amount}</td>
                      <td className="px-4 py-3 text-slate-500 hidden md:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground flex gap-2 items-start">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              {c.howMuch.marketNote}
            </p>
          </section>

          {/* Example */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              {c.example.title}
            </h2>
            <div className="rounded-xl border border-slate-200 overflow-hidden">
              {c.example.rows.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-6 py-4 ${
                    row.highlight
                      ? "bg-primary/5 border-l-4 border-primary"
                      : "bg-white border-b border-slate-100"
                  }`}
                >
                  <span className={`${row.highlight ? "font-semibold text-slate-900" : "text-slate-600"}`}>
                    {row.label}
                  </span>
                  <span className={`font-bold ${row.highlight ? "text-primary text-lg" : "text-slate-800"}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 flex gap-2 items-start">
              <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              {c.example.footnote}
            </p>
          </section>

          {/* How to get */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
              {c.howToGet.title}
            </h2>
            <p className="text-muted-foreground mb-6">{c.howToGet.subtitle}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {c.howToGet.options.map((opt, i) => (
                <Card key={i} className="border border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-slate-50 rounded-lg flex-shrink-0">
                        {opt.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="font-bold text-slate-900">{opt.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${opt.tagColor}`}>
                            {opt.tag}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{opt.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
              {c.steps.title}
            </h2>
            <p className="text-muted-foreground mb-8">{c.steps.subtitle}</p>
            <div className="space-y-4">
              {c.steps.items.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-100 last:border-0">
                    <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Conditions */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">
              {c.conditions.title}
            </h2>
            <p className="text-muted-foreground mb-6">{c.conditions.subtitle}</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-none shadow-sm bg-emerald-50/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    {language === "hu" ? "Ha teljesülnek ezek:" : "If these are met:"}
                  </h3>
                  <ul className="space-y-3">
                    {c.conditions.yes.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-amber-50/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    {language === "hu" ? "Fontos tudnivalók:" : "Important to know:"}
                  </h3>
                  <ul className="space-y-3">
                    {c.conditions.no.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700">
                        <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tax */}
          <section className="mb-14">
            <Card className="border-none shadow-sm bg-emerald-600 text-white">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{c.tax.title}</h3>
                  <p className="text-emerald-50 leading-relaxed">{c.tax.desc}</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              {language === "hu" ? "Gyakori kérdések" : "Frequently asked questions"}
            </h2>
            <div className="space-y-3">
              {c.faq.map((item, i) => (
                <Card key={i} className="border border-slate-200 shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-slate-900 mb-2 flex gap-2">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item.q}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed pl-7">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Link to other article */}
          <section className="mb-10">
            <Card className="border border-primary/20 shadow-sm bg-primary/5">
              <CardContent className="p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === "hu" ? "Kapcsolódó cikk" : "Related article"}
                  </p>
                  <p className="font-semibold text-slate-900">
                    {language === "hu"
                      ? "Otthonfelújítási Támogatás 2026 – Vidéki Program és KEHOP Plusz"
                      : "Home Renovation Support 2026 – Rural Program and KEHOP Plus"}
                  </p>
                </div>
                <Link href="/tudastar/otthonfelujitasi-tamogatas">
                  <Button variant="outline" size="sm" className="flex-shrink-0 cursor-pointer">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="text-center p-10 border-2 border-dashed border-primary/30 rounded-2xl bg-primary/5">
            <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-slate-700 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
              {c.cta}
            </p>
            <Link href="/kapcsolat">
              <Button size="lg" className="cursor-pointer">
                {language === "hu" ? "Ajánlatot kérek" : "Request a quote"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
