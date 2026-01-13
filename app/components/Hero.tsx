"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { useLanguage } from "@/app/lib/i18n";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/public/modern_smart_home_living_room_with_subtle_tech.png";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 z-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
            EcoClimate.hu
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-slate-900 leading-[1.1]">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/szolgaltatasok">
              <Button
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg h-12 px-8 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105"
              >
                {t.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/tudastar">
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 rounded-full border-primary/20 text-primary hover:bg-primary/5"
              >
                {t.hero.secondaryCta}
              </Button>
            </Link>
          </div>
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
  );
}
