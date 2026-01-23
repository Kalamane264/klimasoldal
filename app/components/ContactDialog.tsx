import { Button } from "@/app/ui/button";
import { useLanguage } from "@/app/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/app/ui/input";
import { Label } from "@/app/ui/label";
import { Textarea } from "@/app/ui/textarea";
import { ReactNode, useState } from "react";

interface ContactDialogProps {
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ContactDialog({
  trigger,
  open,
  onOpenChange,
}: ContactDialogProps) {
  const { language, t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isEmailValid = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    isEmailValid(formData.email) &&
    formData.phone.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    const field = id.replace("dialog-", "");
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenChange = (newOpen: boolean) => {
    onOpenChange?.(newOpen);
    if (!newOpen) {
      // Reset state when dialog closes
      setTimeout(() => setIsSubmitted(false), 300);
    }
  };

  const sendForm = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      alert("Hiba történt az elküldés során. Kérjük, próbálja meg később.");
      throw new Error("Hiba történt az elküldés során");
    }

    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    const data = await res.json();
    console.log(data);
  };

  const content = isSubmitted ? (
    <DialogContent className="sm:max-w-[425px] text-foreground p-12">
      <div className="flex flex-col items-center text-center space-y-4 py-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <DialogTitle className="text-2xl font-bold">
          {language === "hu" ? "Köszönjük!" : "Thank You!"}
        </DialogTitle>
        <DialogDescription className="text-lg">
          {language === "hu"
            ? "Üzenetét sikeresen megkaptuk. Hamarosan felvesszük Önnel a kapcsolatot."
            : "Your message has been received. We will contact you shortly."}
        </DialogDescription>
        <Button
          className="cursor-pointer mt-6 w-full bg-primary text-white"
          onClick={() => handleOpenChange(false)}
        >
          {language === "hu" ? "Bezárás" : "Close"}
        </Button>
      </div>
    </DialogContent>
  ) : (
    <DialogContent className="sm:max-w-[425px] text-foreground max-h-[100vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{t.nav.getQuote}</DialogTitle>
        <DialogDescription>
          {language === "hu"
            ? "Töltse ki az alábbi űrlapot, és hamarosan felvesszük Önnel a kapcsolatot."
            : "Fill out the form below and we will contact you shortly."}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="dialog-name">
            {language === "hu" ? "Név" : "Name"}
          </Label>
          <Input
            id="dialog-name"
            placeholder={language === "hu" ? "Az Ön neve" : "Your name"}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dialog-email">
            {language === "hu" ? "Email cím" : "Email address"}
          </Label>
          <Input
            id="dialog-email"
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dialog-phone">
            {language === "hu" ? "Telefonszám" : "Phone number"}
          </Label>
          <Input
            id="dialog-phone"
            type="tel"
            placeholder="+36 30 123 4567"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dialog-message">
            {language === "hu" ? "Üzenet" : "Message"}
          </Label>
          <Textarea
            id="dialog-message"
            placeholder={
              language === "hu" ? "Miben segíthetünk?" : "How can we help?"
            }
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <Button
        type="submit"
        className="cursor-pointer w-full bg-primary text-white"
        onClick={() => {
          if (isFormValid) {
            sendForm();
          }
        }}
        disabled={!isFormValid}
      >
        {language === "hu" ? "Küldés" : "Send Request"}
      </Button>
    </DialogContent>
  );

  if (trigger) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        {content}
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {content}
    </Dialog>
  );
}
