"use client";

import { Button } from "@/app/ui/button";
import { useLanguage } from "@/app/lib/i18n";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/dialog";
import { Input } from "@/app/ui/input";
import { Label } from "@/app/ui/label";
import { Textarea } from "@/app/ui/textarea";
import { useState } from "react";

export function Footer() {
  const { t, language } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">EcoClimate.hu</h2>
            <p className="text-slate-400 max-w-sm">
              {t.contact.subtitle}
            </p>
            <div className="flex gap-4">
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {t.nav.getQuote}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] text-foreground">
                  <DialogHeader>
                    <DialogTitle>{t.nav.getQuote}</DialogTitle>
                    <DialogDescription>
                      {language === 'hu' 
                        ? "Töltse ki az alábbi űrlapot, és hamarosan felvesszük Önnel a kapcsolatot." 
                        : "Fill out the form below and we will contact you shortly."}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="footer-name">{language === 'hu' ? "Név" : "Name"}</Label>
                      <Input id="footer-name" placeholder={language === 'hu' ? "Az Ön neve" : "Your name"} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="footer-email">{language === 'hu' ? "Email cím" : "Email address"}</Label>
                      <Input id="footer-email" type="email" placeholder="email@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="footer-phone">{language === 'hu' ? "Telefonszám" : "Phone number"}</Label>
                      <Input id="footer-phone" type="tel" placeholder="+36 30 123 4567" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="footer-message">{language === 'hu' ? "Üzenet" : "Message"}</Label>
                      <Textarea id="footer-message" placeholder={language === 'hu' ? "Miben segíthetünk?" : "How can we help?"} />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-primary text-white" onClick={() => setIsContactOpen(false)}>
                    {language === 'hu' ? "Küldés" : "Send Request"}
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.contact.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+36 30 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@ecoclimate.hu</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Budapest & Pest County</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.nav.services}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>{t.services.heatpump.title}</li>
              <li>{t.services.ac.title}</li>
              <li>{t.services.electric.title}</li>
              <li>{t.services.smart.title}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 EcoClimate.hu. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
