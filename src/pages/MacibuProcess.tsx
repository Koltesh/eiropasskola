import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, MessageCircle, Clock, Monitor, CheckSquare, FileText, Users } from "lucide-react";

const MacibuProcessPage = () => {
  const steps = [
    {
      number: "01",
      title: "Reģistrācija un piekļuve",
      description: "Pēc reģistrācijas saņem piekļuvi e-mācību videi ar visiem materiāliem un uzdevumiem.",
    },
    {
      number: "02",
      title: "Mācību materiālu apguve",
      description: "Mācies savā tempā, izmantojot video lekcijas, digitālos materiālus un interaktīvos uzdevumus.",
    },
    {
      number: "03",
      title: "Uzdevumu izpilde",
      description: "Izpildi uzdevumus un iesniedz tos novērtēšanai atbilstoši noteiktajiem termiņiem.",
    },
    {
      number: "04",
      title: "Konsultācijas ar skolotājiem",
      description: "Piedalies tiešsaistes konsultācijās vai uzdod jautājumus skolotājiem e-vidē.",
    },
    {
      number: "05",
      title: "Pašpārbaudes un eksāmeni",
      description: "Regulāri pārbaudi savas zināšanas ar testiem un gatavojies noslēguma eksāmeniem.",
    },
  ];

  const features = [
    {
      icon: Video,
      title: "Tiešsaistes nodarbības",
      description: "Video lekcijas un tiešsaistes konsultācijas ar skolotājiem.",
    },
    {
      icon: MessageCircle,
      title: "Atbalsts 24/7",
      description: "Uzdod jautājumus skolotājiem jebkurā laikā.",
    },
    {
      icon: Clock,
      title: "Elastīgs temps",
      description: "Mācies savā ritmā atbilstoši savai ikdienai.",
    },
    {
      icon: Monitor,
      title: "Moderna e-vide",
      description: "Pārskatāmi uzdevumi, termiņi un progress.",
    },
    {
      icon: CheckSquare,
      title: "Regulāras pārbaudes",
      description: "Pašpārbaudes darbi progresa sekošanai.",
    },
    {
      icon: FileText,
      title: "Digitāli materiāli",
      description: "Visi mācību materiāli pieejami digitāli.",
    },
  ];

  const support = [
    { title: "Karjeras konsultants", description: "Palīdz ar nākotnes plānošanu un studiju izvēli." },
    { title: "Psihologs", description: "Atbalsts emocionālās labsajūtas jautājumos." },
    { title: "Speciālais pedagogs", description: "Individuāls atbalsts mācību procesā." },
    { title: "Sociālais pedagogs", description: "Palīdzība sociālos un ģimenes jautājumos." },
    { title: "Mentors", description: "Personīgs atbalsts un motivācija." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto text-center max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Mācību process</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Kā notiek mācības ETV?
            </h1>
            <p className="text-xl text-muted-foreground">
              Mācības tālmācībā ar strukturētu grafiku un skolotāju iesaisti. Elastīgi, bet strukturēti.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              Mācību process pa soļiem
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
              Mācību iespējas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full mb-4">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Atbalsts mācībās</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Mēs esam blakus
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {support.map((item) => (
                <div key={item.title} className="bg-card rounded-2xl p-6 shadow-soft">
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto text-center max-w-2xl space-y-6">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Gatavs sākt mācības?
            </h2>
            <p className="text-lg text-muted-foreground">
              Piesakies jau šodien un sāc savu ceļu ETV.
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

export default MacibuProcessPage;
