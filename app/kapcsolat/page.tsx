"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Phone, Mail, MapPin, Clock, CheckCircle2, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
import { Label } from "@/app/ui/label";
import { Textarea } from "@/app/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/accordion";

export default function ContactPage() {
  const { language } = useLanguage();

  const t = language === 'hu' ? {
    h1: "Kapcsolat – klímaszerelés és villanyszerelés",
    lead: "Vegye fel velünk a kapcsolatot, ha gyors és megbízható megoldást keres otthonába.",
    form: {
      title: "Írjon nekünk üzenetet",
      description: "Írjon nekünk bátran, akár konkrét elképzeléssel, akár kérdéssel. Minden megkeresésre rövid időn belül válaszolunk.",
      name: "Név",
      email: "Email cím vagy telefonszám",
      message: "Üzenet",
      submit: "Üzenet küldése",
    },
    info: {
      phone: "+36 70 275 9141",
      email: "info@aclimate.hu",
      areaTitle: "Szolgáltatási terület:",
      areas: ["Pécs és környéke", "Budapest és környéke"],
      hoursTitle: "Elérhetőség:",
      hours: "H–P 8:00–18:00"
    },
    locationBlock: {
      title: "Hol érhető el a szolgáltatás?",
      content: "Szolgáltatásainkat elsősorban Pécsen, Budapesten, valamint a környező településeken nyújtjuk lakossági ügyfelek számára."
    },
    whyUs: {
      title: "Miért érdemes minket keresni?",
      items: ["Gyors visszajelzés", "Lakossági árak", "Megbízható kivitelezés", "Átlátható kommunikáció"]
    },
    faq: {
      title: "Gyakori kérdések",
      items: [
        { q: "Mennyi időn belül kapok választ?", a: "Általában 24 órán belül válaszolunk minden megkeresésre." },
        { q: "Van lehetőség helyszíni felmérést kérni?", a: "Igen, Budapesten és Pécsen díjmentes helyszíni felmérést biztosítunk." },
        { q: "Milyen területeken dolgoznak?", a: "Elsősorban Pécsen és Budapest XV. kerületének vonzáskörzetében." }
      ]
    }
  } : {
    h1: "Contact – AC & Electrical Services",
    lead: "Get in touch with us for fast and reliable solutions for your home.",
    form: {
      title: "Send us a message",
      description: "Feel free to write to us with specific ideas or questions. We respond to every inquiry shortly.",
      name: "Name",
      email: "Email or phone number",
      message: "Message",
      submit: "Send Message",
    },
    info: {
      phone: "+36 70 275 9141",
      email: "info@ecoclimate.hu",
      areaTitle: "Service Area:",
      areas: ["Pécs and surroundings", "Budapest and surroundings"],
      hoursTitle: "Availability:",
      hours: "Mon–Fri 8:00–18:00"
    },
    locationBlock: {
      title: "Where are our services available?",
      content: "We primarily provide our services in Pécs, Budapest District XV, and surrounding areas for residential clients."
    },
    whyUs: {
      title: "Why contact us?",
      items: ["Fast feedback", "Residential pricing", "Reliable execution", "Transparent communication"]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "How soon will I get a response?", a: "We typically respond to all inquiries within 24 hours." },
        { q: "Is on-site assessment available?", a: "Yes, we provide free on-site assessments in Budapest and Pécs." },
        { q: "What areas do you cover?", a: "Mainly Pécs and the surroundings of Budapest District XV." }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* 1. Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                {t.h1}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.lead}
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* 2. Info & Why Us */}
            <div className="space-y-12">
              <section className="bg-slate-50 p-8 rounded-3xl border border-border/50">
                <h2 className="text-2xl font-heading font-bold mb-8 text-slate-900">
                  {language === 'hu' ? 'Elérhetőségek' : 'Contact Details'}
                </h2>
                <div className="space-y-6">
                  <a href={`tel:${t.info.phone}`} className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="font-bold">{t.info.phone}</span>
                  </a>
                  <a href={`mailto:${t.info.email}`} className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="font-bold">{t.info.email}</span>
                  </a>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold block mb-1">{t.info.areaTitle}</span>
                      <ul className="text-muted-foreground">
                        {t.info.areas.map((area, i) => (
                          <li key={i}>{area}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold block mb-1">{t.info.hoursTitle}</span>
                      <span className="text-muted-foreground">{t.info.hours}</span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-6 text-slate-900">{t.whyUs.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.whyUs.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border/50 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* 3. Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border/50 shadow-xl shadow-slate-200/50">
              <h2 className="text-2xl font-heading font-bold mb-4 text-slate-900">{t.form.title}</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t.form.description}
              </p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">{t.form.name}</Label>
                  <Input id="contact-name" placeholder={language === 'hu' ? "Az Ön neve" : "Your name"} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">{t.form.email}</Label>
                  <Input id="contact-email" placeholder="example@email.com / +36..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">{t.form.message}</Label>
                  <Textarea id="contact-message" className="min-h-[150px]" placeholder={language === 'hu' ? "Miben segíthetünk?" : "How can we help?"} />
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-6 text-lg font-bold">
                  {t.form.submit}
                </Button>
              </form>
            </div>
          </div>

          {/* 5. Location Block */}
          <div className="max-w-6xl mx-auto mt-24">
            <section className="bg-slate-900 text-white p-10 md:p-16 rounded-3xl text-center relative overflow-hidden">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl font-heading font-bold mb-6">{t.locationBlock.title}</h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {t.locationBlock.content}
                </p>
              </div>
              <div className="absolute -right-20 -bottom-20 opacity-5">
                <MapPin className="w-80 h-80" />
              </div>
            </section>
          </div>

          {/* 7. FAQ */}
          <div className="max-w-3xl mx-auto mt-24">
            <section>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                <HelpCircle className="w-8 h-8 text-primary" />
                {t.faq.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {t.faq.items.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-bold text-slate-900 text-lg leading-snug">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-2 pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
