"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb } from "lucide-react";

export default function KnowledgeBase() {
  const { language, t } = useLanguage();

  const articles = [
    {
      id: "hoszivattyu-vs-klima",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      hu: { title: "Hőszivattyú vagy Klíma?", desc: "Melyik a jobb választás otthonába? Összehasonlítjuk a két rendszert hatékonyság és költség szempontjából." },
      en: { title: "Heat Pump vs AC", desc: "Which is the better choice for your home? We compare the two systems in terms of efficiency and cost." }
    },
    {
      id: "okosotthon-elonyok",
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      hu: { title: "Az okosotthon előnyei", desc: "Hogyan teheti kényelmesebbé és energiatakarékosabbá életét az automatizáció?" },
      en: { title: "Benefits of Smart Home", desc: "How can automation make your life more comfortable and energy-efficient?" }
    },
    {
      id: "hoszivattyu-vs-klima-2",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      hu: { title: "Hőszivattyú vs Klíma", desc: "Melyik a jobb választás otthonába? Összehasonlítjuk a két rendszert hatékonyság és költség szempontjából." },
      en: { title: "Heat Pump vs AC", desc: "Which is the better choice for your home? We compare the two systems in terms of efficiency and cost." }
    },
    {
      id: "okosotthon-elonyok-2",
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      hu: { title: "Az okosotthon előnyei", desc: "Hogyan teheti kényelmesebbé és energiatakarékosabbá életét az automatizáció?" },
      en: { title: "Benefits of Smart Home", desc: "How can automation make your life more comfortable and energy-efficient?" }
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              {language === 'hu' ? 'Tudástár' : 'Knowledge Base'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'hu' ? 'Hasznos információk és útmutatók a modern fűtési és hűtési rendszerekről.' : 'Useful information and guides about modern heating and cooling systems.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {articles.map((article) => (
              <motion.div key={article.id} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      {article.icon}
                    </div>
                    <CardTitle className="text-xl">
                      {language === 'hu' ? article.hu.title : article.en.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {language === 'hu' ? article.hu.desc : article.en.desc}
                    </p>
                    <Link href={`/tudastar/${article.id}`}>
                      <Button variant="outline" className="cursor-pointer w-full">
                        {language === 'hu' ? 'Elolvasom' : 'Read more'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
