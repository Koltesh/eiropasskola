import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const KontaktiPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Lūdzu aizpildiet visus laukus",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify({
            type: "contact",
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message");
      }

      toast({
        title: "Ziņojums nosūtīts!",
        description: "Mēs sazināsimies ar jums pēc iespējas ātrāk.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Kļūda",
        description: "Neizdevās nosūtīt ziņojumu. Lūdzu, mēģiniet vēlreiz.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto text-center max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Kontakti</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Sazinies ar mums
            </h1>
            <p className="text-xl text-muted-foreground">
              Mēs esam šeit, lai atbildētu uz jautājumiem un palīdzētu izvēlēties piemērotāko programmu.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-orange-dark" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Telefons</h3>
                <a href="tel:+37128004224" className="text-muted-foreground hover:text-foreground transition-colors block">
                  28 004 224
                </a>
                <a href="tel:+37125699906" className="text-muted-foreground hover:text-foreground transition-colors block">
                  25 699 906
                </a>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-orange-dark" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">E-pasts</h3>
                <a href="mailto:etv@eiropasskola.lv" className="text-muted-foreground hover:text-foreground transition-colors">
                  etv@eiropasskola.lv
                </a>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-orange-dark" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Adrese</h3>
                <p className="text-muted-foreground text-sm">
                  Valērijas Seiles iela 1 K-4, 312. telpa (3. stāvs), Rīga, LV-1019
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-orange-dark" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Darba laiks</h3>
                <p className="text-muted-foreground">
                  P–Pk: 9:00–17:00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                  Uzraksti mums
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Vārds *</label>
                    <Input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Tavs vārds"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-pasts *</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="tavs@epasts.lv"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ziņojums *</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      className="rounded-xl resize-none"
                      placeholder="Tavs jautājums vai ziņojums..."
                      required
                    />
                  </div>
                  <Button className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sūta..." : "Nosūtīt ziņojumu"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Kā mūs atrast
              </h2>
              <div className="rounded-2xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.8!2d24.1589!3d56.9496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e0b0b0b1%3A0x0!2zVmFsxJNyaWphcyBTZWlsZXMgaWVsYSAxIEstNCwgUsSwZ2E!5e0!3m2!1slv!2slv!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ETV Vidusskola atrašanās vieta"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KontaktiPage;
