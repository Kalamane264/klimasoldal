import { Metadata } from "next";
import { getProductMetadata } from "@/app/lib/seo-helpers";
import NotFound from "@/app/pages/not-found";
import ProductDetails from "../../components/ProductDetails";
import { products } from "@/app/lib/products";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return getProductMetadata(id, "https://aclimate.hu/legcsatornas-klimak/");
}

export default async function Details({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <NotFound />;
  }

  return <ProductDetails product={product} />;
}