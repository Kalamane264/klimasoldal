"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/lib/i18n";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/app/ui/button";

import { ContactDialog } from "./ContactDialog";

export function Footer() {
  const { t, language } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">AClimate.hu</h2>
            <p className="text-slate-400 max-w-sm">
              {t.contact.subtitle}
            </p>
            <div className="flex gap-4">
              <ContactDialog 
              open={isContactOpen} 
              onOpenChange={setIsContactOpen}
              trigger={
                <Button className="cursor-pointer bg-primary hover:bg-primary/90 text-white">
                  {t.nav.getQuote}
                </Button>
              }
            />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.contact.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+36 70 275 9141</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@aclimate.hu</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{ t.contact.area }</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.nav.services}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/szolgaltatasok/klimaszereles">
                  {t.services.ac.title}
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok/hoszivattyu-telepites">
                  {t.services.heatpump.title}
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok/villanyszereles">
                  {t.services.electric.title}
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok/okosotthon">
                  {t.services.smart.title}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 AClimate.hu. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
