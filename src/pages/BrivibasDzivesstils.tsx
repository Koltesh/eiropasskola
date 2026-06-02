import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import macbookAsset from "@/assets/macbook-neo.png.asset.json";
import iphoneAsset from "@/assets/iphone-17e.png.asset.json";
import airpodsAsset from "@/assets/airpods-4.png.asset.json";
import {
  ArrowRight,
  Briefcase,
  Languages,
  Code,
  Beaker,
  Calculator,
  BookOpen,
  Laptop,
  Smartphone,
  Headphones,
  Users,
  Calendar,
  ShieldCheck,
  UserCheck,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Quote,
  Sparkles,
  MapPin,
  Clock,
  Dumbbell,
  CheckCircle,
  Monitor,
  HeartHandshake,
  PartyPopper,
} from "lucide-react";

const APPLY_URL = "https://eiropasskola.lv/uznemsana#pieteikums";
const RULES_URL = "https://eiropasskola.lv/ETV_Iestajies_un_Laime_Nolikums.pdf";

const programs = [
  { icon: Briefcase, name: "Uzņēmējdarbība", desc: "Ekonomika, finanšu pratība, biznesa pamati" },
  { icon: Languages, name: "Valodas", desc: "Komunikācija, psiholoģija, žurnālistika" },
  { icon: Code, name: "Matemātika un IT", desc: "Programmēšana, datorzinātnes, augstākā matemātika" },
  { icon: Beaker, name: "Dabaszinātnes", desc: "Medicīna, farmācija, bioloģija" },
  { icon: Calculator, name: "Fizika un matemātika", desc: "Inženierzinātnes, fizika, analītiskā domāšana" },
  { icon: BookOpen, name: "Vispārizglītojošais", desc: "Plašs pamats turpmākajām studijām" },
];

const trustStats = [
  { icon: Users, value: "~1000", label: "skolēni gadā" },
  { icon: Calendar, value: "12+", label: "gadu pieredze" },
  { icon: ShieldCheck, value: "Akreditēta", label: "uz maksimālo laiku" },
  { icon: UserCheck, value: "100%", label: "profesionāli pedagogi" },
];

const lifestyleBenefits = [
  {
    icon: MapPin,
    title: "Mācies no jebkuras vietas",
    desc: "Latvijā vai ārzemēs — mācību vide pieejama 24/7 no jebkuras ierīces.",
  },
  {
    icon: Clock,
    title: "Elastīgs grafiks",
    desc: "Pats plāno savu dienu. Apvieno mācības ar sportu, darbu vai hobijiem.",
  },
  {
    icon: Dumbbell,
    title: "Sportistu stipendija",
    desc: "Aktīviem sportistiem pieejams stipendiju fonds 2000 EUR katru semestri.",
  },
];

const prizeValueProps = [
  {
    icon: Laptop,
    month: "Jūnijs",
    prize: "MacBook Neo",
    tagline: "Jauda mācībām no jebkuras vietas",
  },
  {
    icon: Smartphone,
    month: "Jūlijs",
    prize: "iPhone 17e",
    tagline: "Mācību platforma kabatā, vienmēr pa rokai",
  },
  {
    icon: Headphones,
    month: "Augusts",
    prize: "3x AirPods",
    tagline: "Mācies bez trokšņiem — pilnīga koncentrēšanās",
  },
];

const howItWorksSteps = [
  {
    icon: CheckCircle,
    title: "Izvēlies programmu",
    desc: "6 mācību virzieni — no IT un dabaszinātnēm līdz valodām un uzņēmējdarbībai.",
  },
  {
    icon: Monitor,
    title: "Mācies tiešsaistē",
    desc: "Strukturēts grafiks, skolotāju vadībā, ar iespēju mācīties jebkurā laikā.",
  },
  {
    icon: HeartHandshake,
    title: "Saņem atbalstu",
    desc: "Mentori, konsultācijas, karjeras padomi un pat psihologa atbalsts.",
  },
  {
    icon: PartyPopper,
    title: "Satiec draugus klātienē",
    desc: "16+ pasākumi gadā — ekskursijas, nometnes, sporta dienas un kopā būšanas.",
  },
];

const steps = [
  "Piesakies mācībām",
  "Iesniedz dokumentus un noslēdz līgumu",
  "Piedalies mēneša izlozē",
];

const testimonials = [
  {
    quote: "Varu trenēties katru dienu un vienlaikus mācīties. ETV ir mainījusi manu dzīvi.",
    name: "Kārlis",
    meta: "11. klase, Uzņēmējdarbība",
  },
  {
    quote: "Es mācos no Maljorkas šovasar — stundas tiešsaistē, eksāmeni rudenī. Pilnīga brīvība.",
    name: "Ritvars",
    meta: "11. klase, Uzņēmējdarbība",
  },
  {
    quote: "Man ir vieglākais grafiks starp visiem draugiem. Treniņi no plkst. 14, mācības vakarā — un nekas necieš.",
    name: "Paula",
    meta: "10. klase, Valodas",
  },
];

const BrivibasDzivesstils = () => {
  return (
    <div className="min-h-screen bg-[hsl(40_40%_98%)] text-foreground font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, hsl(35 100% 46% / 0.14) 0%, transparent 60%)",
          }}
        />

        <div className="container mx-auto relative z-10 max-w-7xl px-4">
          <div className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center">

            {/* MacBook — top left */}
            <img
              src={macbookAsset.url}
              alt="MacBook — jūnija balva"
              className="hidden md:block absolute -top-4 -left-12 lg:-left-16 xl:-left-20 w-[240px] lg:w-[340px] xl:w-[400px] drop-shadow-2xl rotate-[-6deg] z-0 pointer-events-none select-none"
              loading="eager"
            />

            {/* AirPods — bottom left */}
            <img
              src={airpodsAsset.url}
              alt="AirPods — augusta balva"
              className="hidden md:block absolute -bottom-4 -left-6 lg:left-4 w-[120px] lg:w-[170px] xl:w-[200px] drop-shadow-2xl rotate-[-12deg] z-0 pointer-events-none select-none"
              loading="eager"
            />

            {/* iPhone — right side */}
            <img
              src={iphoneAsset.url}
              alt="iPhone — jūlija balva"
              className="hidden md:block absolute top-2 -right-10 lg:-right-12 xl:-right-16 w-[180px] lg:w-[260px] xl:w-[300px] drop-shadow-2xl rotate-[8deg] z-0 pointer-events-none select-none"
              loading="eager"
            />

            {/* Center text — readable card sitting above products */}
            <div className="relative z-10 max-w-2xl text-center space-y-6 px-6 py-12 md:py-16">
              {/* soft glow backdrop to keep text legible over product imagery */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-[3rem]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, hsl(40 40% 98% / 0.92) 0%, hsl(40 40% 98% / 0.75) 45%, hsl(40 40% 98% / 0) 75%)",
                }}
              />
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                Mācies no <span className="text-primary">jebkuras vietas</span>
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground/80">
                  un laimē tehnoloģijas, kas iet tev līdzi
                </span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
                Elastīgs grafiks. Mācies no kafejnīcas, sporta nometnes vai ārzemēm.
                Piesakies tagad un piedalies vasaras balvu izlozē.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button variant="hero" asChild className="group">
                  <a href={APPLY_URL}>
                    Iegūsti brīvību — piesakies
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="hero-outline" asChild>
                  <a href="#programmas">Uzzināt vairāk</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile-only: product strip below */}
          <div className="md:hidden grid grid-cols-3 gap-2 mt-4 items-end">
            <img src={macbookAsset.url} alt="MacBook" className="w-full h-auto drop-shadow-xl" />
            <img src={iphoneAsset.url} alt="iPhone" className="w-full h-auto drop-shadow-xl" />
            <img src={airpodsAsset.url} alt="AirPods" className="w-full h-auto drop-shadow-xl" />
          </div>

          {/* Prize teaser */}
          <div className="max-w-3xl mx-auto text-center mt-8 lg:mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {prizeValueProps.map((p) => (
                <div
                  key={p.month}
                  className="flex items-center gap-3 bg-card/80 backdrop-blur border border-border rounded-xl px-4 py-3 shadow-soft"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-orange-dark" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">{p.month}</div>
                    <div className="text-sm font-semibold">{p.prize}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Tieši tās tehnoloģijas, kas padara tālmācību vēl ērtāku.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-card/60">
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--navy))]/5 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-[hsl(var(--navy))]" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg leading-tight">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE BENEFITS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Tava dzīve, tavi noteikumi
            </h2>
            <p className="text-muted-foreground">
              Nav jāizvēlas starp mācībām un dzīvi — ETV piedāvā labāko no abām pasaulēm.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {lifestyleBenefits.map((c) => (
              <div
                key={c.title}
                className="relative bg-card rounded-2xl p-8 border border-border shadow-card text-center overflow-hidden"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-[hsl(var(--orange-light))] flex items-center justify-center mb-5 shadow-orange">
                  <c.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS STIPEND HIGHLIGHT */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 lg:py-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 100%, hsl(35 100% 30% / 0.3) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
          <div className="space-y-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full">
              <Dumbbell className="w-4 h-4" />
              <span className="text-sm font-semibold">Sportistiem</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
              Sporto un saņem stipendiju
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl">
              ETV sportistiem pieejams stipendiju fonds <strong>2000 EUR katru semestri</strong>. Mācības iespējams apvienot ar treniņiem, sacensībām un sporta nometnēm, jo laicīgi ir zināms, kas jādara un kādi ir termiņi.
            </p>
            <Button asChild className="group bg-white text-primary hover:bg-white/90">
              <a href="https://eiropasskola.lv/uznemsana#stipendija">
                Uzzināt vairāk par stipendiju
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRIZE DRAW */}
      <section className="py-20 lg:py-28 bg-card/60 border-y border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Balvu izloze</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Laimē tehnoloģijas savai vasarai
            </h2>
            <p className="text-muted-foreground">
              Piesakies ETV un piedalies vasaras balvu izlozē. MacBook, iPhone, AirPods — tieši tas, kas vajadzīgs aktīvam, mobilam studentam.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {prizeValueProps.map((p) => (
              <div
                key={p.month}
                className="relative bg-background rounded-2xl p-8 border border-border shadow-card text-center overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  {p.month}
                </div>
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-[hsl(var(--orange-light))] flex items-center justify-center mb-5 shadow-orange">
                  <p.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="font-display text-2xl font-bold">{p.prize}</div>
                <p className="text-sm text-muted-foreground mt-2">{p.tagline}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div key={s} className="flex items-start gap-3 bg-background rounded-xl p-5 border border-border">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <p className="font-medium pt-1">{s}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-3">
            <Button variant="hero" asChild className="group">
              <a href={APPLY_URL}>
                Piesakies un laimē
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <div>
              <a
                href={RULES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary underline"
              >
                Izlozes noteikumi pieejami šeit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Kā notiek mācības ETV?
            </h2>
            <p className="text-muted-foreground">
              Strukturēta tālmācība ar reālu atbalstu — neesi viens pats.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((s, i) => (
              <div
                key={s.title}
                className="relative bg-card rounded-2xl p-7 border border-border shadow-soft text-center"
              >
                <div className="absolute top-4 left-4 text-xs font-bold text-muted-foreground/40">
                  0{i + 1}
                </div>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[hsl(var(--navy))]/5 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-[hsl(var(--navy))]" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programmas" className="py-20 lg:py-28 bg-card/60 border-y border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Izvēlies virzienu, kas atbilst taviem mērķiem
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.name}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all border border-border/60"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-orange-dark" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-10">
            Nezini, kuru izvēlēties?{" "}
            <a href="#kontakti" className="text-primary font-semibold hover:underline">
              Sazinies ar mums.
            </a>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">Ko saka mūsu skolēni</h2>
            <p className="text-muted-foreground">
              Brīvība nav tikai solījums — skaties, kā citi to jau dzīvo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-7 border border-border shadow-soft flex flex-col"
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground/90 italic flex-1">"{t.quote}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="kontakti" className="py-20 lg:py-28 bg-card/60 border-y border-border">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-6">
          <h2 className="font-display text-3xl lg:text-5xl font-bold">
            Gatavs apvienot mācības ar savu dzīvi?
          </h2>
          <p className="text-lg text-muted-foreground">
            Piesakies mācībām ETV un piedalies vasaras balvu izlozē.
          </p>
          <div className="pt-2">
            <Button variant="hero" size="xl" asChild className="group">
              <a href={APPLY_URL}>
                Piesakies tagad
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 text-muted-foreground">
            <a href="tel:+37125699906" className="inline-flex items-center gap-2 hover:text-primary">
              <Phone className="w-4 h-4" /> 25 699 906
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:etv@eiropasskola.lv" className="inline-flex items-center gap-2 hover:text-primary">
              <Mail className="w-4 h-4" /> etv@eiropasskola.lv
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--navy))] text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-display text-xl font-bold mb-3">ETV</div>
              <p className="text-white/70 text-sm">
                Eiropas Tālmācības vidusskola — akreditēta tālmācības skola ar iespēju mācīties arī klātienē.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-3">Saites</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="https://eiropasskola.lv/par-skolu" className="hover:text-primary">Par skolu</a></li>
                <li><a href="https://eiropasskola.lv/programmas" className="hover:text-primary">Mācību programmas</a></li>
                <li><a href="https://eiropasskola.lv/uznemsana" className="hover:text-primary">Uzņemšana</a></li>
                <li><a href="https://eiropasskola.lv/kontakti" className="hover:text-primary">Kontakti</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Seko mums</div>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/eiropasskola", label: "Facebook" },
                  { Icon: Instagram, href: "https://www.instagram.com/eiropasskola/", label: "Instagram" },
                  { Icon: Youtube, href: "https://www.youtube.com/@eiropasskola/videos", label: "YouTube" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/eiropas-t%C4%81lm%C4%81c%C4%ABbas-vidusskola/", label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 text-sm text-white/60 text-center">
            © 2025 ETV – Eiropas Tālmācības vidusskola
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrivibasDzivesstils;
