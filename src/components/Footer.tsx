import { GraduationCap, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const links = {
    mācības: [
      { label: "7.–9. klase", href: "#" },
      { label: "10.–12. klase", href: "#" },
      { label: "Mācību materiāli", href: "#" },
      { label: "E-skola", href: "#" },
    ],
    informācija: [
      { label: "Par mums", href: "#about" },
      { label: "Mācību maksa", href: "#pricing" },
      { label: "Bieži jautājumi", href: "#" },
      { label: "Kontakti", href: "#contact" },
    ],
    juridiskā: [
      { label: "Privātuma politika", href: "#" },
      { label: "Lietošanas noteikumi", href: "#" },
      { label: "Akreditācija", href: "#" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate text-background/80 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-background/10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-gold">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-background">ETV</span>
            </a>
            <p className="text-background/60 max-w-sm">
              ETV ir akreditēta Latvijas tālmācības skola, kas piedāvā kvalitatīvu izglītību 7.–12. klasei.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Mācības</h4>
            <ul className="space-y-3">
              {links.mācības.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Informācija</h4>
            <ul className="space-y-3">
              {links.informācija.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Juridiskā info</h4>
            <ul className="space-y-3">
              {links.juridiskā.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} ETV – Tālmācības vidusskola. Visas tiesības aizsargātas.</p>
          <p>Akreditēta līdz 2028. gadam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
