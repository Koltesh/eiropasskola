import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Bērziņa",
      role: "Absolvente, 2023",
      content: "ETV deva man iespēju apvienot profesionālo sportu ar mācībām. Tagad studēju augstskolā un esmu pateicīga par šo iespēju.",
      rating: 5,
    },
    {
      name: "Māris Kalniņš",
      role: "12. klases skolēns",
      content: "Elastīgais grafiks ļauj man strādāt un mācīties vienlaicīgi. Skolotāji vienmēr ir pieejami un gatavi palīdzēt.",
      rating: 5,
    },
    {
      name: "Līga Ozoliņa",
      role: "Vecāks",
      content: "Kā vecāks esmu ļoti apmierināta ar ETV piedāvāto izglītības kvalitāti. Mana meita ir motivēta mācīties un sasniedz lieliskus rezultātus.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div 
        className="absolute top-1/2 -left-32 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/4 -right-32 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(var(--teal)) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Atsauksmes</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Ko saka mūsu skolēni un vecāki
          </h2>
          <p className="text-lg text-muted-foreground">
            Simtiem ģimeņu jau ir izvēlējušies ETV. Lūk, ko viņi stāsta par savu pieredzi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold-light rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
