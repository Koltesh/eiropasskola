import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileText, CreditCard, MapPin } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";
import { Link } from "react-router-dom";
const UznemsanaPage = () => {
  const steps = [
    {
      number: "1",
      title: "Aizpildi pieteikuma anketu",
      description: "Norādi savus kontaktdatus un izvēlēto programmu tiešsaistē.",
    },
    {
      number: "2",
      title: "Saņem apstiprinājumu",
      description: "Mūsu komanda sazināsies ar tevi 1-2 darba dienu laikā.",
    },
    {
      number: "3",
      title: "Veic reģistrācijas maksājumu",
      description: "Samaksā reģistrācijas maksu, lai apstiprinātu vietu.",
    },
    {
      number: "4",
      title: "Saņem piekļuvi e-videi",
      description: "Pēc maksājuma saņem pieejas datus e-mācību platformai.",
    },
    {
      number: "5",
      title: "Sāc mācīties!",
      description: "Uzsāc mācības savā tempā ar pilnu atbalstu no mūsu komandas.",
    },
  ];

  const pricing = [
    { grade: "7. klase", monthly: "€65", months: "10", registration: "€50" },
    { grade: "8. klase", monthly: "€65", months: "10", registration: "€50" },
    { grade: "9. klase", monthly: "€65", months: "10", registration: "€50" },
    { grade: "10. klase", monthly: "€55", months: "10", registration: "€50" },
    { grade: "11. klase", monthly: "€55", months: "10", registration: "€50" },
    { grade: "12. klase", monthly: "€55", months: "10", registration: "€50" },
  ];

  const discounts = [
    "Ģimenes atlaide — 10% otrajam bērnam",
    "Sportista atlaide — līdz 100% stipendija",
    "Agrās pieteikšanās atlaide",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto text-center max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Uzņemšana</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Kā pieteikties mācībām?
            </h1>
            <p className="text-xl text-muted-foreground">
              Vienkārši soļi, lai uzsāktu mācības ETV. Mēs palīdzēsim katrā solī.
            </p>
            <Button size="lg" className="group" asChild>
              <a href="#pieteikums">
                Pieteikties tagad
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              Uzņemšanas soļi
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-0">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex gap-6 relative">
                    {/* Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-full bg-border -translate-x-1/2" />
                    )}
                    
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="font-display text-2xl font-bold text-primary-foreground">{step.number}</span>
                    </div>
                    <div className="pb-12">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full mb-4">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm font-medium">Mācību maksa</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Mācību maksa pa klasēm
              </h2>
              <p className="text-muted-foreground mt-2">Mācību maksa var mainīties — sazinies ar mums aktuālai informācijai.</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-muted font-semibold text-foreground">
                  <div>Klase</div>
                  <div>Maksa/mēnesī</div>
                  <div>Mēneši</div>
                  <div>Reģistrācija</div>
                </div>
                {pricing.map((item) => (
                  <div key={item.grade} className="grid grid-cols-4 gap-4 p-4 border-t border-border">
                    <div className="font-semibold text-foreground">{item.grade}</div>
                    <div className="text-muted-foreground">{item.monthly}</div>
                    <div className="text-muted-foreground">{item.months}</div>
                    <div className="text-muted-foreground">{item.registration}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discounts */}
            <div className="max-w-2xl mx-auto mt-12">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">Atlaides</h3>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <ul className="space-y-3">
                  {discounts.map((discount) => (
                    <li key={discount} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green flex-shrink-0" />
                      <span className="text-foreground">{discount}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Par konkrētām atlaidēm sazinies ar administrāciju. Atlaides tiek piemērotas uz vienu mācību gadu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Kā mūs atrast</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Mūsu atrašanās vieta
              </h2>
            </div>
            
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-soft text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-lg text-foreground mb-2">
                Valērijas Seiles iela 1 K-4, 312. telpa (3. stāvs)
              </p>
              <p className="text-muted-foreground">
                Rīga, LV-1019
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="pieteikums" className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full mb-4">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Pieteikums</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Piesakies mācībām
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Aizpildi anketu un mēs sazināsimies ar tevi 1-2 darba dienu laikā.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <ApplicationForm />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto text-center max-w-2xl space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Jautājumi?
            </h2>
            <p className="text-lg text-muted-foreground">
              Ja tev ir jautājumi pirms pieteikšanās, sazinies ar mums.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/kontakti">Sazināties ar mums</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UznemsanaPage;
