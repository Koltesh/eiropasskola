import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Calendar } from "lucide-react";

const BlogsPage = () => {
  const posts = [
    {
      date: "2024-01-12",
      title: "Kā organizēt mācību laiku tālmācībā",
      excerpt: "Padomi, kā efektīvi plānot savu laiku un sasniegt labākus rezultātus mācībās.",
      category: "Padomi",
    },
    {
      date: "2024-01-08",
      title: "Kāpēc izvēlēties tālmācību?",
      excerpt: "Uzzini galvenos ieguvumus, kāpēc arvien vairāk jauniešu izvēlas mācīties tālmācībā.",
      category: "Izglītība",
    },
    {
      date: "2024-01-03",
      title: "Sagatavošanās eksāmeniem: 5 soļi",
      excerpt: "Praktiski padomi, kā sagatavoties valsts pārbaudījumiem un sasniegt augstus rezultātus.",
      category: "Eksāmeni",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto text-center max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Blogs</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Raksti un padomi
            </h1>
            <p className="text-xl text-muted-foreground">
              Noderīgi raksti par izglītību, mācību procesu un karjeras iespējām.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {posts.map((post) => (
                <article key={post.title} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-green/10 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <time>{new Date(post.date).toLocaleDateString('lv-LV')}</time>
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground">Vairāk rakstu drīzumā...</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
