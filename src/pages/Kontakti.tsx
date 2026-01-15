import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const KontaktiPage = () => {
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

        {/* Contact Form Placeholder */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                  Uzraksti mums
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Vārds</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tavs vārds"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-pasts</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tavs@epasts.lv"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ziņojums</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tavs jautājums vai ziņojums..."
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Nosūtīt ziņojumu
                  </Button>
                </div>
              </div>
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
              <div className="bg-muted rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Karte tiks pievienota drīzumā</p>
                </div>
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
