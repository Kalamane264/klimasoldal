import type { Metadata } from "next";
import ImpresszumClient from "./ImpresszumClient";

export const metadata: Metadata = {
  title: "Impresszum | AClimate",
  description: "Az AClimate weboldal üzemeltetőjének adatai, hatósági engedélyek és elérhetőségek.",
  robots: "noindex, follow", // Ezt az oldalt nem feltétlenül akarjuk a találati listák elején látni
};

export default function Page() {
  
  return (
    <>
    <ImpresszumClient />
    </>
  );
}
