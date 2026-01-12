"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Card } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Home, Zap, Smartphone, TrendingDown, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function SmartHome() {
  const { t } = useLanguage();

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, key: 'efficiency' },
    { icon: <Smartphone className="w-5 h-5" />, key: 'control' },
    { icon: <TrendingDown className="w-5 h-5" />, key: 'savings' },
    { icon: <Clock className="w-5 h-5" />, key: 'automation' },
    { icon: <Shield className="w-5 h-5" />, key: 'comfort' },
    { icon: <Home className="w-5 h-5" />, key: 'integration' },
  ];

  return (
    <section id="smart-home" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              {t.smartHome.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              {t.smartHome.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.smartHome.subtitle}
            </p>
          </div>

          {/* Introduction */}
          <Card className="p-8 md:p-10 border-border/50 shadow-lg mb-12 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {t.smartHome.whatIs.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.smartHome.whatIs.content}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.smartHome.whatIs.details}
            </p>
          </Card>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              {t.smartHome.benefits.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 border-border/50 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">
                          {t.smartHome.benefits.items[benefit.key as keyof typeof t.smartHome.benefits.items].title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t.smartHome.benefits.items[benefit.key as keyof typeof t.smartHome.benefits.items].desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <Card className="p-8 md:p-10 border-border/50 shadow-lg bg-primary/5">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {t.smartHome.howWorks.title}
            </h3>
            <div className="space-y-4">
              {t.smartHome.howWorks.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              {t.smartHome.cta}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
