"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "@/app/lib/i18n";
import { Button } from "@/app/ui/button";
import ProductFilters from "./ProductFilters";
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
import { Filters } from "../../types/filters";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  const { language } = useLanguage();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const filterProducts = useCallback((filters: Filters) => {
    console.log("Filters:", filters);

    const prods = products.filter((p) => {
      if (filters.brand !== "all" && p.brand !== filters.brand) return false;
      if (filters.power !== 0 && p.powerCooling !== filters.power) return false;
      if (
        filters.roomSizes.length > 0 &&
        (p.roomSize === null || !filters.roomSizes.includes(p.roomSize))
      ) {
        return false;
      }

      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (p.priceNum < min || p.priceNum > max) return false;
      }

      return true;
    });

    setFilteredProducts(prods);
  }, [products]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="w-full lg:w-64 flex-shrink-0">
        <ProductFilters onFilterChange={filterProducts} products={products} />
      </aside>
      <div className="flex-1 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const specs = language == "hu" ? product.hu.specs : product.en.specs;
          let detailPageRoute = "";
          if (product.type === "ac") {
            detailPageRoute = "/klimak/" + product.id;
          } else if (product.type === "hp") {
            detailPageRoute = "/hoszivattyuk/" + product.id;
          } else if (product.type === "ac-multi") {
            detailPageRoute = "/multi-klimak/" + product.id;
          } else if (product.type === "ac-casette") {
            detailPageRoute = "/kazettas-klimak/" + product.id;
          } else if (product.type === "ac-ducted") {
            detailPageRoute = "/legcsatornas-klimak/" + product.id;
          } else if (product.type === "ac-parapet") {
            detailPageRoute = "parapet-klimak/" + product.id;
          } else if (product.type === "ac-console") {
            detailPageRoute = "konzol-klimak/" + product.id;
          }

          return (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full border-border/50 overflow-hidden">
                <Link href={detailPageRoute}>
                  <div
                    style={{
                      backgroundImage: `url('/pic/${product.pics[0].src}')`,
                    }}
                    className="h-48 bg-slate-100 flex items-center justify-center text-slate-300 
                  product-card-picture"
                  ></div>
                </Link>
                <CardHeader>
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline">
                      {language === "hu"
                        ? product.hu.typeName
                        : product.en.typeName}
                    </Badge>
                    <span className="font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                  <CardTitle className="text-xl">
                    {language === "hu"
                      ? product.hu.fullName
                      : product.en.fullName}
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
                  <Link href={detailPageRoute} className="w-full">
                    <Button className="cursor-pointer w-full bg-primary hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200">
                      {language === "hu" ? "Részletek" : "Details"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
