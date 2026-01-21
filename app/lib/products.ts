export const products: Product[] = [
    {
      id: "eco-split-2024",
      type: "ac",
      name: "EcoSplit Pro 3.5kW",
      hu: { title: "Klíma", desc: "A legcsendesebb hűtési megoldás." },
      en: { title: "AC", desc: "The quietest cooling solution." },
      price: "245.000 Ft",
      specs: ["A++", "WiFi", "Légtisztítás"]
    },
    {
      id: "therma-max-v3",
      type: "hp",
      name: "ThermaMax V3 12kW",
      hu: { title: "Hőszivattyú", desc: "Hatékony fűtés akár -25 fokban is." },
      en: { title: "Heat Pump", desc: "Efficient heating down to -25°C." },
      price: "2.150.000 Ft",
      specs: ["A+++", "Inverteres", "H-tarifa"]
    },
    {
      id: "arctic-cool-plus",
      type: "ac",
      name: "ArcticCool Plus 5.2kW",
      hu: { title: "Klíma", desc: "Nagyobb helyiségek gyors hűtésére." },
      en: { title: "AC", desc: "Fast cooling for larger rooms." },
      price: "310.000 Ft",
      specs: ["A+", "I-Feel", "Öntisztító"]
    }
  ];

  export type Product = {
    id: string;
    type: string;
    name: string;
    hu: TitleDesc;
    en: TitleDesc;
    price: string;
    specs: string[];
}

type TitleDesc = {
    title: string;
    desc: string;
}