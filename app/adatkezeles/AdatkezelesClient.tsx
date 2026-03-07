"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { useGoBack } from "@/app/lib/useGoBack";
import { ArrowLeft, ShieldCheck, UserCheck, Database, Clock, Share2, Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const goBack = useGoBack();

  const content = {
    hu: {
      title: "Adatvédelmi tájékoztató",
      sections: [
        {
          title: "1. Az Adatkezelő adatai",
          icon: <UserCheck className="w-5 h-5" />,
          content: (
            <div className="space-y-1">
              <p>A weboldalon megadott személyes adatok kezelője:</p>
              <p className="font-semibold mt-2">Név: Varga Kálmán e.v.</p>
              <p>Székhely: 1157 Budapest, Erdőkerülő u. 13.</p>
              <p>Adószám: 55716042-1-42</p>
              <p>E-mail: kalmiklima@gmail.com</p>
              <p>Telefonszám: +36 70 275 9141</p>
            </div>
          )
        },
        {
          title: "2. A kezelt adatok köre és célja",
          icon: <Database className="w-5 h-5" />,
          content: (
            <div className="space-y-4">
              <p>A weboldalunkon található kapcsolati űrlap használatakor az alábbi adatokat kezeljük:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border p-2 text-left">Adat típusa</th>
                      <th className="border p-2 text-left">Az adatkezelés célja</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Név</td>
                      <td className="border p-2">Azonosítás, kapcsolatfelvétel.</td>
                    </tr>
                    <tr>
                      <td className="border p-2">E-mail cím</td>
                      <td className="border p-2">Árajánlat küldése, válaszadás.</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Telefonszám</td>
                      <td className="border p-2">Szakmai egyeztetés, időpontfoglalás.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        },
        {
          title: "3. Az adatkezelés jogalapja",
          icon: <ShieldCheck className="w-5 h-5" />,
          content: <p>Az adatkezelés az Ön önkéntes hozzájárulásán alapul (GDPR 6. cikk (1) bekezdés a) pont), amelyet az űrlap elküldésével ad meg részünkre.</p>
        },
        {
          title: "4. Az adatok tárolásának időtartama",
          icon: <Clock className="w-5 h-5" />,
          content: <p>A kapcsolatfelvétel során megadott adatokat az ajánlatadási szakasz végéig, vagy – szerződéskötés esetén – a garanciális időszak végéig (3+2 év) tároljuk a későbbi karbantartások és ügyfélkezelés segítése érdekében.</p>
        },
        {
          title: "5. Adattovábbítás",
          icon: <Share2 className="w-5 h-5" />,
          content: <p>Személyes adatait harmadik félnek marketing célból nem adjuk át. Az adatokhoz kizárólag a technikai üzemeltetéshez szükséges partnerek (pl. tárhelyszolgáltató: Vercel Inc.) férhetnek hozzá a feladataik ellátásához szükséges mértékben.</p>
        },
        {
          title: "6. Az Ön jogai",
          icon: <UserCheck className="w-5 h-5" />,
          content: <p>Ön bármikor kérhet tájékoztatást adatai kezeléséről, kérheti azok helyesbítését vagy törlését (az elfeledtetéshez való jog), illetve tiltakozhat az adatkezelés ellen az 1. pontban megadott elérhetőségeinken.</p>
        },
        {
          title: "Jogorvoslati lehetőség",
          icon: <Scale className="w-5 h-5" />,
          content: <p>Panasz esetén Ön a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat: 1055 Budapest, Falk Miksa utca 9-11., www.naih.hu</p>
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Data of the Data Controller",
          icon: <UserCheck className="w-5 h-5" />,
          content: (
            <div className="space-y-1">
              <p>The controller of personal data provided on the website:</p>
              <p className="font-semibold mt-2">Name: Kálmán Varga sole proprietor</p>
              <p>Headquarters: 1157 Budapest, Erdőkerülő u. 13.</p>
              <p>Tax ID: 55716042-1-42</p>
              <p>Email: kalmiklima@gmail.com</p>
              <p>Phone: +36 70 275 9141</p>
            </div>
          )
        },
        {
          title: "2. Scope and purpose of processed data",
          icon: <Database className="w-5 h-5" />,
          content: (
            <div className="space-y-4">
              <p>When using the contact form on our website, we process the following data:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border p-2 text-left">Data type</th>
                      <th className="border p-2 text-left">Purpose of data processing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Name</td>
                      <td className="border p-2">Identification, contacting.</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Email address</td>
                      <td className="border p-2">Sending quotes, responding.</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Phone number</td>
                      <td className="border p-2">Professional consultation, booking appointments.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        },
        {
          title: "3. Legal basis for data processing",
          icon: <ShieldCheck className="w-5 h-5" />,
          content: <p>The data processing is based on your voluntary consent (GDPR Article 6(1)(a)), which you provide to us by submitting the form.</p>
        },
        {
          title: "4. Duration of data storage",
          icon: <Clock className="w-5 h-5" />,
          content: <p>The data provided during contact is stored until the end of the bidding phase, or – in case of a contract – until the end of the warranty period (3+2 years) to assist with later maintenance and customer management.</p>
        },
        {
          title: "5. Data transfer",
          icon: <Share2 className="w-5 h-5" />,
          content: <p>We do not pass your personal data to third parties for marketing purposes. Only partners necessary for technical operation (e.g., hosting provider: Vercel Inc.) may access the data to the extent necessary to perform their tasks.</p>
        },
        {
          title: "6. Your rights",
          icon: <UserCheck className="w-5 h-5" />,
          content: <p>You may request information about the processing of your data at any time, request its correction or deletion (the right to be forgotten), or object to the data processing via our contact details provided in point 1.</p>
        },
        {
          title: "Legal remedy",
          icon: <Scale className="w-5 h-5" />,
          content: <p>In case of a complaint, you may contact the National Authority for Data Protection and Freedom of Information (NAIH): 1055 Budapest, Falk Miksa utca 9-11., www.naih.hu</p>
        }
      ]
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

              <div className="grid gap-6">
                {active.sections.map((section, idx) => (
                  <Card key={idx} className="border-none shadow-sm bg-slate-50/50">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                        {section.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-600 leading-relaxed">
                      {section.content}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
