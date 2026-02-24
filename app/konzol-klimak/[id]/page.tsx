"use client";

import { useParams } from "next/navigation";

import NotFound from "@/app/pages/not-found";
import ProductDetails from "../../components/ProductDetails";
import { products } from "@/app/lib/products";

export default function KlimaDetails() {
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id == params.id);

  if (!product) {
    return <NotFound />;
  }

  return <ProductDetails product={product} />;
}
