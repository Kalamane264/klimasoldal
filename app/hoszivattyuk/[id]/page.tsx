"use client";

import { useParams } from "next/navigation";

import ProductDetails from "../../components/ProductDetails";
import { products } from "@/app/lib/products";

export default function KlimaDetails() {
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id == params.id);

  if (!product) {
    return <>Nem van.</>;
  }

  return <ProductDetails product={product} />;
}
