"use client";

import { useRouter } from "next/navigation";

export function useGoBack() {
  const router = useRouter();

  return () => {
    if (window.history.length > 0) {
      router.back();
    } else {
      router.push("/");
    }
  };
}