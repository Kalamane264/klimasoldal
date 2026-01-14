"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/ui/button";
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
import { Menu, X, Globe } from "lucide-react";

import Link from "next/link";
import { cn } from '@/app/lib/utils';
import { useLanguage } from "@/app/lib/i18n";

export default function Navbar(){

    const { t, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const navLinks = [
        { name: t.nav.services, href: "/szolgaltatasok" },
        { name: t.nav.education, href: "/tudastar" },
        { name: t.nav.areas, href: "/teruletek" },
        { name: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'hu' : 'en');
    };

    return(
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-border shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center">
              <span className="text-white text-lg">E</span>
            </div>
            EcoClimate<span className="text-accent">.hu</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-border">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center gap-2 font-medium"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </Button>
            
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  {t.nav.getQuote}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
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
                    <Label htmlFor="name">{language === 'hu' ? "Név" : "Name"}</Label>
                    <Input id="name" placeholder={language === 'hu' ? "Az Ön neve" : "Your name"} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">{language === 'hu' ? "Email cím" : "Email address"}</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">{language === 'hu' ? "Telefonszám" : "Phone number"}</Label>
                    <Input id="phone" type="tel" placeholder="+36 30 123 4567" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">{language === 'hu' ? "Üzenet" : "Message"}</Label>
                    <Textarea id="message" placeholder={language === 'hu' ? "Miben segíthetünk?" : "How can we help?"} />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary text-white" onClick={() => setIsContactOpen(false)}>
                  {language === 'hu' ? "Küldés" : "Send Request"}
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="font-medium"
          >
            {language.toUpperCase()}
          </Button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
            
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button className="w-full mt-2 bg-primary text-white">
                  {t.nav.getQuote}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
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
                    <Label htmlFor="mobile-name">{language === 'hu' ? "Név" : "Name"}</Label>
                    <Input id="mobile-name" placeholder={language === 'hu' ? "Az Ön neve" : "Your name"} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="mobile-email">{language === 'hu' ? "Email cím" : "Email address"}</Label>
                    <Input id="mobile-email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="mobile-phone">{language === 'hu' ? "Telefonszám" : "Phone number"}</Label>
                    <Input id="mobile-phone" type="tel" placeholder="+36 30 123 4567" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="mobile-message">{language === 'hu' ? "Üzenet" : "Message"}</Label>
                    <Textarea id="mobile-message" placeholder={language === 'hu' ? "Miben segíthetünk?" : "How can we help?"} />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary text-white" onClick={() => {
                  setIsContactOpen(false);
                  setIsOpen(false);
                }}>
                  {language === 'hu' ? "Küldés" : "Send Request"}
                </Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </nav>
    )
}