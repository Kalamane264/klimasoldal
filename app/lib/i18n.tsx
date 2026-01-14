"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'hu' | 'en';

type Translations = {
  nav: {
    home: string;
    services: string;
    education: string;
    areas: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  services: {
    title: string;
    subtitle: string;
    buttonText: string;
    ac: {
      title: string;
      desc: string;
    };
    heatpump: {
      title: string;
      desc: string;
    };
    electric: {
      title: string;
      desc: string;
    };
    smart: {
      title: string;
      desc: string;
      badge: string;
    };
  };
  education: {
    title: string;
    subtitle: string;
    whatIs: {
      title: string;
      content: string;
    };
    difference: {
      title: string;
      content: string;
    };
    advice: {
      title: string;
      content: string;
    };
    comparison: {
      title: string;
      ac: string;
      hp: string;
      factors: {
        heating: { label: string; ac: string; hp: string };
        cooling: { label: string; ac: string; hp: string };
        cost: { label: string; ac: string; hp: string };
        efficiency: { label: string; ac: string; hp: string };
        idealFor: { label: string; ac: string; hp: string };
      };
    };
  };
  smartHome: {
    title: string;
    subtitle: string;
    badge: string;
    whatIs: {
      title: string;
      content: string;
      details: string;
    };
    benefits: {
      title: string;
      items: {
        efficiency: { title: string; desc: string };
        control: { title: string; desc: string };
        savings: { title: string; desc: string };
        automation: { title: string; desc: string };
        comfort: { title: string; desc: string };
        integration: { title: string; desc: string };
      };
    };
    howWorks: {
      title: string;
      steps: Array<{ title: string; desc: string }>;
    };
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
  };
  serviceAreas: {
    title: string;
    subtitle: string;
    budapest: {
      title: string;
      desc: string;
      districts: string;
      viewMore: string;
    };
    pecs: {
      title: string;
      desc: string;
      districts: string;
      viewMore: string;
    };
    whyUs: {
      title: string;
      items: Array<{ title: string; desc: string }>;
    };
  };
};

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      education: "Knowledge Base",
      areas: "Service areas",
      contact: "Contact",
      getQuote: "Get a Quote"
    },
    hero: {
      title: "Sustainable Comfort for Modern Living",
      subtitle: "Professional installation of Heat Pumps, Air Conditioning, and Electrical Systems. Future-proof your home with EcoClimate.",
      cta: "Explore Services",
      secondaryCta: "Learn About Heat Pumps"
    },
    services: {
      title: "Our services for residential customers",
      subtitle: "We provide reliable engineering solutions primarily for apartments and family homes, with short lead times and transparent pricing. Our services are designed to deliver everyday comfort quickly and seamlessly – whether it’s air conditioning installation, heat pump setup, or electrical work.",
      buttonText: "More",
      ac: {
        title: "Air Conditioning Installation",
        desc: "We install, replace and maintain air conditioning systems for apartments and family houses. Our services focus on fast execution, transparent, favorable pricing and reliable solutions for everyday comfort."
      },
      heatpump: {
        title: "Heat Pump Installation",
        desc: "We provide installation of energy-efficient heating and cooling systems for residential properties. These solutions can reduce energy consumption while maintaining a balanced indoor temperature year-round."
      },
      electric: {
        title: "Electrical Services",
        desc: "We offer residential electrical services ranging from minor repairs to complete electrical installations. All work is carried out with a strong focus on safety, compliance and long-term reliability."
      },
      smart: {
        title: "Smart Home Solutions",
        desc: "We deliver easy-to-use smart home solutions for apartments and family houses. Automation improves comfort and helps optimize overall energy usage.",
        badge: "Coming Soon"
      }
    },
    education: {
      title: "Why Choose a Heat Pump?",
      subtitle: "Understanding the technology that powers the green transition.",
      whatIs: {
        title: "What is a Heat Pump?",
        content: "A heat pump is a device that transfers heat energy from a source of heat to what is called a thermal reservoir. Heat pumps move thermal energy in the opposite direction of spontaneous heat transfer, by absorbing heat from a cold space and releasing it to a warmer one."
      },
      difference: {
        title: "Heat Pump vs. Regular AC",
        content: "While a regular Air Conditioner is optimized primarily for cooling, a Heat Pump is designed to be a primary heating source even in freezing temperatures, while also providing efficient cooling in summer. Think of it as a reversible, super-charged AC."
      },
      advice: {
        title: "Expert Advice",
        content: "If you are renovating or building new, a Heat Pump is the best investment for long-term savings. For simple cooling needs in an apartment, a high-efficiency AC might be sufficient."
      },
      comparison: {
        title: "Detailed Comparison",
        ac: "Standard AC",
        hp: "Heat Pump",
        factors: {
          heating: {
            label: "Heating Capability",
            ac: "Limited (down to -5°C usually)",
            hp: "Excellent (down to -25°C)"
          },
          cooling: {
            label: "Cooling Capability",
            ac: "Excellent",
            hp: "Excellent"
          },
          cost: {
            label: "Initial Investment",
            ac: "Lower",
            hp: "Higher (but higher ROI)"
          },
          efficiency: {
            label: "Energy Efficiency (SCOP)",
            ac: "Good (3.0 - 4.0)",
            hp: "Superior (4.0 - 5.5+)"
          },
          idealFor: {
            label: "Ideal For",
            ac: "Cooling apartments, supplemental heating",
            hp: "Complete home heating & cooling solution"
          }
        }
      }
    },
    smartHome: {
      title: "The Future of Home Comfort: Smart Home Technology",
      subtitle: "Transform your living space with intelligent climate control and energy management.",
      badge: "Coming Soon",
      whatIs: {
        title: "What is a Smart Home Climate System?",
        content: "A smart home climate system uses connected devices, artificial intelligence, and automation to intelligently manage your heating, cooling, and energy consumption. Unlike traditional thermostats that simply respond to temperature settings, smart systems actively learn from your lifestyle, predict your needs, and adjust automatically throughout the day.",
        details: "Smart systems monitor occupancy, weather patterns, and historical usage data to optimize comfort while minimizing energy waste. They integrate with heat pumps, air conditioning units, and other home systems to create a seamless, automated experience that requires minimal manual intervention."
      },
      benefits: {
        title: "Why Choose Smart Climate Control?",
        items: {
          efficiency: {
            title: "Peak Efficiency",
            desc: "Achieve 15-30% additional energy savings by eliminating unnecessary heating and cooling when your home is unoccupied."
          },
          control: {
            title: "Remote Control",
            desc: "Manage your climate from anywhere using your smartphone. Turn on heating before you arrive home or adjust cooling on vacation."
          },
          savings: {
            title: "Lower Bills",
            desc: "Combine smart automation with heat pump efficiency for dramatic reductions in annual energy costs—often paying for itself within 3-5 years."
          },
          automation: {
            title: "Automatic Scheduling",
            desc: "Set personalized schedules or let the system learn your routine. No more manual thermostat adjustments ever again."
          },
          comfort: {
            title: "Optimal Comfort",
            desc: "Maintain your ideal temperature in every room. Smart systems prevent temperature swings and maintain consistent comfort year-round."
          },
          integration: {
            title: "Whole-Home Integration",
            desc: "Connect lighting, shading, humidity control, and other systems for a truly intelligent home experience."
          }
        }
      },
      howWorks: {
        title: "How Smart Home Climate Control Works",
        steps: [
          {
            title: "Intelligent Sensors",
            desc: "Temperature, humidity, and occupancy sensors throughout your home continuously gather data about conditions and usage patterns."
          },
          {
            title: "Cloud-Based AI",
            desc: "Advanced algorithms analyze patterns, weather forecasts, and your preferences to predict heating/cooling needs before they arise."
          },
          {
            title: "Automatic Adjustment",
            desc: "The system seamlessly adjusts heat pump or AC operation to maintain comfort while minimizing energy consumption."
          },
          {
            title: "Learning & Optimization",
            desc: "Over time, the system learns your preferences and lifestyle, becoming increasingly efficient and accurate at meeting your needs."
          },
          {
            title: "Mobile Access",
            desc: "Control everything remotely via smartphone app or through voice commands with compatible smart assistants."
          },
          {
            title: "Energy Reports",
            desc: "Detailed insights show your energy usage, savings, and recommendations for further optimization."
          }
        ]
      },
      cta: "Ready to experience the future of home comfort? Contact us today to learn how a smart climate system can transform your home while saving you thousands in energy costs."
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to upgrade your home? Contact us for a free consultation.",
      phone: "Phone",
      email: "Email",
      address: "Service Area"
    },
    serviceAreas: {
      title: "Service Areas",
      subtitle: "We provide professional climate control solutions in the following regions of Hungary.",
      budapest: {
        title: "Budapest & Metropolitan Area",
        desc: "Full coverage across all districts of Budapest and the surrounding Pest county settlements.",
        districts: "All 23 districts of Budapest, including Buda and Pest sides, and neighboring towns like Érd, Dunakeszi, and Budaörs.",
        viewMore: "View Budapest details",
      },
      pecs: {
        title: "Pécs & Baranya County",
        desc: "Our regional center in Southern Hungary, providing the same high-quality services to local residents.",
        districts: "Pécs city and surrounding settlements in Baranya county within a 30km radius.",
        viewMore: "View Pécs details",
      },
      whyUs: {
        title: "Why Choose Us in These Areas?",
        items: [
          {
            title: "Rapid Response",
            desc: "Our localized teams ensure quick response times for both emergency repairs and scheduled installations.",
          },
          {
            title: "Local Expertise",
            desc: "We understand the specific building types and regional climate patterns in Budapest and Pécs.",
          },
          {
            title: "Unmatched Reliability",
            desc: "Years of dedicated service and hundreds of satisfied customers across our primary service regions.",
          },
        ],
      },
    },
  },
  hu: {
    nav: {
      home: "Főoldal",
      services: "Szolgáltatások",
      education: "Tudástár",
      areas: "Területek",
      contact: "Kapcsolat",
      getQuote: "Ajánlatkérés"
    },
    hero: {
      title: "Fenntartható Kényelem Modern Otthonokba",
      subtitle: "Hőszivattyúk, klímák és elektromos rendszerek professzionális telepítése. Tegye jövőbiztossá otthonát az EcoClimate-tel.",
      cta: "Szolgáltatásaink",
      secondaryCta: "Tudjon meg többet"
    },
    services: {
      title: "Szolgáltatásaink lakossági megrendelők számára",
      subtitle: "Elsősorban lakások és családi házak számára kínálunk megbízható műszaki megoldásokat, rövid határidőkkel és átlátható árakkal. Szolgáltatásaink célja, hogy a mindennapi komfort gyorsan, felesleges bonyodalmak nélkül megvalósuljon – legyen szó klímaszerelésről, hőszivattyú telepítésről vagy elektromos munkákról.",
      buttonText: "Bővebben",
      ac: {
        title: "Klímaszerelés",
        desc: "Új klímaberendezések telepítését, meglévők cseréjét és karbantartását vállaljuk lakásokban és családi házakban. Gyors kivitelezéssel, átlátható, kedvező árakkal és megbízható megoldásokkal segítjük az otthoni komfort kialakítását."
      },
      heatpump: {
        title: "Hőszivattyú Telepítés",
        desc: "Energiahatékony fűtési és hűtési rendszerek telepítését végezzük lakossági ingatlanokban. Megoldásaink csökkentik az energiafelhasználást, miközben egész évben egyenletes hőmérsékletet biztosítanak."
      },
      electric: {
        title: "Villanyszerelés",
        desc: "Lakossági villanyszerelési munkákat vállalunk kisebb javításoktól a teljes elektromos kiépítésig. A biztonságos, szabványos és hosszú távon megbízható működés minden esetben elsődleges szempont."
      },
      smart: {
        title: "Okosotthon",
        desc: "Kényelmesen kezelhető okosotthon megoldásokat kínálunk lakásokhoz és családi házakhoz. Az automatizált rendszerek növelik a komfortot és segítenek az energiafelhasználás optimalizálásában.",
        badge: "Hamarosan"
      }
    },
    education: {
      title: "Hőszivattyú vagy Klíma? Mi a különbség?",
      subtitle: "Segítünk eligazodni a technológiák között, hogy a legjobb döntést hozhassa otthona számára.",
      whatIs: {
        title: "Mi az a hőszivattyú?",
        content: "A hőszivattyú a környezet (levegő, föld, víz) hőenergiáját hasznosítja. Működése a hűtőszekrény elvén alapul, csak fordítva: hőt von el a külső környezetből és azt magasabb hőmérsékleten adja le a fűtési rendszernek. 1 egység villamos energiából akár 4-5 egység hőenergiát állít elő."
      },
      difference: {
        title: "Mikor melyiket válassza?",
        content: "A legfontosabb különbség a fűtési hatékonyságban rejlik. Míg egy átlagos klíma 0°C alatt veszít a hatékonyságából és gyakran leáll olvasztani, addig a fűtésre optimalizált hőszivattyúk -25°C-ig üzembiztosan és gazdaságosan fűtenek."
      },
      advice: {
        title: "Kinek ajánljuk?",
        content: "Hagyományos klíma: Ha elsősorban hűteni szeretne, és csak az átmeneti őszi/tavaszi időszakban fűtene rá. Hőszivattyú: Ha elsődleges fűtési megoldást keres, teljes házat szeretne kifűteni gáz nélkül, vagy H-tarifát (kedvezményes áram) szeretne igényelni."
      },
      comparison: {
        title: "Részletes Összehasonlítás",
        ac: "Hagyományos Klíma",
        hp: "Hőszivattyú (Fűtésre opt.)",
        factors: {
          heating: {
            label: "Fűtési képesség",
            ac: "Korlátozott (kb. -5°C-ig gazdaságos)",
            hp: "Kiváló (-25°C-ig üzembiztos)"
          },
          cooling: {
            label: "Hűtési képesség",
            ac: "Kiváló",
            hp: "Kiváló"
          },
          cost: {
            label: "Beruházási költség",
            ac: "Alacsonyabb (250e - 400e Ft)",
            hp: "Magasabb (600e - 3M+ Ft)"
          },
          efficiency: {
            label: "Hatékonyság (SCOP)",
            ac: "Jó (3.0 - 4.0)",
            hp: "Kiemelkedő (4.0 - 5.5+)"
          },
          idealFor: {
            label: "Ideális felhasználás",
            ac: "Lakások hűtése, kiegészítő fűtés",
            hp: "Teljes otthon fűtése és hűtése"
          }
        }
      }
    },
    smartHome: {
      title: "A Jövő Otthona: Okosotthon Klímavezérlés",
      subtitle: "Alakítsd át otthonod intelligens klímavezérléssel és energiamenedzsmenttel.",
      badge: "Hamarosan",
      whatIs: {
        title: "Mi az az okosotthon klímarendszer?",
        content: "Az okosotthon klímarendszer összekapcsolt eszközöket, mesterséges intelligenciát és automatizálást használ a fűtés, hűtés és energiafogyasztás intelligens irányításához. Az okos rendszerek megismerik a mindennapi szokásaidat, előre felismerik az igényeidet, és észrevétlenül alkalmazkodnak a nap ritmusához.",
        details: "Az okos rendszerek figyelik, mikor van otthon valaki, számolnak az időjárással és a korábbi beállításokkal, hogy kényelmesebb otthont biztosítsanak, miközben takarékosan bánnak az energiával. Zökkenőmentesen együttműködnek a hőszivattyúval, a klímával és más otthoni berendezésekkel."
      },
      benefits: {
        title: "Miért válassz okos klímavezérlést?",
        items: {
          efficiency: {
            title: "Csúcshatékonyság",
            desc: "Érj el 15-30%-os további energiamegtakarítást azzal, hogy eltünteted az szükségtelen fűtést és hűtést, amikor nincs senki otthon."
          },
          control: {
            title: "Távirányítás",
            desc: "Vezéreld az otthon klímáját bárhonnan az okostelefonod segítségével, vagy kapcsold be a fűtést mielőtt hazaérnél."
          },
          savings: {
            title: "Alacsonyabb Számlák",
            desc: "Az okos automatizáció és a hőszivattyú hatékony együttműködése érezhetően csökkenti az éves energiaköltségeket, a beruházás pedig sok esetben 3–5 éven belül megtérül."
          },
          automation: {
            title: "Automatikus Ütemezés",
            desc: "Állíts be személyre szabott ütemezéseket, vagy engedd meg a rendszernek, hogy megtanulja a rutinod. Nem kell soha többé manuálisan állítani a termosztátot."
          },
          comfort: {
            title: "Optimális Kényelem",
            desc: "Minden helyiségben kellemes hőmérsékletet tart fenn. Az okos rendszerek kiegyenlítik a hőingadozásokat, így egész évben állandó komfortot nyújtanak."
          },
          integration: {
            title: "Egész Otthon Integrálása",
            desc: "Kösd össze a világítást, árnyékolást, páratartalom-szabályozást és egyéb rendszereket egy valóban intelligens otthonhoz."
          }
        }
      },
      howWorks: {
        title: "Hogyan Működik az Okos Klímavezérlés",
        steps: [
          {
            title: "Intelligens Szenzorok",
            desc: "Az otthon különböző pontjain elhelyezett érzékelők folyamatosan figyelik a hőmérsékletet, a páratartalmat és a lakás használatát."
          },
          {
            title: "Felhő-alapú MI",
            desc: "A fejlett algoritmusok elemzik a mintákat, az időjárás-előrejelzéseket és az egyéni preferenciáidat a fűtési/hűtési igények előrejelzéséhez."
          },
          {
            title: "Automatikus Beállítás",
            desc: "A rendszer automatikusan optimalizálja a hőszivattyú és a klíma működését a kényelem és az energiatakarékosság érdekében."
          },
          {
            title: "Tanulás és Optimalizálás",
            desc: "A rendszer az idő múlásával megtanulja a szokásaidat és életstílusodat, így egyre pontosabban és hatékonyabban szolgálja ki az igényeidet."
          },
          {
            title: "Mobil Hozzáférés",
            desc: "Vezéreld az egész rendszert távolról okostelefonos alkalmazáson keresztül, vagy hangvezérléssel kompatibilis okosasszisztensek segítségével."
          },
          {
            title: "Energiajelentések",
            desc: "Részletes elemzések mutatják az energiafogyasztást, a megtakarításokat és további optimalizálási lehetőségeket."
          }
        ]
      },
      cta: "Készen állsz megtapasztalni a jövő otthonát? Vedd fel velünk a kapcsolatot, és megmutatjuk, hogyan teheti az okos klímarendszer élhetőbbé az otthonod, miközben jelentősen csökkenti az energiaköltségeket."
    },
    contact: {
      title: "Lépjen Kapcsolatba Velünk",
      subtitle: "Készen áll otthona korszerűsítésére? Keressen minket ingyenes konzultációért.",
      phone: "Telefon",
      email: "Email",
      address: "Működési Terület"
    },
    serviceAreas: {
      title: "Szolgáltatási Területek",
      subtitle: "Professzionális klímatechnikai megoldásokat kínálunk Magyarország alábbi régióiban.",
      budapest: {
        title: "Budapest és környéke",
        desc: "Teljes körű szolgáltatást nyújtunk Budapest összes kerületében és a környező Pest megyei településeken.",
        districts: "Budapest mind a 23 kerülete, Buda és Pest oldalon egyaránt, valamint a környező városok, mint Érd, Dunakeszi és Budaörs.",
        viewMore: "Budapest részletei",
      },
      pecs: {
        title: "Pécs és Baranya megye",
        desc: "Dél-magyarországi központunkon keresztül ugyanazt a magas színvonalú szolgáltatást biztosítjuk a helyi lakosoknak.",
        districts: "Pécs városa és a környező Baranya megyei települések 30 km-es körzetben.",
        viewMore: "Pécs részletei",
      },
      whyUs: {
        title: "Miért érdemes minket választani ezeken a területeken?",
        items: [
          {
            title: "Gyors kiszállás",
            desc: "Helyi csapataink révén rövid határidővel vállaljuk a kiszállást sürgős javítások és tervezett telepítések esetén is.",
          },
          {
            title: "Helyi szakértelem",
            desc: "Ismerjük a budapesti és pécsi épülettípusok sajátosságait és a helyi éghajlati viszonyokat.",
          },
          {
            title: "Megbízhatóság",
            desc: "Több éves szakmai tapasztalatunk és elégedett ügyfeleink százai a garancia a minőségi munkavégzésre.",
          },
        ],
      },
    },
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('hu'); // Default to Hungarian as it's a .hu site

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
