import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, Users, GraduationCap, Target, Heart } from "lucide-react";

const ParSkoluPage = () => {
  const facts = [
    { icon: Calendar, value: "12+", label: "gadu pieredze" },
    { icon: Users, value: "~1000", label: "skolēnu gadā" },
    { icon: GraduationCap, value: "2500+", label: "absolventu" },
    { icon: Award, value: "30+", label: "skolotāju" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mērķtiecība",
      description: "Orientēti uz rezultātu un skolēnu panākumiem.",
    },
    {
      icon: Heart,
      title: "Rūpes",
      description: "Individuāla pieeja katram skolēnam.",
    },
    {
      icon: Award,
      title: "Kvalitāte",
      description: "Akreditēta izglītība ar augstiem standartiem.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Par skolu</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                Eiropas Tālmācības Vidusskola
              </h1>
              <p className="text-xl text-muted-foreground">
                Konkurētspējīgs, spriestspējīgs, pašmotivēts un orientēts uz izglītības iegūšanu mūža garumā — tas ir ETV absolvents.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-card rounded-2xl p-6 shadow-soft text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <fact.icon className="w-7 h-7 text-orange-dark" />
                  </div>
                  <div className="font-display text-3xl font-bold text-foreground mb-1">{fact.value}</div>
                  <div className="text-muted-foreground">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Mūsu vēsture un vīzija
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    ETV ir akreditēta Latvijas tālmācības skola ar vairāk nekā 12 gadu pieredzi. Mēs piedāvājam kvalitatīvu izglītību 7.–12. klasei ar elastīgu mācību grafiku.
                  </p>
                  <p>
                    Mūsu mērķis ir nodrošināt mūsdienīgu izglītību, kas sagatavo jauniešus veiksmīgai nākotnei — gan studijām Latvijā, gan ārzemēs.
                  </p>
                  <p>
                    Mēs ticam, ka izglītībai jābūt pieejamai ikvienam, neatkarīgi no atrašanās vietas vai dzīvesveida.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {values.map((value) => (
                  <div key={value.title} className="bg-card rounded-2xl p-6 shadow-soft flex items-start gap-4">
                    <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-green" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto text-center max-w-2xl space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Gatavs pievienoties ETV?
            </h2>
            <p className="text-lg text-muted-foreground">
              Sāc savu ceļu ar mums un sasniedz savus mērķus.
            </p>
            <Button size="lg" className="group">
              Pieteikties mācībām
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ParSkoluPage;
