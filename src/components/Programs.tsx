import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, Clock, Users, CheckCircle } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "7.–9. klase",
      subtitle: "Pamatizglītība",
      description: "Iegūsti pamatizglītības apliecību ar elastīgu mācību grafiku, kas piemērots tavam dzīvesveidam.",
      features: [
        "Visi obligātie priekšmeti",
        "Individuāls mācību temps",
        "Regulāras konsultācijas",
        "E-mācību materiāli",
      ],
      price: "€65",
      color: "green",
    },
    {
      icon: GraduationCap,
      title: "10.–12. klase",
      subtitle: "Vidējā izglītība",
      description: "Sasniedz savus mērķus un iegūsti vidējās izglītības atestātu, kas atvērs durvis uz augstskolu.",
      features: [
        "Vispārējā virziena programma",
        "Sagatavošana eksāmeniem",
        "Karjeras konsultācijas",
        "Augstskolu ieteikumi",
      ],
      price: "€55",
      color: "orange",
      popular: true,
    },
  ];

  return (
    <section id="programs" className="py-24 lg:py-32 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Mācību programmas</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Izvēlies sev piemērotāko programmu
          </h2>
          <p className="text-lg text-muted-foreground">
            Piedāvājam akreditētas izglītības programmas ar iespēju mācīties savā tempā un no jebkuras vietas.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`relative bg-card rounded-3xl p-8 transition-all duration-300 hover:shadow-elevated ${
                program.popular ? 'ring-2 ring-primary shadow-orange' : 'shadow-card'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-orange">
                  Populārākā izvēle
                </div>
              )}

              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      program.color === 'orange' ? 'bg-primary/10' : 'bg-green/10'
                    }`}>
                      <program.icon className={`w-7 h-7 ${
                        program.color === 'orange' ? 'text-orange-dark' : 'text-green'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">{program.title}</h3>
                      <p className="text-muted-foreground">{program.subtitle}</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">{program.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                        program.color === 'orange' ? 'text-orange-dark' : 'text-green'
                      }`} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="font-display text-4xl font-bold text-foreground">{program.price}</span>
                      <span className="text-muted-foreground ml-1">/mēnesī</span>
                    </div>
                  </div>
                  <Button 
                    variant={program.popular ? "default" : "outline"} 
                    className="w-full group"
                  >
                    Uzzināt vairāk
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">Elastīgs grafiks</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">Individuāla pieeja</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">30 dienu garantija</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
