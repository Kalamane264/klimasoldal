"use client";

import { useLanguage } from "@/app/lib/i18n";
import { useGoBack } from "@/app/lib/useGoBack";
import { Card } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Zap,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Thermometer,
  Calculator,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function KlimaFogyasztasaClient() {
  const { language } = useLanguage();
  const goBack = useGoBack();

  const hu = language === "hu";

  const myths = [
    {
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      label: hu ? "Tévhit" : "Myth",
      text: hu
        ? `„Egy 3,5 kW-os klíma villanyban is 3,5 kW-ot fogyaszt."`
        : `"A 3.5 kW air conditioner draws 3.5 kW of electricity."`,
      color: "bg-red-50 border-red-200",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      label: hu ? "Valóság" : "Reality",
      text: hu
        ? "A 3,5 kW a hűtési/fűtési teljesítmény. Egy A+++ inverteres klíma maximális villamos teljesítményfelvétele ennek csak töredéke – kb. 750–800 W. De ez is csak az indulási csúcs: amint a szoba hőmérséklete közelít a célhoz, a kompresszor visszavesz, és a fenntartási fázisban a gép mindössze 100–200 W körül üzemel. Azzal kell tehát számolni, hogy az üzemelési idő nagy részében egy 3,5 kW-os klíma fogyasztása közelebb van egy hűtőszekrény fogyasztásához, mint egy villanytűzhelyéhez."
        : "3.5 kW is the cooling/heating output. The maximum electrical draw of an A+++ inverter unit is only a fraction of that — around 750–800 W. But even that is just the startup peak: once the room temperature nears the target, the compressor throttles back and the unit idles at around 100–200 W. For most of its running time, a 3.5 kW AC's power draw is closer to a refrigerator's than to an electric hob's.",
      color: "bg-emerald-50 border-emerald-200",
    },
  ];

  const factors = [
    {
      icon: <BarChart3 className="w-5 h-5 text-primary" />,
      title: hu ? "COP / EER – a hatékonysági szorzó" : "COP / EER – the efficiency multiplier",
      desc: hu
        ? "A COP (Coefficient of Performance) azt mutatja meg, hogy 1 kW villamos energiából hány kW hőteljesítményt állít elő a gép. Egy modern A+++ inverteres klíma COP értéke 4,0–5,5 között van: vagyis 1 kW áramból 4–5,5 kW hideg- vagy meleget produkál. Régi, fix-sebességes klímáknál ez az arány csak 2,5–3,0."
        : "COP (Coefficient of Performance) tells you how many kW of heating/cooling you get per kW of electricity consumed. A modern A+++ inverter unit has a COP of 4.0–5.5, meaning 1 kW of electricity produces 4–5.5 kW of output. Older fixed-speed units only achieve 2.5–3.0.",
    },
    {
      icon: <Thermometer className="w-5 h-5 text-orange-500" />,
      title: hu ? "Inverteres vezérlés: a fogyasztás valódi titka" : "Inverter control: the real secret to low bills",
      desc: hu
        ? "A fix-sebességes klíma vagy teljes gőzzel megy, vagy leáll – mint egy villanykályha, amelyet ki-be kapcsolgatnak. Az inverteres gép ezzel szemben folyamatosan szabályozza a kompresszor fordulatszámát. Induláskor valóban felveszi a maximális teljesítményt – de amint a szoba hőmérséklete közelít a célhoz, a kompresszor fokozatosan visszavesz, és a fenntartási fázisban a névleges villamos teljesítmény töredékén, akár 15–25%-án üzemel. Jól szigetelt helyiségben ez az állapot az üzemidő nagy részét kiteszi."
        : "A fixed-speed unit runs at full power or shuts off completely — like a heater switched on and off. An inverter continuously varies compressor speed. It does draw close to its rated electrical input at startup — but as the room approaches the target temperature, the compressor progressively throttles back and operates at just 15–25% of maximum during the maintenance phase. In a well-insulated room, this low-power state accounts for the majority of running time.",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      title: hu ? "Beállított hőmérséklet" : "Set temperature",
      desc: hu
        ? "Minden egyes fokkal, amellyel a beállított hőmérsékletet közelebb hozza a külső hőmérséklethez, kb. 6–8%-kal csökkenti a fogyasztást. 26°C beállítás helyett 24°C akár 15–20%-kal több áramot jelent."
        : "Each degree you bring the set temperature closer to the outdoor temperature reduces consumption by roughly 6–8%. Setting 24°C instead of 26°C can mean 15–20% more electricity.",
    },
    {
      icon: <TrendingDown className="w-5 h-5 text-blue-500" />,
      title: hu ? "Szigetelés: a legnagyobb különbség" : "Insulation: the biggest differentiator",
      desc: hu
        ? `Jól szigetelt, árnyékolt helyiségben a klíma gyorsan eléri a célhőmérsékletet, majd a kompresszor szinte teljesen visszavesz – az inverteres gép ilyenkor a maximális villamos teljesítmény 15–20%-án üzemel hosszú ideig. Rosszul szigetelt vagy folyamatosan napsütötte szobában a hő állandóan visszaszivárog, a kompresszor nem tud „pihenni", és a fogyasztás többszörösére nőhet ugyanolyan használat mellett.`
        : "In a well-insulated, shaded room the AC quickly reaches the target temperature and the compressor nearly idles — the inverter operates at just 15–20% of peak electrical draw for extended periods. In a poorly insulated or sun-exposed room heat keeps seeping back in, the compressor cannot rest, and consumption can multiply for the same number of hours run.",
    },
  ];

  const costTable = [
    {
      type: hu ? "A+++ inverter – jól szigetelt épület" : "A+++ inverter – well-insulated building",
      cop: "4,5+",
      input: hu ? "~0,10–0,20 kW (fenntartásban)" : "~0.10–0.20 kW (maintenance)",
      monthly_kwh: hu ? "~45–60 kWh" : "~45–60 kWh",
      monthly_huf: hu ? "~1 700–2 300 Ft" : "~€5–6",
      highlight: true,
      best: true,
    },
    {
      type: hu ? "A+++ inverter – átlagos körülmények" : "A+++ inverter – average conditions",
      cop: "4,5",
      input: hu ? "~0,35–0,50 kW (átlagos részterhelés)" : "~0.35–0.50 kW (avg. partial load)",
      monthly_kwh: hu ? "~70–95 kWh" : "~70–95 kWh",
      monthly_huf: hu ? "~2 700–3 600 Ft" : "~€7–10",
      highlight: true,
    },
    {
      type: hu ? "A++ inverteres klíma – átlag" : "A++ inverter AC – average",
      cop: "3,8",
      input: hu ? "~0,50–0,65 kW" : "~0.50–0.65 kW",
      monthly_kwh: hu ? "~95–115 kWh" : "~95–115 kWh",
      monthly_huf: hu ? "~3 600–4 400 Ft" : "~€10–12",
      highlight: false,
    },
    {
      type: hu ? "Régi fix-sebességes klíma" : "Old fixed-speed AC",
      cop: "2,8",
      input: hu ? "~1,25 kW (mindig teljes gőz)" : "~1.25 kW (always full power)",
      monthly_kwh: hu ? "~150 kWh" : "~150 kWh",
      monthly_huf: hu ? "~5 400–6 000 Ft" : "~€14–16",
      highlight: false,
    },
    {
      type: hu ? "Ha valóban 3,5 kW-ot fogyasztana…" : "If it actually drew 3.5 kW…",
      cop: "1,0",
      input: hu ? "3,5 kW" : "3.5 kW",
      monthly_kwh: hu ? "~420 kWh" : "~420 kWh",
      monthly_huf: hu ? "~15 000–16 800 Ft" : "~€40–45",
      highlight: false,
      myth: true,
    },
  ];

  const tips = [
    {
      text: hu
        ? "Állítsa 26°C-ra a hőmérsékletet – minden plusz fokhoz 6–8% megtakarítás társul."
        : "Set the temperature to 26°C — each extra degree saves 6–8%.",
    },
    {
      text: hu
        ? "Csukja be az ablakokat és használjon külső árnyékolást (redőny, zsalugáter)."
        : "Keep windows closed and use external shading (blinds, shutters).",
    },
    {
      text: hu
        ? "Használja az ütemezési funkciót – ne hűtse az üres szobát."
        : "Use the scheduling function — don't cool an empty room.",
    },
    {
      text: hu
        ? "Legyen ventilátora is: a légmozgás szubjektíve 2–3°C-ot jelent, így a klímát magasabb hőmérsékletre állíthatja."
        : "Use a fan alongside the AC: air movement feels 2–3°C cooler, so you can set the AC higher.",
    },
    {
      text: hu
        ? "Rendszeres tisztítás: egy piszkos hőcserélő akár 15–20%-kal több áramot fogyaszt ugyanazon teljesítményért."
        : "Regular cleaning: a dirty heat exchanger can draw 15–20% more electricity for the same output.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <button
            onClick={goBack}
            className="text-muted-foreground hover:text-foreground cursor-pointer mb-8 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {hu ? "Vissza" : "Back"}
          </button>

          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                {hu ? "Tudástár" : "Knowledge Base"}
              </Badge>
              <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">
                {hu
                  ? "Mennyit fogyaszt valójában egy klíma?"
                  : "How Much Electricity Does an AC Actually Use?"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {hu
                  ? "A leggyakoribb tévhit megcáfolva – és konkrét számok, mennyibe kerül ténylegesen egy klíma üzemeltetése nyáron."
                  : "The most common misconception busted — and real numbers on what it actually costs to run an AC in summer."}
              </p>
            </div>

            {/* Myth vs Reality */}
            <section className="mb-14">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                {hu ? "A nagy tévhit" : "The Big Misconception"}
              </h2>
              <div className="flex flex-col gap-4">
                {myths.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex gap-4 items-start border rounded-2xl p-5 ${m.color}`}
                  >
                    <div className="mt-0.5 flex-shrink-0">{m.icon}</div>
                    <div>
                      <span className="font-semibold text-sm uppercase tracking-wide text-slate-500 block mb-1">
                        {m.label}
                      </span>
                      <p className="text-slate-800 text-base">{m.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <p className="text-blue-800 text-sm leading-relaxed">
                  {hu
                    ? "A \"3,5 kW\" a klíma névleges hűtési (vagy fűtési) kapacitása – azt jelzi, hogy mennyi hőt tud elszállítani a szobából, nem azt, hogy mennyi áramot fogyaszt. A tényleges áramfogyasztást az EER (hűtési) és COP (fűtési) hatékonysági mutatók határozzák meg."
                    : "\"3.5 kW\" is the rated cooling (or heating) capacity — it tells you how much heat the unit can remove from the room, not how much electricity it draws. Actual power consumption is determined by the EER (cooling) and COP (heating) efficiency ratings."}
                </p>
              </div>
            </section>

            {/* What affects consumption */}
            <section className="mb-14">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                {hu ? "Mi határozza meg a valódi fogyasztást?" : "What Determines Real Consumption?"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {factors.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full p-5 border-border/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-slate-100 rounded-xl">{f.icon}</div>
                        <h3 className="font-semibold text-slate-900 text-sm">{f.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Cost table */}
            <section className="mb-14">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                {hu ? "Konkrét számok: mennyibe kerül egy nyári hónap?" : "Concrete Numbers: What Does a Summer Month Cost?"}
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                {hu
                  ? "Az alábbi becslés egy 3,5 kW névleges teljesítményű klímára vonatkozik, napi 8 óra használattal, 30 napon át (kb. 240 üzemóra/hó). Az áramár kalkulációhoz a szabályozott hazai háztartási tarifát vettük alapul: kb. 36–40 Ft/kWh (2025/2026, rezsicsökkentett lakástarifa)."
                  : "The estimates below are for a 3.5 kW rated AC, running 8 hours/day for 30 days (approx. 240 operating hours/month). Electricity price based on the regulated Hungarian household tariff: approx. 36–40 Ft/kWh (2025/2026 subsidised residential rate)."}
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-border">
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">
                        {hu ? "Típus" : "Type"}
                      </th>
                      <th className="text-center px-4 py-3 font-semibold text-slate-700">COP</th>
                      <th className="text-center px-4 py-3 font-semibold text-slate-700">
                        {hu ? "Felvett teljesítmény" : "Electrical input"}
                      </th>
                      <th className="text-center px-4 py-3 font-semibold text-slate-700">
                        {hu ? "Fogyasztás/hó" : "Monthly kWh"}
                      </th>
                      <th className="text-right px-4 py-3 font-semibold text-slate-700">
                        {hu ? "Havi költség" : "Monthly cost"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {costTable.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-border last:border-0 ${
                          row.myth
                            ? "bg-red-50 text-red-700"
                            : row.highlight
                            ? "bg-emerald-50"
                            : ""
                        }`}
                      >
                        <td className="px-4 py-3 font-medium">
                          {row.type}
                          {row.myth && (
                            <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                              {hu ? "Tévhit" : "Myth"}
                            </span>
                          )}
                          {row.best && (
                            <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                              {hu ? "Legjobb eset" : "Best case"}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center">{row.cop}</td>
                        <td className="px-4 py-3 text-center">{row.input}</td>
                        <td className="px-4 py-3 text-center">{row.monthly_kwh}</td>
                        <td className="px-4 py-3 text-right font-semibold">{row.monthly_huf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-muted-foreground mt-3">
                {hu
                  ? "* Feltételezés: napi 8 óra használat, 30 nap, 100–120 Ft/kWh. Az inverteres klíma felvett teljesítménye folyamatosan változik: induláskor közelít a maximumhoz, majd a célhőmérséklet elérése után visszavesz. Jól szigetelt helyiségben a fenntartási fázis dominál, ahol a kompresszor a névleges villamos teljesítmény csupán 15–25%-án üzemelhet – ezért a legjobb esetben az éves átlagos részterhelés jóval 30% alá is süllyedhet."
                  : "* Assumes 8 hours/day, 30 days, 100–120 Ft/kWh. Inverter electrical draw is continuously variable: it approaches maximum at startup, then throttles back once the target temperature is reached. In a well-insulated room the maintenance phase dominates, with the compressor running at as little as 15–25% of rated electrical input — meaning the best-case average partial load can fall well below 30%."}
              </p>
            </section>

            {/* Key takeaway highlight */}
            <section className="mb-14">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-primary/10 rounded-xl flex-shrink-0">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">
                      {hu ? "A lényeg egy mondatban" : "The bottom line"}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {hu
                        ? "A szabályozott hazai háztartási áramáron (~38 Ft/kWh) egy modern A+++ inverteres klíma havi villanyköltsége átlagos használat mellett nagyjából 2 700–3 600 Ft – jól szigetelt, árnyékolt helyiségben akár 1 700–2 300 Ft is lehet. Ez töredéke a \"3,5 kW = 3,5 kW áramfogyasztás\" tévhitből következő ~16 000 Ft-nak. A kulcs az inverter folyamatos visszaterhelése: a fenntartási fázisban a gép a névleges villamos teljesítmény töredékén üzemel."
                        : "At the regulated Hungarian household electricity tariff (~38 Ft/kWh), a modern A+++ inverter AC costs roughly 2,700–3,600 HUF per month under typical use — and as little as 1,700–2,300 HUF in a well-insulated, shaded room. This is a fraction of the ~16,000 HUF implied by the \"3.5 kW = 3.5 kW\" myth. The key is continuous inverter throttling: during the maintenance phase the unit runs at a small fraction of its rated electrical input."}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-14">
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                {hu ? "5 tipp a fogyasztás csökkentéséhez" : "5 Tips to Reduce Your AC Running Costs"}
              </h2>
              <div className="flex flex-col gap-3">
                {tips.map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-border/50"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{tip.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA box */}
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {hu
                  ? "Kérdése van a klíma kiválasztásával vagy fogyasztásával kapcsolatban?"
                  : "Questions about choosing or running an air conditioner?"}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {hu
                  ? "Segítünk megtalálni a leghatékonyabb megoldást az Ön otthonához – díjmentesen."
                  : "We'll help you find the most efficient solution for your home — free of charge."}
              </p>
              <Link href="/kapcsolat">
                <Button className="cursor-pointer gap-2">
                  {hu ? "Kapcsolatfelvétel" : "Contact us"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
