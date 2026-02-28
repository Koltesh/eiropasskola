import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import icon from "@/assets/icon.png";

const Footer = () => {
  const studentOpportunities = [
    { label: "Eko skola", href: "#" },
    { label: "Junior Achievement Latvia", href: "#" },
    { label: "Erasmus+", href: "#" },
    { label: "Uzdevumi.lv PROF licences", href: "#" },
    { label: "Microsoft Office licences", href: "#" },
    { label: "Letonika.lv pieeja", href: "#" },
    { label: "Atsauksmes", href: "#" },
    { label: "Sadarbība ar augstskolām", href: "#" },
    { label: "Starptautiskie projekti", href: "#" },
  ];

  const aboutSchool = [
    { label: "Par skolu", href: "/par-skolu" },
    { label: "Mācību programmas", href: "/programmas" },
    { label: "Mācību process", href: "/macibu-process" },
    { label: "Pedagogi", href: "#" },
    { label: "BUJ", href: "#" },
  ];

  const studentSupport = [
    { label: "Karjeras konsultants", href: "#" },
    { label: "Psihologs", href: "#" },
    { label: "Speciālais pedagogs", href: "#" },
    { label: "Sociālais pedagogs", href: "#" },
    { label: "Mentors", href: "#" },
    { label: "Klātienes mācības", href: "#" },
  ];

  const documents = [
    { label: "Rekvizīti", href: "#" },
    { label: "Skolas oficiālie dokumenti", href: "#" },
    { label: "Personas datu apstrādes nosacījumi", href: "#" },
    { label: "Privātuma politika", href: "#" },
    { label: "Uzņemšanas noteikumi", href: "#" },
  ];

  const continuedEducation = [
    { label: "Tālmācības izglītība (eiropascentrs.lv)", href: "https://eiropascentrs.lv" },
    { label: "VIAA", href: "#" },
    { label: "Valodu kursi", href: "#" },
    { label: "Kvalifikācijas kursi", href: "#" },
    { label: "Pedagogu kursi", href: "#" },
  ];

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/eiropasskola", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/eiropasskola/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@eiropasskola/videos", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/eiropas-t%C4%81lm%C4%81c%C4%ABbas-vidusskola/posts/?feedView=all", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-navy text-background/80 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-background/10">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <a href="/" className="flex items-center gap-2">
              <img src={icon} alt="ETV" className="h-10 w-auto" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-sm text-background">EIROPAS TĀLMĀCĪBAS</span>
                <span className="font-display font-bold text-sm text-background">VIDUSSKOLA</span>
              </div>
            </a>
            
            <div className="space-y-3">
              <a href="tel:+37128004224" className="flex items-center gap-3 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <span>28 004 224</span>
              </a>
              <a href="tel:+37125699906" className="flex items-center gap-3 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <span>25 699 906</span>
              </a>
              <a href="mailto:etv@eiropasskola.lv" className="flex items-center gap-3 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                <span>etv@eiropasskola.lv</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Valērijas Seiles iela 1 K-4, 312. telpa, (3.stāvs), Rīga, LV-1019</span>
              </div>
            </div>

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

          {/* Student Opportunities */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Studentu iespējas</h4>
            <ul className="space-y-2 text-sm">
              {studentOpportunities.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About School */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Par skolu</h4>
            <ul className="space-y-2 text-sm">
              {aboutSchool.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Support */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Atbalsts studentiem</h4>
            <ul className="space-y-2 text-sm">
              {studentSupport.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents & Continued Education */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Dokumenti</h4>
            <ul className="space-y-2 text-sm mb-6">
              {documents.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="font-display font-semibold text-background mb-4">Tālākizglītība</h4>
            <ul className="space-y-2 text-sm">
              {continuedEducation.map((link) => (
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
          <p>© {new Date().getFullYear()} ETV – Eiropas Tālmācības Vidusskola. Visas tiesības aizsargātas.</p>
          <p>Akreditēta skola</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
