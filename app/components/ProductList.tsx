"use client";

import { useLanguage } from "@/app/lib/i18n";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Product } from "../lib/products";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  const { language } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      { products.map((product) => {
        const specs = language == "hu"? product.hu.specs : product.en.specs;
        let detailPageRoute = "";
        if(product.type === "ac") {
          detailPageRoute = "/klimak/" + product.id;
        } else if(product.type === "hp") {
          detailPageRoute = "/hoszivattyuk/" + product.id;
        } else if(product.type === "ac-multi") {
          detailPageRoute = "/multi-klimak/" + product.id;
        } else if(product.type === "ac-casette") {
          detailPageRoute = "/kazettas-klimak/" + product.id;
        }

        return <motion.div
          key={product.id}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="h-full border-border/50 overflow-hidden">
            <div 
              style={{ backgroundImage: `url('/pic/${product.pics[0].src}')` }}
              className="h-48 bg-slate-100 flex items-center justify-center text-slate-300 
                product-card-picture">
            </div>
            <CardHeader>
              <div className="flex justify-between items-start mb-6">
                <Badge variant="outline">
                  {language === "hu" ? product.hu.typeName : product.en.typeName}
                </Badge>
                <span className="font-bold text-primary">{product.price}</span>
              </div>
              <CardTitle className="text-xl">
                {language === "hu" ? product.hu.fullName : product.en.fullName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {language === "hu" ? product.hu.desc : product.en.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {specs.map((spec) => (
                  <Badge key={spec} variant="secondary" className="text-xs">
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={ detailPageRoute } className="w-full">
                <Button className="cursor-pointer w-full bg-primary hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200">
                  {language === "hu" ? "Részletek" : "Details"}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      }) }
      {/* {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="h-full border-border/50 overflow-hidden">
            <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-300">
              {product.type === "ac" ? (
                <Wind className="w-16 h-16" />
              ) : (
                <Thermometer className="w-16 h-16" />
              )}
            </div>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline">
                  {language === "hu" ? product.hu.typeName : product.en.typeName}
                </Badge>
                <span className="font-bold text-primary">{product.price}</span>
              </div>
              <CardTitle className="text-xl">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {language === "hu" ? product.hu.desc : product.en.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.specs.map((spec) => (
                  <Badge key={spec} variant="secondary" className="text-xs">
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={
                product.type === "ac"?
                `/klimak/${product.id}`:
                `/hoszivattyuk/${product.id}`
                } className="w-full">
                <Button className="cursor-pointer w-full bg-primary hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200">
                  {language === "hu" ? "Részletek" : "Details"}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))} */}
    </div>
  );
}
