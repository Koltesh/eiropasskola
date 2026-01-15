import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, BookOpen, Beaker, Briefcase, Languages, Code, Calculator, Laptop, Users } from "lucide-react";

const Programs = () => {
  const highSchoolPrograms = [
    {
      icon: BookOpen,
      title: "Vispārizglītojošais virziens",
      description: "Jauniešiem ar plašu interešu loku, kuri vēlas iegūt stabilu pamatu turpmākajām studijām un karjeras izvēlēm.",
    },
    {
      icon: Beaker,
      title: "Dabaszinātņu virziens",
      description: "Jauniešiem, kuri plāno studēt medicīnu, veterināriju, farmāciju, uzturzinātni vai vēlas izprast cilvēka un dabas procesus.",
    },
    {
      icon: Briefcase,
      title: "Uzņēmējdarbības virziens",
      description: "Jauniešiem, kuri interesējas par ekonomiku, finanšu pratību, uzņēmējdarbību un vēlas veidot savu biznesu.",
    },
    {
      icon: Languages,
      title: "Valodu virziens",
      description: "Jauniešiem, kurus interesē valodas, komunikācija, psiholoģija, žurnālistika vai sociālās zinātnes.",
    },
    {
      icon: Code,
      title: "Matemātikas un IT virziens",
      description: "Jauniešiem, kuri vēlas apgūt programmēšanu vai plāno studēt datorzinātnes un augstāko matemātiku.",
    },
    {
      icon: Calculator,
      title: "Fizikas un matemātikas virziens",
      description: "Jauniešiem, kuri vēlas padziļināti izprast fiziku, apgūt matemātisko domāšanu vai plāno studēt inženierzinātnes.",
    },
  ];

  const basicEducation = [
    {
      icon: Laptop,
      title: "Tālmācība",
      description: "Elastīgs mācību temps, patstāvība, digitāla vide, iespēja mācīties no jebkuras vietas.",
    },
    {
      icon: Users,
      title: "Klātienes mācības",
      description: "Stabila skolas vide, mācības kopā ar skolotāju klasē, skaidrs dienas ritms.",
    },
  ];

  return (
    <section id="programs" className="py-24 lg:py-32 bg-muted/50 relative">
      <div className="absolute inset-0 section-pattern opacity-30" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Mācību programmas</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Izvēlies sev piemērotāko programmu
          </h2>
        </div>

        {/* High School - 10-12 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">Vidējā izglītība</h3>
              <p className="text-muted-foreground">10.–12. klase</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highSchoolPrograms.map((program) => (
              <div
                key={program.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <program.icon className="w-6 h-6 text-orange-dark" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  {program.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Basic Education - 7-9 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">Pamatizglītība</h3>
              <p className="text-muted-foreground">7.–9. klase</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {basicEducation.map((program) => (
              <div
                key={program.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <program.icon className="w-6 h-6 text-green" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  {program.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="group">
            Uzzini vairāk par programmām
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
