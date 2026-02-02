"use client";

import { useLanguage } from "@/app/lib/i18n";
import Image from "next/image";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "swiper/css";
import "swiper/css/navigation";
import "photoswipe/style.css";

import { Product } from "../lib/products";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  const { language } = useLanguage();
  const longDesc =
    language === "hu" ? product.hu.longDesc : product.en.longDesc;
  const specsExtended =
    language === "hu" ? product.hu.specsExtended : product.en.specsExtended;

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#pswp-gallery",
      children: "a",
      loop: false,
      showHideAnimationType: "zoom",
      showAnimationDuration: 300,
      hideAnimationDuration: 300,
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  let backRoute = "";
  if(product.type === "ac") {
    backRoute = "/klimak";
  } else if(product.type === "hp") {
    backRoute = "/hoszivattyuk";
  } else if(product.type === "ac-multi") {
    backRoute = "/multi-klimak";
  } else if(product.type === "ac-casette") {
    backRoute = "/kazettas-klimak";
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href={backRoute}>
            <Button
              variant="ghost"
              className="cursor-pointer mb-8 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === "hu" ? "Vissza a listához" : "Back to list"}
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/*  <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            > */}
            {/* <div className="aspect-square bg-slate-100 rounded-3xl flex items-center justify-center text-slate-300">
              </div> */}

            <div className="wrapper-div min-w-0 max-w-full overflow-hidden">
              <div
                id="pswp-gallery"
                className="relative min-w-0 max-w-full overflow-hidden"
              >
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".gallery-prev",
                    nextEl: ".gallery-next",
                  }}
                  slidesPerView={1}
                  spaceBetween={16}
                  onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                >
                  {product.pics.map((img, index) => (
                    <SwiperSlide key={index}>
                      <a
                        href={"/pic/" + img.src}
                        data-pswp-width={img.width}
                        data-pswp-height={img.height}
                      >
                        <Image
                          width={img.width}
                          height={img.height}
                          src={"/pic/" + img.src}
                          alt=""
                          className="w-full cursor-pointer"
                        />
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* PREV */}
                <button
                  disabled={isBeginning}
                  className="
                      gallery-prev
                      absolute left-2 bottom-1 -translate-y-1/2
                      rounded-full bg-white/80 p-1
                      text-gray-700
                      shadow
                      hover:bg-white
                      transition
                      z-10
                      "
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* NEXT */}
                <button
                  disabled={isEnd}
                  className="
                      gallery-next
                      absolute right-2 bottom-1 -translate-y-1/2
                      rounded-full bg-white/80 p-1
                      text-gray-700
                      shadow
                      hover:bg-white
                      transition
                      z-10
                      "
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* </motion.div> */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-6">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">
                  {language === "hu"
                    ? product.hu.typeName
                    : product.en.typeName}
                </span>
                <h1 className="text-4xl font-heading font-bold text-slate-900 mt-2">
                  {language === "hu"
                    ? product.hu.fullName
                    : product.en.fullName}
                </h1>
                <div className="mt-4 text-3xl font-bold text-primary">
                  {product.price}
                </div>
              </div>

              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                {language === "hu" ? product.hu.desc : product.en.desc}
              </p>

              <div className="space-y-4 mb-8">
                {specsExtended.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between border-b border-border/50 pb-2"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                <h3 className="font-bold mb-3">
                  {language === "hu" ? "Leírás" : "Description"}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: longDesc }}
                  className="text-muted-foreground leading-relaxed"
                ></div>
              </div>

              <Link href="/kapcsolat">
                <Button
                  size="lg"
                  className="cursor-pointer w-full bg-primary text-white rounded-full py-6 text-lg font-bold"
                >
                  {language === "hu" ? "Kapcsolatfelvétel" : "Contact"}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
