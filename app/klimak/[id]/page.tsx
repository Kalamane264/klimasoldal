import { Metadata } from "next";
import NotFound from "@/app/pages/not-found";
import ProductDetails from "../../components/ProductDetails";
import { products } from "@/app/lib/products";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {

  const { id } = await params;
  const product = products.find((p) => p.id == id);

  if (!product) {
    return { title: "Termék nem található | AClimate" };
  }

  const fullTitle = `${product.hu.fullName}`;

  return {
    title: `${fullTitle} - Klímaszerelés és Garancia`,
    description: `${fullTitle} split klíma professzionális telepítéssel, 3 év teljes körű és 2 év kompresszor garanciával Pécsen és Budapesten.`,
    openGraph: {
      title: `${fullTitle} telepítéssel | AClimate`,
      description: `Vásároljon ${product.brand} klímát szakértő kivitelezéssel! Ingyenes felmérés és tiszta munkavégzés.`,
      images: [
        {
          url: product.pics[0].src,
          width: product.pics[0].width,
          height: product.pics[0].height,
          alt: fullTitle,
        },
      ],
    },
  };
}

export default async function KlimaDetails({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = products.find((p) => p.id == id);

  console.log("Paramssss", params);

  if (!product) {
    return <NotFound />;
  }

  return <ProductDetails product={product} />;
}