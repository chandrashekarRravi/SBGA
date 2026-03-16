import { Link } from "react-router-dom";
import { Shield, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent, path: string) => {
    const [page, hash] = path.split("#");
    if (hash && (page === "" || page === "/" || window.location.pathname === page)) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const footerLinks = {
    services: [
      { name: t("services.ruralLoans"), path: "/services/rural-loans" },
      { name: t("services.microfinance"), path: "/services/microfinance" },
      { name: t("footer.constructionSupport"), path: "/services/construction-support" },
      { name: t("footer.pigmyCollection"), path: "/services/pigmy-collection" },
    ],
    company: [
      { name: t("footer.aboutUs"), path: "/#about" },
      { name: t("footer.contactUs"), path: "/contact" },
    ],
    legal: [
      { name: t("footer.privacyPolicy"), path: "/privacy" },
      { name: t("footer.terms"), path: "/terms" },
      { name: t("footer.grievance"), path: "/grievance" },
    ],
  };

  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 border border-gold/30">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold leading-tight">
                  Sri Basaveshwara
                </h2>
                <p className="text-xs text-primary-foreground/70">
                  Graminabhirudhi Trust (R.)
                </p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  123 Main Street, Rural District,
                  <br />
                  Karnataka, India - 560001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  +91 1234 567 890
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  info@sbgatrust.org
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Mon - Sat: 9:00 AM - 5:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold">
              {t("footer.ourServices")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleScrollTo(e, link.path)}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleScrollTo(e, link.path)}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleScrollTo(e, link.path)}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Sri Basaveshwara Graminabhirudhi
              Trust (R.). {t("footer.rights")}
            </p>
            <p className="text-xs text-primary-foreground/40">
              {t("footer.registered")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
