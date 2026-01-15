import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, PartyPopper, Heart, Users } from "lucide-react";

const Events = () => {
  const activities = [
    {
      icon: MapPin,
      text: "Ekskursijas katru semestri",
    },
    {
      icon: PartyPopper,
      text: "Balles, iesvētības, filmu un PlayStation vakari",
    },
    {
      icon: Heart,
      text: "Labo darbu akcijas un sadarbības projekti",
    },
    {
      icon: Users,
      text: "Studentu padome, kas organizē pasākumus un pārstāv skolēnu balsi",
    },
  ];

  return (
    <section id="events" className="py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary/10 to-green/10 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="text-3xl font-display font-bold text-foreground mb-1">16+</div>
                  <div className="text-sm text-muted-foreground">pasākumi gadā</div>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="text-3xl font-display font-bold text-foreground mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">iesaiste</div>
                </div>
                <div className="col-span-2 bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-dark" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground">Studentu padome</div>
                      <div className="text-sm text-muted-foreground">Aktīva kopiena</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Klātienes pasākumi</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                Tālmācība ar klātienes pasākumiem un īstu "skolas garšu"
              </h2>
              <p className="text-lg text-muted-foreground">
                ETV ir aizraujoša skolas dzīve. Mēs radām vidi, kur skolēni jūtas droši, iesaistīti un motivēti.
              </p>
            </div>

            {/* Activities List */}
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-5 h-5 text-orange-dark" />
                  </div>
                  <span className="text-foreground text-lg pt-1.5">{activity.text}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="group">
              Uzzini vairāk par aktivitātēm
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
