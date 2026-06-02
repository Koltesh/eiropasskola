import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/iestajies-etv-laime-hero.png.asset.json";
import {
  ArrowRight,
  Briefcase,
  Languages,
  Code,
  Beaker,
  Calculator,
  BookOpen,
  Award,
  GraduationCap,
  Compass,
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
  Wifi,
  Coffee,
  Plane,
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

const freedomCards = [
  {
    icon: MapPin,
    title: "Mācies no jebkuras vietas",
    desc: "No kafejnīcas, laukiem vai ceļojuma — mācības sev ērtā vietā un laikā.",
  },
  {
    icon: Wifi,
    title: "100% elastīgs grafiks",
    desc: "Seko mācību plānam, kad tas tev der. Sports, darbs, vaļasprieki — viss iet kopā.",
  },
  {
    icon: Coffee,
    title: "Dzīvo savu dzīvi",
    desc: "Neatkarīgs no transporta un stundu saraksta. Tu pats plāno savu dienu.",
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

const lifestyleScenes = [
  {
    icon: Coffee,
    title: "Kafejnīcā",
    desc: "Ieraksti stundu ar MacBook, dzer kafiju, mācies savā ritmā.",
  },
  {
    icon: Plane,
    title: "Ceļojumā",
    desc: "Nepalaid garām nevienu nodarbību — ar iPhone mācības ir vienmēr līdzi.",
  },
  {
    icon: Wifi,
    title: "Mājās",
    desc: "Dziļa koncentrēšanās ar AirPods — bez distrakcijām, pilnīga fokusā.",
  },
];

const steps = [
  "Piesakies mācībām",
  "Iesniedz dokumentus un noslēdz līgumu",
  "Piedalies mēneša izlozē",
];

const testimonials = [
  {
    quote: "Es mācos no Maljorkas šovasar — stundas tiešsaistē, eksāmeni rudenī. ETV ir pilnīga brīvība.",
    name: "Ritvars",
    meta: "11. klase, Uzņēmējdarbība",
  },
  {
    quote: "Man ir vieglākais grafiks starp visiem draugiem. Treniņi no plkst. 14, mācības vakarā — un nekas necieš.",
    name: "Paula",
    meta: "10. klase, Valodas",
  },
  {
    quote: "Nevaru iedomāties sevi citur. ETV man dod laiku darboties ar savu mūzikas projektu un saglabāt labas atzīmes.",
    name: "Edgars",
    meta: "12. klase, IT virziens",
  },
];

const BrivibasDzivesstils = () => {
  return (
    <div className="min-h-screen bg-[hsl(40_40%_98%)] text-foreground font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, hsl(35 100% 46% / 0.12) 0%, transparent 55%)",
          }}
        />
        <div className="container mx-auto relative z-10 max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Vasaras kampaņa 2025</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Mācies no jebkuras vietas —{" "}
              <span className="text-primary">un laimē tehnoloģijas, kas iet kopā ar tavu dzīvesveidu</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Piesakies ETV, kur mācīties var no kafejnīcas, sporta nometnes vai ārzemēm — un laimē tehnoloģijas, kas to padara vēl vienkāršāku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button variant="hero" asChild className="group">
                <a href={APPLY_URL}>
                  Iegūsti brīvību — piesakies un laimē
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="hero-outline" asChild>
                <a href="#programmas">Uzzināt vairāk</a>
              </Button>
            </div>
          </div>

          {/* Campaign visual */}
          <div className="mt-12 max-w-5xl mx-auto">
            <img
              src={heroAsset.url}
              alt="Iestājies ETV un laimē visu vasaru — MacBook, iPhone, AirPods balvas"
              className="w-full h-auto rounded-2xl shadow-card"
              loading="eager"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            {/* Prize teaser */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-10 max-w-2xl mx-auto">
              {prizeValueProps.map((p) => (
                <div
                  key={p.month}
                  className="flex items-center gap-3 bg-card/70 backdrop-blur border border-border rounded-xl px-4 py-3 shadow-soft"
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

      {/* FREEDOM & LIFESTYLE — WHY THIS MATTERS */}
      <section className="py-20 lg:py-28 bg-card/60 border-y border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Skola, kas pielāgojas tavam dzīvesveidam
            </h2>
            <p className="text-muted-foreground mt-3">
              Nevajag izvēlēties starp mācībām un dzīvi — ETV dod tev abu pasaulju labāko.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {freedomCards.map((c) => (
              <div
                key={c.title}
                className="bg-background rounded-2xl p-7 border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--green))]/10 flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-[hsl(var(--green))]" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE SCENES */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Mācības, kas iet kopā ar tavu ikdienu
            </h2>
            <p className="text-muted-foreground">
              Iedomājies: mācībām nav jānotiek klasē. Tās notiek, kur tu esi.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {lifestyleScenes.map((s) => (
              <div
                key={s.title}
                className="relative bg-card rounded-2xl p-8 border border-border shadow-card text-center overflow-hidden"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-[hsl(var(--orange-light))] flex items-center justify-center mb-5 shadow-orange">
                  <s.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
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

      {/* PRIZE DRAW — WITH LIFESTYLE ANGLE */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Balvu izloze</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Tehnoloģijas, kas padara brīvību reālu
            </h2>
            <p className="text-muted-foreground">
              Katru vasaras mēnesi izlozējam vienu balvu starp jaunajiem ETV skolēniem. Šīs tehnoloģijas nav tikai balvas — tās ir tavas jaunās mācību un dzīves rīks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {prizeValueProps.map((p) => (
              <div
                key={p.month}
                className="relative bg-card rounded-2xl p-8 border border-border shadow-card text-center overflow-hidden"
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
              <div key={s} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border">
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
                Piesakies un piedalies izlozē
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

      {/* TESTIMONIALS — LIFESTYLE FOCUSED */}
      <section className="py-20 lg:py-28 bg-card/60 border-y border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">Ko saka mūsu skolēni</h2>
            <p className="text-muted-foreground mt-3">
              Brīvība nav tikai solījums — skaties, kā citi to jau dzīvo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-background rounded-2xl p-7 border border-border shadow-soft flex flex-col"
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
      <section id="kontakti" className="py-20 lg:py-28">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-6">
          <h2 className="font-display text-3xl lg:text-5xl font-bold">
            Gatavs dzīvot brīvāk?
          </h2>
          <p className="text-lg text-muted-foreground">
            Piesakies mācībām vai sazinies ar mums — atbildēsim uz jautājumiem un ieteiksim piemērotāko programmu.
          </p>
          <div className="pt-2">
            <Button variant="hero" size="xl" asChild className="group">
              <a href={APPLY_URL}>
                Iegūsti brīvību — piesakies un laimē
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
