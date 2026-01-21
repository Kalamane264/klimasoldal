"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Wind, Thermometer } from "lucide-react";
import { Product } from "../lib/products";

type Props = {
    products: Product[];
}

export default function ProductList({products}: Props ) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              {language === 'hu' ? 'Készülékkínálatunk' : 'Our Products'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'hu' ? 'Válogasson prémium minőségű klímáink és hőszivattyúink közül.' : 'Browse our selection of premium AC units and heat pumps.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div key={product.id} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border-border/50 overflow-hidden">
                  <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-300">
                    {product.type === 'ac' ? <Wind className="w-16 h-16" /> : <Thermometer className="w-16 h-16" />}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{language === 'hu' ? product.hu.title : product.en.title}</Badge>
                      <span className="font-bold text-primary">{product.price}</span>
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {language === 'hu' ? product.hu.desc : product.en.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map(spec => (
                        <Badge key={spec} variant="secondary" className="text-xs">{spec}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/keszulekek/${product.id}`} className="w-full">
                      <Button className="w-full" variant="outline">
                        {language === 'hu' ? 'Részletek' : 'Details'}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
