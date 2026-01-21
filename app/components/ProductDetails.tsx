import { useLanguage } from "@/app/lib/i18n";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Zap } from "lucide-react";

import { Product } from "../lib/products";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href={ product.type === "ac"? "/klimak" : "/hoszivattyuk" }>
            <Button variant="ghost" className="cursor-pointer mb-8 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              {language === 'hu' ? 'Vissza a listához' : 'Back to list'}
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="aspect-square bg-slate-100 rounded-3xl flex items-center justify-center text-slate-300">
                <Zap className="w-32 h-32" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="mb-6">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">
                  {language === 'hu' ? product.hu.title : product.en.title}
                </span>
                <h1 className="text-4xl font-heading font-bold text-slate-900 mt-2">{product.name}</h1>
                <div className="mt-4 text-3xl font-bold text-primary">
                  { product.price }
                </div>
              </div>

              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                {language === 'hu' ? product.hu.desc : product.en.desc}
              </p>

              <div className="space-y-4 mb-8">
                {product.specsExtended.map(spec => (
                  <div key={spec.label} className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                <h3 className="font-bold mb-3">{language === 'hu' ? 'Leírás' : 'Description'}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'hu' ? product.hu.longDesc : product.en.longDesc}
                </p>
              </div>

              <Link href="/kapcsolat">
                <Button size="lg" className="w-full bg-primary text-white rounded-full py-6 text-lg font-bold">
                  {language === 'hu' ? 'Ajánlatot kérek erre a készülékre' : 'Request a quote for this device'}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
