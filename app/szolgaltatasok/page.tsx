"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Wind, ThermometerSun, Zap, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Szolgaltatasok() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Wind className="w-10 h-10 text-primary" />,
      title: t.services.ac.title,
      desc: t.services.ac.desc,
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <ThermometerSun className="w-10 h-10 text-accent" />,
      title: t.services.heatpump.title,
      desc: t.services.heatpump.desc,
      color: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      title: t.services.electric.title,
      desc: t.services.electric.desc,
      color: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: <Home className="w-10 h-10 text-purple-600" />,
      title: t.services.smart.title,
      desc: t.services.smart.desc,
      badge: t.services.smart.badge,
      color: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg shadow-slate-100/50 dark:shadow-none hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    {service.badge && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
