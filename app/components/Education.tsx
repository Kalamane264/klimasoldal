"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/ui/accordion";
import { Card } from "@/app/ui/card";
import { Info, AlertCircle, Thermometer, Snowflake, DollarSign, Zap, Home } from "lucide-react";

export function Education() {
  const { t } = useLanguage();

  const comparisonFactors = [
    { key: 'heating', icon: <Thermometer className="w-4 h-4" /> },
    { key: 'cooling', icon: <Snowflake className="w-4 h-4" /> },
    { key: 'efficiency', icon: <Zap className="w-4 h-4" /> },
    { key: 'cost', icon: <DollarSign className="w-4 h-4" /> },
    { key: 'idealFor', icon: <Home className="w-4 h-4" /> },
  ] as const;

  return (
    <section id="education" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            {t.education.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <Accordion type="single" collapsible defaultValue="item-1" className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 text-lg font-medium">
                  <div className="flex items-center gap-3">
                    <Info className="w-5 h-5 text-primary" />
                    {t.education.whatIs.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed text-base">
                  {t.education.whatIs.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card className="p-6 border-border/50 shadow-sm">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-primary">
                 {t.education.difference.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.education.difference.content}
              </p>
            </Card>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-slate-800">
                <AlertCircle className="w-5 h-5 text-accent" />
                {t.education.advice.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {t.education.advice.content}
              </p>
            </div>
          </div>

          {/* Right Column: Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="bg-slate-900 text-white p-6">
              <h3 className="text-xl font-bold text-center">{t.education.comparison.title}</h3>
            </div>
            
            <div className="grid grid-cols-3 bg-slate-50 border-b border-border text-sm font-semibold text-slate-500">
              <div className="p-4"></div>
              <div className="p-4 text-center border-l border-border">{t.education.comparison.ac}</div>
              <div className="p-4 text-center border-l border-border text-primary">{t.education.comparison.hp}</div>
            </div>

            <div className="divide-y divide-border">
              {comparisonFactors.map((factor, index) => (
                <div key={index} className="grid grid-cols-3 hover:bg-slate-50/50 transition-colors">
                  <div className="p-4 text-sm font-medium text-slate-700 flex items-center gap-2">
                    <span className="text-primary/70">{factor.icon}</span>
                    {t.education.comparison.factors[factor.key].label}
                  </div>
                  <div className="p-4 text-sm text-slate-600 border-l border-border text-center flex items-center justify-center">
                     {t.education.comparison.factors[factor.key].ac}
                  </div>
                  <div className="p-4 text-sm font-medium text-slate-900 border-l border-border text-center flex items-center justify-center bg-primary/5">
                     {t.education.comparison.factors[factor.key].hp}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-slate-50 text-center text-xs text-muted-foreground border-t border-border">
              * Az árak tájékoztató jellegűek és a telepítés bonyolultságától függően változhatnak.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
