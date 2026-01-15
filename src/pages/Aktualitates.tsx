import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const AktualitatesPage = () => {
  const news = [
    {
      date: "2024-01-15",
      title: "Jauns mācību semestris sākas!",
      excerpt: "Aicinām visus skolēnus uzsākt jauno semestri ar jauniem mērķiem un motivāciju.",
    },
    {
      date: "2024-01-10",
      title: "Pieteikšanās jaunam mācību gadam",
      excerpt: "Ir atvērta pieteikšanās 2024./2025. mācību gadam. Piesakies laicīgi!",
    },
    {
      date: "2024-01-05",
      title: "Ziemas ekskursija uz Siguldu",
      excerpt: "Aicinām visus skolēnus piedalīties ziemas ekskursijā uz Siguldu.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto text-center max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-orange-dark px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Aktualitātes</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Jaunumi un notikumi
            </h1>
            <p className="text-xl text-muted-foreground">
              Sekojiet līdzi ETV jaunākajām aktualitātēm un notikumiem.
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {news.map((item) => (
                <article key={item.title} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="h-48 bg-muted" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <time>{new Date(item.date).toLocaleDateString('lv-LV')}</time>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground">Vairāk aktualitāšu drīzumā...</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AktualitatesPage;
