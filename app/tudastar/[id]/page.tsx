"use client";

import NotFound from "@/app/pages/not-found";
import { Education } from "@/app/components/Education";
import { SmartHome } from "@/app/components/SmartHome";
import { useLanguage } from "@/app/lib/i18n";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { JSX } from "react";

export default function KnowledgeDetail() {
    const { language } = useLanguage();
    const params = useParams<{ id: string }>();

    const id = params?.id || "";

     let content: JSX.Element;

    switch (id) {
    case "hoszivattyu-vs-klima":
      content = <Education />;
      break;
    case "okosotthon-elonyok":
      content = <SmartHome />;
      break;
    default:
      content = <NotFound />;
  }

    return (
        <div className="min-h-screen bg-background font-sans">
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <Link href="/tudastar">
                        <Button variant="ghost" className="cursor-pointer mb-8 flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            {language === 'hu' ? 'Vissza a tudástárhoz' : 'Back to knowledge base'}
                        </Button>
                    </Link>

                    <div className="max-w-5xl mx-auto">
                        { content }
                    </div>
                </div>
            </main>
        </div>
    );
}
