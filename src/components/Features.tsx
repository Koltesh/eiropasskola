import { Monitor, Calendar, MessageSquare, FileText, Globe, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "E-mācību platforma",
      description: "Mūsdienīga tiešsaistes platforma ar interaktīviem mācību materiāliem un video lekcijām.",
    },
    {
      icon: Calendar,
      title: "Elastīgs grafiks",
      description: "Mācies savā tempā un laikā, kas der tavam dzīvesveidam un aktivitātēm.",
    },
    {
      icon: MessageSquare,
      title: "Tiešsaistes konsultācijas",
      description: "Regulāras konsultācijas ar skolotājiem video formātā vai čatā.",
    },
    {
      icon: FileText,
      title: "Digitālie materiāli",
      description: "Visi mācību materiāli pieejami digitāli – grāmatas, uzdevumi, testi.",
    },
    {
      icon: Globe,
      title: "Mācies no jebkuras vietas",
      description: "Pieejams no jebkuras vietas pasaulē ar interneta pieslēgumu.",
    },
    {
      icon: Shield,
      title: "Akreditēta izglītība",
      description: "Valsts atzīts diploms, kas nodrošina tālākas izglītības iespējas.",
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
            Moderna izglītība digitālajā laikmetā
          </h2>
          <p className="text-lg text-muted-foreground">
            ETV apvieno tradicionālo izglītības kvalitāti ar mūsdienu tehnoloģijām.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-orange-dark" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
