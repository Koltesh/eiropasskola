import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="bg-navy rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />
          
          {/* Gradient Orbs */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)' }}
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            {/* Content */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-background leading-tight">
                Esi gatavs sasniegt vairāk?
              </h2>
              <p className="text-lg text-background/80 max-w-2xl mx-auto">
                Piesakies mācībām vai sazinies ar mums — atbildēsim uz jautājumiem un ieteiksim piemērotāko mācību programmu.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                className="group bg-primary text-primary-foreground"
              >
                Pieteikties mācībām
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <a 
                href="tel:+37128004224" 
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-background/60">Zvani mums</div>
                  <div className="font-medium">28 004 224</div>
                </div>
              </a>
              
              <a 
                href="mailto:etv@eiropasskola.lv" 
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-background/60">Raksti mums</div>
                  <div className="font-medium">etv@eiropasskola.lv</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
