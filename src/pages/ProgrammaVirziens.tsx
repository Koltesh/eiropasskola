import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BookOpen, 
  Beaker, 
  Briefcase, 
  Languages, 
  Code, 
  Calculator,
  CheckCircle,
  Clock,
  Users,
  Monitor,
  Calendar,
  GraduationCap,
  FileText,
  MapPin
} from "lucide-react";

const programsData = {
  "visparizglitojosais": {
    title: "Vispārizglītojošais virziens",
    subtitle: "10.–12. klase",
    icon: BookOpen,
    description: "Jauniešiem ar plašu interešu loku, kuri vēlas iegūt stabilu pamatu turpmākajām studijām un karjeras izvēlēm.",
    heroText: "Ja neesi pārliecināts par turpmākajām studiju gaitām vai karjeras virzienu, šis priekšmetu grozs nodrošina standarta priekšmetu apgūšanu.",
    programCode: "31016014",
    licenseId: "Nr. V-2950",
    language: "Latviešu",
    tuition: {
      grades10_11: "75 EUR/mēnesī",
      grade12: "85 EUR/mēnesī",
      months10_11: "9 mācību mēneši",
      months12: "10 mācību mēneši",
      registration: "30.00 EUR"
    },
    requirements: "Pamatizglītības apliecība",
    programName: "Vispārējās vidējās izglītības programma",
    features: [
      "Mācās skolas īpaši veidotā elektroniskajā mācību eVidē",
      "Mācās tikai dažus mācību priekšmetus mēnesī",
      "Atbilstoši apgūtajiem mācību priekšmetiem nokārto divus līdz trīs pārbaudes darbus katrā priekšmetā",
      "Ieskaites kārtošana ir iespējama jebkurā vietā un diennakts laikā!"
    ],
    benefits: [
      {
        icon: Monitor,
        title: "Moderna mācību vide",
        description: "Īpaši veidota elektroniskā mācību platforma eVide"
      },
      {
        icon: Calendar,
        title: "Elastīgs grafiks",
        description: "Mācies savā tempā un laikā, kas Tev ir ērts"
      },
      {
        icon: Users,
        title: "Mūsdienīgi pasniedzēji",
        description: "Pieredzējuši skolotāji ar modernu pieeju"
      },
      {
        icon: MapPin,
        title: "Klātienes aktivitātes",
        description: "Iespēja piedalīties klātienes pasākumos"
      }
    ],
    highlights: [
      {
        icon: BookOpen,
        text: "Standarta priekšmetu apguve bez liekas slodzes"
      },
      {
        icon: CheckCircle,
        text: "Pamatkursu un padziļināto kursu apguvē iekļauts viss nepieciešamais"
      },
      {
        icon: GraduationCap,
        text: "Sagatavošanas kursi centralizētajiem eksāmeniem"
      }
    ],
    studentRequirements: [
      "Izvēlas vienu B1 valodu apguvei no skolā piedāvātajām",
      "Apgūst 3 padziļinātos kursus 12. klasē. Divos no šiem kursiem kārto Centralizēto eksāmenu",
      "Var papildus izvēlēties Digitālo dizainu. Projekta darbs ir obligāts kurss visiem."
    ],
    applicationSteps: [
      { step: 1, title: "Izvēlies mācību virzienu" },
      { step: 2, title: "Aizpildi pieteikuma formu" },
      { step: 3, title: "Saņem e-pastā informāciju vai gaidi zvanu" },
      { step: 4, title: "Aizpildi/atsūti nepieciešamos dokumentus" },
      { step: 5, title: "Uzsāc mācības!" }
    ],
    relatedPrograms: [
      { slug: "dabaszinatnu", title: "Dabaszinātņu virziens" },
      { slug: "uznemejdarbibas", title: "Uzņēmējdarbības virziens" },
      { slug: "valodu", title: "Valodu virziens" }
    ]
  }
};

const ProgrammaVirziens = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const program = slug ? programsData[slug as keyof typeof programsData] : null;
  
  if (!program) {
    return <Navigate to="/programmas" replace />;
  }

  const IconComponent = program.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary/5 via-background to-green/5 relative overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-20" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Sākums</Link>
              <span>/</span>
              <Link to="/programmas" className="hover:text-primary transition-colors">Programmas</Link>
              <span>/</span>
              <span className="text-foreground">{program.title}</span>
            </div>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-2">
                  {program.title}
                </h1>
                <p className="text-xl text-muted-foreground">{program.subtitle}</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {program.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/uznemsana">
                  Pieteikties mācībām
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/kontakti">
                  Pieteikties konsultācijai
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-soft border">
              <div className="text-sm text-muted-foreground mb-2">Izglītības programma</div>
              <div className="font-semibold text-foreground">{program.programName}</div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft border">
              <div className="text-sm text-muted-foreground mb-2">Programmas kods</div>
              <div className="font-semibold text-foreground">{program.programCode}</div>
              <div className="text-xs text-muted-foreground mt-1">Licencēšanas ID: {program.licenseId}</div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft border">
              <div className="text-sm text-muted-foreground mb-2">Mācību valoda</div>
              <div className="font-semibold text-foreground">{program.language}</div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft border">
              <div className="text-sm text-muted-foreground mb-2">Prasības</div>
              <div className="font-semibold text-foreground">{program.requirements}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Mācību maksa
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft border text-center">
                <div className="text-sm text-muted-foreground mb-2">10.–11. klase</div>
                <div className="text-3xl font-bold text-primary mb-2">{program.tuition.grades10_11}</div>
                <div className="text-sm text-muted-foreground">{program.tuition.months10_11}</div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-soft border text-center">
                <div className="text-sm text-muted-foreground mb-2">12. klase</div>
                <div className="text-3xl font-bold text-primary mb-2">{program.tuition.grade12}</div>
                <div className="text-sm text-muted-foreground">{program.tuition.months12}</div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-xl p-4 text-center">
              <span className="text-sm text-muted-foreground">Reģistrācijas maksa: </span>
              <span className="font-semibold text-foreground">{program.tuition.registration}</span>
              <span className="text-sm text-muted-foreground"> (vienreizējs maksājums)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-12 text-center">
              Mācību priekšrocības
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {program.benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Feature List */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Kā notiek mācības?</h3>
              <div className="space-y-4">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-soft border">
              <p className="text-lg text-muted-foreground mb-8 text-center italic">
                "{program.heroText}"
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {program.highlights.map((highlight, index) => (
                  <div key={index} className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-green" />
                    </div>
                    <span className="text-sm text-foreground">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Requirements */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Izglītojamā pienākumi
            </h2>

            <div className="space-y-4">
              {program.studentRequirements.map((req, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft border flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-12 text-center">
              Pieteikšanās process
            </h2>

            <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-12">
              {program.applicationSteps.map((step, index) => (
                <div key={step.step} className="flex-1 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold">{step.step}</span>
                  </div>
                  <p className="text-sm text-foreground font-medium">{step.title}</p>
                  {index < program.applicationSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground mt-4 hidden md:block rotate-0 md:absolute md:right-0" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="group" asChild>
                <Link to="/uznemsana">
                  Pieteikties tagad
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Citi virzieni
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {program.relatedPrograms.map((related) => (
                <Link
                  key={related.slug}
                  to={`/programma/${related.slug}`}
                  className="bg-card rounded-2xl p-6 shadow-soft border hover:shadow-card transition-all duration-300 group text-center"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary mt-2">
                    Uzzināt vairāk
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgrammaVirziens;
