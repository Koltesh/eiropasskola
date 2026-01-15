import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Award, GraduationCap, Wallet, UserCheck } from "lucide-react";

const WhyETV = () => {
  const stats = [
    {
      icon: Calendar,
      value: "12+",
      label: "gadu pieredze tālmācībā",
    },
    {
      icon: GraduationCap,
      value: "6",
      label: "mācību programmas vidusskolai",
    },
    {
      icon: Users,
      value: "16+",
      label: "klātienes pasākumi katru gadu",
    },
    {
      icon: Wallet,
      value: "2000€",
      label: "stipendiju fonds sportistiem",
    },
    {
      icon: Award,
      value: "~1000",
      label: "skolēnu katru gadu",
    },
    {
      icon: UserCheck,
      value: "30+",
      label: "profesionāli skolotāji",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/50 relative">
      <div className="absolute inset-0 section-pattern opacity-30" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
            <span className="text-sm font-medium">Kāpēc ETV?</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Kāpēc izvēlēties ETV?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-orange-dark" />
              </div>
              <div className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" className="group">
            Uzzini vairāk par skolu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyETV;
