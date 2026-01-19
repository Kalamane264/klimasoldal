"use client";

import Link from "next/link";
import { Button } from "@/app/ui/button";
import { MapPin, CheckCircle2, Zap, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/lib/i18n";
import { Card } from "@/app/ui/card";
import { motion } from "framer-motion";

export default function TeruletekPage() {

    const { t } = useLanguage();

    const whyUsIcons = [
    <Zap key="zap" className="w-6 h-6" />,
    <Users key="users" className="w-6 h-6" />,
    <ShieldCheck key="shield" className="w-6 h-6" />
    ];

    return (
        <>
        <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              {t.serviceAreas.title}
            </h1>
            <p className="text-xl text-muted-foreground" 
                dangerouslySetInnerHTML={{__html: t.serviceAreas.subtitle}}>
              {   }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Budapest */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-border/50 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.serviceAreas.budapest.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.serviceAreas.budapest.desc}
                </p>
                <div className="bg-slate-50 p-6 rounded-xl mb-8 flex-grow">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    { t.serviceAreas.coverage }
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.serviceAreas.budapest.districts}
                  </p>
                </div>
                <Link href="/teruletek/budapest-klimaszereles">
                  <Button className="cursor-pointer w-full bg-primary hover:bg-primary/90 text-white group">
                    {t.serviceAreas.budapest.viewMore}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </motion.div>

            {/* Pécs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-border/50 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.serviceAreas.pecs.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.serviceAreas.pecs.desc}
                </p>
                <div className="bg-slate-50 p-6 rounded-xl mb-8 flex-grow">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    { t.serviceAreas.coverage }
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t.serviceAreas.pecs.districts}
                  </p>
                </div>
                <Link href="/teruletek/pecs-klimaszereles">
                  <Button variant="outline" className="cursor-pointer w-full border-accent text-accent hover:bg-accent hover:text-white group">
                    {t.serviceAreas.pecs.viewMore}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>

          {/* Why Choose Us Section */}
          <div className="max-w-5xl mx-auto py-16 border-t border-border/50">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">
              {t.serviceAreas.whyUs.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.serviceAreas.whyUs.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                    {whyUsIcons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
        </>
    )
}