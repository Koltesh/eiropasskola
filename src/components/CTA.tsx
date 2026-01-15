import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="bg-slate rounded-3xl p-8 lg:p-16 relative overflow-hidden">
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

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-background leading-tight">
                Gatavs sākt savu ceļojumu ar ETV?
              </h2>
              <p className="text-lg text-background/80 max-w-lg">
                Piesakies jau šodien un sāc mācīties savā tempā. Piedāvājam 30 dienu naudas atgriešanas garantiju.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  className="group bg-primary text-primary-foreground"
                >
                  Pieteikties tagad
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-background/30 text-background hover:bg-background hover:text-slate"
                >
                  Uzdot jautājumu
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-background/10 backdrop-blur rounded-2xl p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-background">Sazinies ar mums</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:info@etv.lv" 
                    className="flex items-center gap-4 text-background/80 hover:text-background transition-colors group"
                  >
                    <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center group-hover:bg-background/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-background/60">E-pasts</div>
                      <div className="font-medium">info@etv.lv</div>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+37120000000" 
                    className="flex items-center gap-4 text-background/80 hover:text-background transition-colors group"
                  >
                    <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center group-hover:bg-background/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-background/60">Telefons</div>
                      <div className="font-medium">+371 2000 0000</div>
                    </div>
                  </a>
                </div>
              </div>

              <p className="text-sm text-background/60">
                Darba laiks: P–Pk 9:00–17:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
