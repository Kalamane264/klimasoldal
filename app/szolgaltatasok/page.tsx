"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/app/lib/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Wind, ThermometerSun, Zap, Home } from "lucide-react";
import { motion } from "framer-motion";

import heroImage from "@/public/szolgaltatasok_hero.png";

export default function Szolgaltatasok() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Wind className="w-10 h-10 text-primary" />,
      title: t.services.ac.title,
      desc: t.services.ac.desc,
      color: "bg-blue-50 dark:bg-blue-900/20",
      href: "/szolgaltatasok/klimaszereles"
    },
    {
      icon: <ThermometerSun className="w-10 h-10 text-accent" />,
      title: t.services.heatpump.title,
      desc: t.services.heatpump.desc,
      color: "bg-orange-50 dark:bg-orange-900/20",
      href: "/szolgaltatasok/hoszivattyu-telepites"
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      title: t.services.electric.title,
      desc: t.services.electric.desc,
      color: "bg-yellow-50 dark:bg-yellow-900/20",
      href: "/szolgaltatasok/villanyszereles"
    },
    {
      icon: <Home className="w-10 h-10 text-purple-600" />,
      title: t.services.smart.title,
      desc: t.services.smart.desc,
      badge: t.services.smart.badge,
      color: "bg-purple-50 dark:bg-purple-900/20",
      href: "/szolgaltatasok/okosotthon"
    }
  ];

  return (
    <>
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 z-10"
        >
          {/* <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
            EcoClimate.hu
          </div> */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-slate-900 leading-[1.1]">
            {t.services.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:-mr-12"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <Image
              src={heroImage}
              alt="Futuristic sustainable smart home"
              className="w-full h-full object-cover"
              width={1408}
              height={768}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50 hidden md:block">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl text-center mb-10">
            Amiben segítünk:
        </h2>
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
                    <Link href={ service.href }>
                    {/* <Button
                        size="lg" 
                        className="mt-4 cursor-pointer bg-primary hover:bg-primary/90 text-white text-lg h-12 px-8 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    >
                        { t.services.buttonText } <ArrowRight className="ml-2 w-5 h-5" />
                    </Button> */}
                    <Button className="mt-4 cursor-pointer w-full bg-primary hover:bg-primary/90 text-white group">
                    { t.services.buttonText }
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                    </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
