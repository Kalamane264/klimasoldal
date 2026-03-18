"use client";

import { useLanguage } from "@/app/lib/i18n";
import { useGoBack } from "@/app/lib/useGoBack";
import { Card, CardContent } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Button } from "@/app/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Zap,
  Banknote,
  CheckCircle2,
  Info,
  AlertTriangle,
  TrendingDown,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OtthonfelujitasClient() {
  const { language } = useLanguage();
  const goBack = useGoBack();

  const hu = {
    badge: "Állami támogatás",
    title: "Otthonfelújítási Támogatás 2026",
    subtitle:
      "Hogyan spórolhat akár több millió forintot klíma- vagy hőszivattyú-telepítéssel? Átfogó útmutató a két elérhető állami programról.",
    intro:
      "Magyarországon jelenleg két egymást kiegészítő állami program is segít abban, hogy olcsóbban korszerűsítse otthonát. A Vidéki Otthonfelújítási Program klímaszereléshez és hőszivattyúhoz egyaránt igénybe vehető, a KEHOP Plusz pedig kifejezetten energetikai korszerűsítésre – hőszivattyú telepítésre – nyújtja a legtöbb támogatást. Ha jól választ, akár 5 millió forintnyi vissza nem térítendő támogatást kaphat.",

    programs: [
      {
        icon: <MapPin className="w-5 h-5 text-emerald-600" />,
        badge: "Max. 5 000 fős település",
        badgeColor: "bg-emerald-100 text-emerald-800",
        title: "Vidéki Otthonfelújítási Program",
        period: "2025. január 1. – 2026. június 30.",
        who: "Kistelepüléseken élők – gyerekesek és nyugdíjasok egyaránt",
        support: "Az elköltött összeg 50%-a visszatérítve (max. 3 000 000 Ft)",
        loan: "6 000 000 Ft kamattámogatott kölcsön (az előfinanszírozáshoz)",
        energy: "Nincs energetikai elvárás",
        items: [
          "Klímaberendezés telepítése ✔",
          "Fűtéskorszerűsítés, hőszivattyú ✔",
          "Napkollektor, napelemes rendszer ✔",
          "Tetőcsere, nyílászárók cseréje ✔",
          "Belső terek felújítása ✔",
          "Utófinanszírozás: számlák beadása után érkezik a visszatérítés",
        ],
        note: "Minimum 6 M Ft összértékű munkával érhető el a teljes 3 M Ft-os támogatás (az állam az összeg 50%-át téríti vissza). 5 éves lakóhelyi kötöttség érvényes.",
        noteType: "info" as const,
      },
      {
        icon: <Zap className="w-5 h-5 text-blue-600" />,
        badge: "2007 előtt épült házak, országos",
        badgeColor: "bg-blue-100 text-blue-800",
        title: "KEHOP Plusz Energetikai Program",
        period: "2024. júliustól, jelenleg is elérhető",
        who: "2007 előtt épített, belterületi, lakott ingatlanok tulajdonosai",
        support: "A beruházás 50%-a vissza nem térítendő (max. 5 000 000 Ft)",
        loan: "A beruházás 45%-a kamatmentes kölcsön (max. 5 000 000 Ft) + 5% önerő",
        energy: "30%-os energiamegtakarítás szükséges",
        items: [
          "Levegő-víz hőszivattyú telepítése ✔",
          "Hőszigeteléssel kombinálva ✔",
          "Nyílászárócsere + fűtéskorszerűsítés ✔",
          "2,5–10 millió Ft közötti beruházási összeg",
          "Hagyományos klímaberendezés NEM támogatható fűtési célra",
        ],
        note: "Ha a 30%-os energiamegtakarítás nem teljesül, a teljes összeget kamatostul vissza kell fizetni. Érdemes energetikai szakértővel előzetesen egyeztetni.",
        noteType: "warning" as const,
      },
    ],

    savings: {
      title: "Mennyit lehet ténylegesen spórolni?",
      subtitle:
        "Nézzünk egy valós példát, hogy könnyebb legyen elképzelni a megtakarítást.",
      example: {
        title: "Példa: hőszivattyú telepítése KEHOP Plusz programmal (6 M Ft-os beruházás)",
        rows: [
          { label: "Hőszivattyú + telepítés teljes ára", value: "6 000 000 Ft", highlight: false },
          { label: "Vissza nem térítendő támogatás (50%)", value: "− 3 000 000 Ft", highlight: true },
          { label: "Kamatmentes kölcsön (45%, 0% kamat)", value: "2 700 000 Ft", highlight: false },
          { label: "Saját forrás (5% önerő)", value: "300 000 Ft", highlight: false },
          { label: "Éves rezsimegtakarítás (gáz vs. hőszivattyú)", value: "≈ 150 000–300 000 Ft/év", highlight: true },
          { label: "Megtérülési idő (önerőre vetítve)", value: "1–2 év", highlight: false },
        ],
        footnote:
          "A számok tájékoztató jellegűek. A tényleges megtakarítás az ingatlan méretétől, szigetelésétől és energiaáraktól függ.",
      },
      cards: [
        {
          icon: <TrendingDown className="w-7 h-7 text-emerald-600" />,
          title: "Azonnali megtakarítás",
          desc: "A vissza nem térítendő támogatás azonnal csökkenti a beruházási költséget – ezt az összeget sosem kell visszafizetni.",
        },
        {
          icon: <Banknote className="w-7 h-7 text-blue-600" />,
          title: "Kamatmentes finanszírozás",
          desc: "A maradék összeget 0%-os kamattal hitelezik, így a bank sem nyeri és az infláció sem emészti fel a megtakarítást.",
        },
        {
          icon: <Home className="w-7 h-7 text-primary" />,
          title: "Csökkenő rezsiszámla",
          desc: "Egy modern hőszivattyú akár 60–70%-kal is csökkentheti a fűtési költségeket a hagyományos gázkazánhoz képest.",
        },
      ],
    },

    compare: {
      title: "Melyik program az Önnek való?",
      headers: ["", "Vidéki Program", "KEHOP Plusz"],
      rows: [
        ["Finanszírozási modell", "50% visszatérítés (utólag)", "50% adomány + 45% hitel + 5% önerő"],
        ["Max. vissza nem térítendő", "3 000 000 Ft", "5 000 000 Ft"],
        ["Max. hitel/kölcsön", "6 000 000 Ft kamattámogatott", "5 000 000 Ft kamatmentes"],
        ["Energetikai feltétel", "Nincs", "30% megtakarítás kötelező"],
        ["Klímaszerelés", "✔ Igen", "✗ Fűtési célra nem (csak hőszivattyú)"],
        ["Hőszivattyú", "✔ Igen", "✔ Igen"],
        ["Hol érhető el", "Max. 5 000 fős település", "Országos"],
        ["Min. beruházási összeg", "Nincs meghatározva", "2 500 000 Ft"],
      ],
    },

    steps: {
      title: "Hogyan igényelje? – Lépések egyszerűen",
      items: [
        {
          title: "Tájékozódás és előzetes ellenőrzés",
          desc: "Ellenőrizze, hogy ingatlana és Ön megfelel-e a feltételeknek (elhelyezkedés, épület kora, tulajdoni lap).",
        },
        {
          title: "Energetikai tanácsadás (KEHOP esetén kötelező)",
          desc: "Energetikai szakértővel előzetesen felmérjük, milyen beavatkozással érhető el a 30%-os megtakarítás.",
        },
        {
          title: "Kivitelező és eszköz kiválasztása",
          desc: "Válasszon megbízható szakembert és energiahatékony berendezést. Az AClimate csapata ebben is segít.",
        },
        {
          title: "Igénylőlap benyújtása",
          desc: "Vidéki Program: Magyar Államkincstáron keresztül. KEHOP Plusz: MFB-partnerbankokban igényelhető.",
        },
        {
          title: "Telepítés és dokumentálás",
          desc: "A munkálatok elvégzése, számlák gyűjtése. Minden számla megőrzése kötelező a lakkötöttség ideje alatt.",
        },
        {
          title: "Támogatás folyósítása",
          desc: "A jóváhagyás és dokumentáció leadása után a vissza nem térítendő rész folyósításra kerül.",
        },
      ],
    },

    tip: {
      title: "Összekombinálható más kedvezményekkel?",
      desc: "A HEM-programmal (Hitelesített Energiamegtakarítással) és az otthonfelújítási támogatással bizonyos esetekben akár együttesen is részesülhet kedvezményekben. Érdemes szakértővel egyeztetni, melyik kombináció éri meg legjobban az Ön esetében.",
    },

    cta: "Segítünk eligazodni a lehetőségek között – kérjen ajánlatot!",
  };

  const en = {
    badge: "Government support",
    title: "Home Renovation Subsidy 2026",
    subtitle:
      "How can you save several million forints with AC or heat pump installation? A comprehensive guide to Hungary's two available state programs.",
    intro:
      "In Hungary, two complementary state programs currently help you renovate your home more affordably. The Rural Home Renovation Program covers both AC and heat pump installation, while the KEHOP Plus program focuses on energy-efficient upgrades – specifically heat pumps. With the right choice, you can receive up to 5 million HUF in non-refundable support.",

    programs: [
      {
        icon: <MapPin className="w-5 h-5 text-emerald-600" />,
        badge: "Settlements up to 5,000",
        badgeColor: "bg-emerald-100 text-emerald-800",
        title: "Rural Home Renovation Program",
        period: "January 1, 2025 – June 30, 2026",
        who: "Residents of small settlements – families with children and retirees alike",
        support: "50% of costs reimbursed (max. HUF 3,000,000)",
        loan: "HUF 6,000,000 interest-subsidized loan (to help pre-finance the work)",
        energy: "No energy efficiency requirement",
        items: [
          "Air conditioning installation ✔",
          "Heating modernization, heat pump ✔",
          "Solar collectors, solar panel systems ✔",
          "Roof replacement, window replacement ✔",
          "Interior renovation ✔",
          "Post-financing: reimbursement arrives after invoices are submitted",
        ],
        note: "To receive the maximum HUF 3M, you must spend at least HUF 6M (the state reimburses 50%). 5-year residency requirement applies.",
        noteType: "info" as const,
      },
      {
        icon: <Zap className="w-5 h-5 text-blue-600" />,
        badge: "Houses built before 2007, nationwide",
        badgeColor: "bg-blue-100 text-blue-800",
        title: "KEHOP Plus Energy Program",
        period: "From July 2024, currently available",
        who: "Owners of residential properties built before 2007",
        support: "50% of project cost as non-refundable grant (max. HUF 5,000,000)",
        loan: "45% as interest-free loan (max. HUF 5,000,000) + 5% own contribution",
        energy: "30% energy savings required",
        items: [
          "Air-to-water heat pump installation ✔",
          "Combined with insulation ✔",
          "Window replacement + heating modernization ✔",
          "HUF 2.5–10 million investment range",
          "Standard AC units NOT eligible for heating purposes",
        ],
        note: "If the 30% energy savings are not achieved, the full amount must be repaid with interest. It's worth consulting an energy expert in advance.",
        noteType: "warning" as const,
      },
    ],

    savings: {
      title: "How much can you actually save?",
      subtitle: "Let's look at a real-life example to make the savings easier to visualize.",
      example: {
        title: "Example: heat pump installation with KEHOP Plus (HUF 6M project)",
        rows: [
          { label: "Heat pump + installation total price", value: "HUF 6,000,000", highlight: false },
          { label: "Non-refundable grant (50%)", value: "− HUF 3,000,000", highlight: true },
          { label: "Interest-free loan (45%, 0% interest)", value: "HUF 2,700,000", highlight: false },
          { label: "Own contribution (5%)", value: "HUF 300,000", highlight: false },
          { label: "Annual utility savings (gas vs. heat pump)", value: "≈ HUF 150,000–300,000/year", highlight: true },
          { label: "Payback period (on own contribution)", value: "1–2 years", highlight: false },
        ],
        footnote:
          "Figures are indicative. Actual savings depend on property size, insulation, and energy prices.",
      },
      cards: [
        {
          icon: <TrendingDown className="w-7 h-7 text-emerald-600" />,
          title: "Immediate savings",
          desc: "The non-refundable grant immediately reduces the investment cost – this amount never needs to be repaid.",
        },
        {
          icon: <Banknote className="w-7 h-7 text-blue-600" />,
          title: "Interest-free financing",
          desc: "The remaining amount is financed at 0% interest, so neither the bank profits nor does inflation erode your savings.",
        },
        {
          icon: <Home className="w-7 h-7 text-primary" />,
          title: "Lower utility bills",
          desc: "A modern heat pump can reduce heating costs by 60–70% compared to a traditional gas boiler.",
        },
      ],
    },

    compare: {
      title: "Which program is right for you?",
      headers: ["", "Rural Program", "KEHOP Plus"],
      rows: [
        ["Financing model", "50% reimbursement (post-financing)", "50% grant + 45% loan + 5% own"],
        ["Max. non-refundable grant", "HUF 3,000,000", "HUF 5,000,000"],
        ["Max. loan", "HUF 6M interest-subsidized", "HUF 5M interest-free"],
        ["Energy requirement", "None", "30% savings required"],
        ["AC installation", "✔ Yes", "✗ Not for heating (heat pump only)"],
        ["Heat pump", "✔ Yes", "✔ Yes"],
        ["Available where", "Max. 5,000-person settlement", "Nationwide"],
        ["Min. investment", "Not specified", "HUF 2,500,000"],
      ],
    },

    steps: {
      title: "How to apply? – Simple steps",
      items: [
        {
          title: "Research and preliminary check",
          desc: "Check whether your property and situation meet the requirements (location, building age, title deed).",
        },
        {
          title: "Energy consultation (mandatory for KEHOP)",
          desc: "An energy expert assesses which interventions will achieve the required 30% savings.",
        },
        {
          title: "Choosing a contractor and equipment",
          desc: "Choose a reliable professional and energy-efficient equipment. The AClimate team can help here too.",
        },
        {
          title: "Submitting the application",
          desc: "Rural Program: through the Hungarian State Treasury. KEHOP Plus: available at MFB partner banks.",
        },
        {
          title: "Installation and documentation",
          desc: "Completing the work, collecting invoices. All invoices must be kept during the residency period.",
        },
        {
          title: "Grant disbursement",
          desc: "After approval and documentation submission, the non-refundable portion is disbursed.",
        },
      ],
    },

    tip: {
      title: "Can it be combined with other discounts?",
      desc: "In certain cases, the HEM program (Certified Energy Savings) and home renovation support can be used together. It's worth consulting a specialist to find out which combination works best for your situation.",
    },

    cta: "We help you navigate the options – request a quote!",
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

          {/* Programs */}
          <section className="mb-14">
            <div className="grid gap-6">
              {c.programs.map((prog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-border/60 overflow-hidden shadow-sm">
                    <CardContent className="p-0">
                      <div className="p-6 border-b border-border/40 bg-slate-50/60 flex flex-wrap items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">{prog.icon}</div>
                        <div>
                          <h2 className="font-bold text-xl text-slate-900">{prog.title}</h2>
                          <p className="text-sm text-muted-foreground">{prog.period}</p>
                        </div>
                        <span className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full ${prog.badgeColor}`}>
                          {prog.badge}
                        </span>
                      </div>
                      <div className="p-6 grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                              {language === "hu" ? "Kinek?" : "Who?"}
                            </span>
                            <p className="text-slate-700 mt-1">{prog.who}</p>
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                              {language === "hu" ? "Vissza nem térítendő" : "Non-refundable grant"}
                            </span>
                            <p className="text-2xl font-bold text-primary mt-1">{prog.support}</p>
                          </div>
                          <div>
                            <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                              {language === "hu" ? "Kölcsön" : "Loan"}
                            </span>
                            <p className="text-lg font-semibold text-slate-800 mt-1">{prog.loan}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Info className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm text-slate-600">{prog.energy}</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                            {language === "hu" ? "Felhasználható" : "Eligible uses"}
                          </span>
                          <ul className="mt-2 space-y-1">
                            {prog.items.map((item, j) => (
                              <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                {item.replace(" ✔", "")}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className={`mx-6 mb-6 p-4 rounded-xl flex gap-3 text-sm ${prog.noteType === "warning" ? "bg-amber-50 border border-amber-200" : "bg-blue-50 border border-blue-200"}`}>
                        {prog.noteType === "warning"
                          ? <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          : <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />}
                        <p className={prog.noteType === "warning" ? "text-amber-800" : "text-blue-800"}>{prog.note}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Savings section */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">{c.savings.title}</h2>
            <p className="text-muted-foreground mb-8">{c.savings.subtitle}</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {c.savings.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border-border/50 shadow-sm">
                    <CardContent className="p-6">
                      <div className="mb-3">{card.icon}</div>
                      <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="border-border/50 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-slate-800 text-white px-6 py-4">
                  <h3 className="font-bold text-lg">{c.savings.example.title}</h3>
                </div>
                <div className="divide-y divide-border/50">
                  {c.savings.example.rows.map((row, i) => (
                    <div key={i} className={`flex justify-between items-center px-6 py-3 ${row.highlight ? "bg-primary/5" : ""}`}>
                      <span className="text-slate-600 text-sm">{row.label}</span>
                      <span className={`font-bold text-sm ${row.highlight ? "text-primary" : "text-slate-800"}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="px-6 py-4 text-xs text-muted-foreground italic border-t border-border/40">
                  {c.savings.example.footnote}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Comparison table */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">{c.compare.title}</h2>
            <Card className="border-border/50 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        {c.compare.headers.map((h, i) => (
                          <th key={i} className={`px-5 py-3 text-left font-semibold ${i === 0 ? "text-slate-300" : ""}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {c.compare.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          {row.map((cell, j) => (
                            <td key={j} className={`px-5 py-3 ${j === 0 ? "font-medium text-slate-700" : "text-slate-600"}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Steps */}
          <section className="mb-14">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8">{c.steps.title}</h2>
            <div className="space-y-4">
              {c.steps.items.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tip */}
          <section className="mb-14">
            <Card className="border-primary/20 bg-primary/5 shadow-sm">
              <CardContent className="p-6 flex gap-4">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{c.tip.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{c.tip.desc}</p>
                  <Link href="/tudastar/hem-program" className="inline-flex items-center gap-1 text-primary font-semibold mt-3 hover:underline text-sm">
                    {language === "hu" ? "Tudjon meg többet a HEM-programról" : "Learn more about the HEM program"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="text-center p-10 border-2 border-dashed border-slate-200 rounded-2xl">
            <p className="text-slate-500 text-lg mb-5">{c.cta}</p>
            <Link href="/kapcsolat">
              <Badge className="px-6 py-2 text-sm cursor-pointer hover:bg-primary/90 transition-colors">
                {language === "hu" ? "Kapcsolatfelvétel" : "Contact us"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Badge>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
