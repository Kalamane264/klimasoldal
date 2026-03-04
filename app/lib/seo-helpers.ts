import { Metadata } from "next";
import { products } from "./products";

export async function getProductMetadata(id: string, urlBeginsWith: string): Promise<Metadata> {
  const product = products.find((p) => p.id === id);

 if (!product) {
    return { title: "Termék nem található | AClimate" };
  }

  const data = product.hu;

  return {
    title: `${data.fullName} - Szereléssel és Garanciával`,
    description: `${data.desc.slice(0, 150)}... Profi klímaszerelés, 3+2 év garancia és ingyenes felmérés Budapesten és Pécsen.`,
    
    openGraph: {
      title: `${data.fullName} | AClimate Klímatechnika`,
      description: data.desc,
      url: urlBeginsWith + id,
      images: [
        {
          url: product.pics[0].src,
          width: product.pics[0].width,
          height: product.pics[0].height,
          alt: data.fullName,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.fullName,
      description: data.desc,
      images: [product.pics[0].src],
    }
  };
}