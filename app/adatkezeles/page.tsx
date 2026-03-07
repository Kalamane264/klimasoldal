import type { Metadata } from "next";
import AdatkezelesClient from "./AdatkezelesClient";

export const metadata: Metadata = {
  title: "Adatkezelési Tájékoztató | AClimate",
  description: "Az AClimate adatkezelési irányelvei és a látogatók személyes adatainak védelme.",
  robots: "noindex, follow",
};

export default function Page() {
  
  return (
    <>
    <AdatkezelesClient />
    </>
  );
}
