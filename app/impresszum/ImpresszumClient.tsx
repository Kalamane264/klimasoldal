"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { useGoBack } from "@/app/lib/useGoBack";
import { ArrowLeft, ShieldCheck, Building2, FileText, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ImpresszumClient() {
  const { language } = useLanguage();
  const goBack = useGoBack();

  const content = {
    hu: {
      title: "Impresszum",
      provider: {
        title: "Szolgáltató adatai",
        name: "Név: Varga Kálmán e.v.",
        address: "Székhely: 1157 Budapest, Erdőkerülő u. 13.",
        taxId: "Adószám: 55716042-1-42",
        regId: "Nyilvántartási szám: 54434295"
      },
      professional: {
        title: "Szakmai adatok",
        fgas: "F-Gáz azonosító: 1000000083656",
        authority: "Felügyeleti szerv: Nemzeti Klímavédelmi Hatóság"
      },
      hosting: {
        title: "Tárhelyszolgáltató",
        name: "Név: Vercel Inc.",
        address: "Székhely: 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
        contact: "Kapcsolat: privacy@vercel.com"
      }
    },
    en: {
      title: "Legal Notice",
      provider: {
        title: "Service Provider Details",
        name: "Name: Kálmán Varga sole proprietor",
        address: "Headquarters: 1157 Budapest, Erdőkerülő u. 13.",
        taxId: "Tax ID: 55716042-1-42",
        regId: "Registration Number: 54434295"
      },
      professional: {
        title: "Professional Details",
        fgas: "F-Gas ID: 1000000083656",
        authority: "Supervisory Body: National Climate Protection Authority"
      },
      hosting: {
        title: "Hosting Provider",
        name: "Name: Vercel Inc.",
        address: "Address: 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
        contact: "Contact: privacy@vercel.com"
      }
    }
  };

  const active = language === "hu" ? content.hu : content.en;

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Button onClick={goBack} variant="ghost" className="cursor-pointer mb-8 flex items-center gap-2 hover:bg-slate-100">
            <ArrowLeft className="w-4 h-4" />
            {language === 'hu' ? 'Vissza' : 'Back'}
          </Button>

          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-heading font-bold text-slate-900 mb-12 border-l-4 border-primary pl-6">
                {active.title}
              </h1>

              <div className="grid gap-8">
                {/* Service Provider */}
                <Card className="border-none shadow-sm bg-slate-50/50">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl font-bold">{active.provider.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-slate-600">
                    <p>{active.provider.name}</p>
                    <p>{active.provider.address}</p>
                    <p>{active.provider.taxId}</p>
                    <p>{active.provider.regId}</p>
                  </CardContent>
                </Card>

                {/* Professional Data */}
                <Card className="border-none shadow-sm bg-slate-50/50">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl font-bold">{active.professional.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-slate-600">
                    <p>{active.professional.fgas}</p>
                    <p>{active.professional.authority}</p>
                  </CardContent>
                </Card>

                {/* Hosting Provider */}
                <Card className="border-none shadow-sm bg-slate-50/50">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                      <Globe className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl font-bold">{active.hosting.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-slate-600">
                    <p>{active.hosting.name}</p>
                    <p>{active.hosting.address}</p>
                    <p>{active.hosting.contact}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
