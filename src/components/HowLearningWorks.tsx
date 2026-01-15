import { Button } from "@/components/ui/button";
import { ArrowRight, Video, MessageCircle, Clock, Monitor, CheckSquare } from "lucide-react";

const HowLearningWorks = () => {
  const features = [
    {
      icon: Video,
      text: "Tiešsaistes nodarbības un patstāvīgie darbi",
    },
    {
      icon: MessageCircle,
      text: "Konsultācijas un iespēja uzdot jautājumus skolotājiem",
    },
    {
      icon: Clock,
      text: "Individuāls mācību temps atbilstoši skolēna ikdienai",
    },
    {
      icon: Monitor,
      text: "Mūsdienīga e-vide ar pārskatāmiem uzdevumiem un termiņiem",
    },
    {
      icon: CheckSquare,
      text: "Regulāri pašpārbaudes darbi regulāram progresam",
    },
  ];

  return (
    <section id="learning" className="py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Mācību process</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                Kā notiek mācības ETV?
              </h2>
              <p className="text-lg text-muted-foreground">
                Mācības tālmācībā ar strukturētu grafiku un skolotāju iesaisti. ETV mācību process ir veidots tā, lai skolēni varētu mācīties elastīgi, bet strukturēti.
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-green" />
                  </div>
                  <span className="text-foreground text-lg pt-1.5">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="group">
              Uzzini vairāk par mācībām
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="bg-card rounded-3xl p-8 shadow-elevated">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green/10 rounded-2xl flex items-center justify-center">
                    <Monitor className="w-7 h-7 text-green" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-foreground">E-mācību vide</div>
                    <div className="text-sm text-muted-foreground">Pieejama 24/7</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-green to-green-light rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Kursa progress</span>
                    <span className="font-semibold text-foreground">75%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-2xl font-display font-bold text-foreground">24</div>
                    <div className="text-sm text-muted-foreground">uzdevumi</div>
                  </div>
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-2xl font-display font-bold text-foreground">3</div>
                    <div className="text-sm text-muted-foreground">konsultācijas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowLearningWorks;
