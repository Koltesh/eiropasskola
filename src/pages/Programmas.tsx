import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, Beaker, Briefcase, Languages, Code, Calculator, Laptop, Users } from "lucide-react";

const ProgrammasPage = () => {
  const highSchoolPrograms = [
    {
      icon: BookOpen,
      title: "Vispārizglītojošais virziens",
      description: "Jauniešiem ar plašu interešu loku, kuri vēlas iegūt stabilu pamatu turpmākajām studijām un karjeras izvēlēm.",
      features: ["Plašs priekšmetu klāsts", "Sagatavošana dažādām studijām", "Elastīga izvēle"],
    },
    {
      icon: Beaker,
      title: "Dabaszinātņu virziens",
      description: "Jauniešiem, kuri plāno studēt medicīnu, veterināriju, farmāciju, uzturzinātni vai vēlas izprast cilvēka un dabas procesus.",
      features: ["Padziļināta bioloģija", "Ķīmija un fizika", "Praktiskie darbi"],
    },
    {
      icon: Briefcase,
      title: "Uzņēmējdarbības virziens",
      description: "Jauniešiem, kuri interesējas par ekonomiku, finanšu pratību, uzņēmējdarbību un vēlas veidot savu biznesu.",
      features: ["Ekonomika", "Finanšu pratība", "Biznesa pamati"],
    },
    {
      icon: Languages,
      title: "Valodu virziens",
      description: "Jauniešiem, kurus interesē valodas, komunikācija, psiholoģija, žurnālistika vai sociālās zinātnes.",
      features: ["Padziļinātas valodas", "Komunikācija", "Kultūras studijas"],
    },
    {
      icon: Code,
      title: "Matemātikas un IT virziens",
      description: "Jauniešiem, kuri vēlas apgūt programmēšanu vai plāno studēt datorzinātnes un augstāko matemātiku.",
      features: ["Programmēšana", "Datorzinātnes", "Augstākā matemātika"],
    },
    {
      icon: Calculator,
      title: "Fizikas un matemātikas virziens",
      description: "Jauniešiem, kuri vēlas padziļināti izprast fiziku, apgūt matemātisko domāšanu vai plāno studēt inženierzinātnes.",
      features: ["Padziļināta fizika", "Matemātiskā domāšana", "Inženierzinātņu pamati"],
    },
  ];

  const basicEducation = [
    {
      icon: Laptop,
      title: "Tālmācība",
      description: "Elastīgs mācību temps, patstāvība, digitāla vide, iespēja mācīties no jebkuras vietas.",
      features: ["24/7 pieeja materiāliem", "Individuāls temps", "Tiešsaistes konsultācijas"],
    },
    {
      icon: Users,
      title: "Klātienes mācības",
      description: "Stabila skolas vide, mācības kopā ar skolotāju klasē, skaidrs dienas ritms.",
      features: ["Klases vide", "Tiešā saskarsme", "Strukturēts grafiks"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto text-center max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">Mācību programmas</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Izvēlies sev piemērotāko programmu
            </h1>
            <p className="text-lg text-muted-foreground">
              ETV piedāvā akreditētas izglītības programmas vidusskolai un pamatskolai ar iespēju mācīties tālmācībā vai klātienē.
            </p>
          </div>
        </section>

        {/* High School Programs */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">Vidējā izglītība</h2>
                <p className="text-muted-foreground">10.–12. klase • 6 programmas</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highSchoolPrograms.map((program) => (
                <div
                  key={program.title}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <program.icon className="w-7 h-7 text-orange-dark" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    Uzzināt vairāk
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Basic Education */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-14 h-14 bg-green rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">Pamatizglītība</h2>
                <p className="text-muted-foreground">7.–9. klase • Tālmācība un klātiene</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {basicEducation.map((program) => (
                <div
                  key={program.title}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <program.icon className="w-7 h-7 text-green" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <span className="w-1.5 h-1.5 bg-green rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group/btn">
                    Uzzināt vairāk
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto text-center max-w-2xl space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Nezini, kuru programmu izvēlēties?
            </h2>
            <p className="text-lg text-muted-foreground">
              Sazinies ar mums, un mēs palīdzēsim izvēlēties piemērotāko programmu taviem mērķiem.
            </p>
            <Button size="lg" className="group">
              Pieteikties konsultācijai
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgrammasPage;
