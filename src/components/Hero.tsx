import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, value: "2,500+", label: "absolventi" },
    { icon: BookOpen, value: "500+", label: "mācību materiāli" },
    { icon: Award, value: "Akreditēta", label: "līdz 2028" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 section-pattern opacity-50" />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 20%, hsl(35 100% 46% / 0.08) 0%, transparent 50%)'
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">Akreditēta tālmācības skola</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Mācies ETV un <span className="gradient-text">sasniedz vairāk</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                Mūsdienīga un kvalitatīva tālmācības skola ar iespēju satikties klātienē.
              </p>
              <p className="text-lg font-display font-semibold text-foreground">
                Vairāk elastības. Vairāk iespēju. Vairāk panākumu.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="group">
                Pieteikties mācībām
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline">
                Uzzināt vairāk
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-3xl p-8 shadow-elevated animate-float">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-orange">
                      <BookOpen className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-foreground">Tālmācība</div>
                      <div className="text-sm text-muted-foreground">7.–12. klase</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-green to-green-light rounded-full" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Mācību progress</span>
                      <span className="font-semibold text-foreground">80%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-xl p-4">
                      <div className="text-2xl font-display font-bold text-foreground">12</div>
                      <div className="text-sm text-muted-foreground">priekšmeti</div>
                    </div>
                    <div className="bg-muted rounded-xl p-4">
                      <div className="text-2xl font-display font-bold text-foreground">A</div>
                      <div className="text-sm text-muted-foreground">vidējais vērtējums</div>
                    </div>
                  </div>

                  {/* Students indicator */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-green border-2 border-card" />
                      <div className="w-8 h-8 rounded-full bg-orange border-2 border-card" />
                      <div className="w-8 h-8 rounded-full bg-navy border-2 border-card" />
                    </div>
                    <span className="text-sm font-medium text-foreground">+1500 skolēni</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-orange animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold text-sm">Akreditēta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
