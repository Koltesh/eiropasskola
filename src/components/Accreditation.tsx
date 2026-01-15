import { Award, GraduationCap, Globe, FileCheck } from "lucide-react";

const Accreditation = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Latvijas augstskolas",
      description: "Iestājies visās Latvijas augstskolās, arī pretendē uz budžeta vietām.",
    },
    {
      icon: Globe,
      title: "Ārvalstu universitātes",
      description: "Studē ārvalstu universitātēs visā pasaulē ar ETV atestātu.",
    },
    {
      icon: FileCheck,
      title: "Dokumentu sagatavošana",
      description: "Administrācija palīdz sagatavot nepieciešamos dokumentus studijām ārzemēs.",
    },
  ];

  return (
    <section id="accreditation" className="py-24 lg:py-32 bg-muted/50 relative">
      <div className="absolute inset-0 section-pattern opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Akreditācija</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Akreditēta skola ar plašām nākotnes iespējām
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ETV atestāts ļauj turpināt izglītību jebkurā izvēlētajā virzienā.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-green/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-green" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
