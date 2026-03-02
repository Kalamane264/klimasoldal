import type { Metadata } from "next";
import SzolgaltatasokClient from "./szolgaltatasok-client";

export const metadata: Metadata = {
  title: "Szia Jázminocske!",
  description: "Ez direkt ilyen mozs. ;)",
};

export default function Szolgaltatasok() {
  
  return (
    <>
    <SzolgaltatasokClient />
    </>
  );
}
