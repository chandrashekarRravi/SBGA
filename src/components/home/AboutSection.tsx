import { Shield, Eye, TrendingUp, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("about.security"),
      description: t("about.securityDesc"),
    },
    {
      icon: Eye,
      title: t("about.transparency"),
      description: t("about.transparencyDesc"),
    },
    {
      icon: TrendingUp,
      title: t("about.growth"),
      description: t("about.growthDesc"),
    },
    {
      icon: Heart,
      title: t("about.community"),
      description: t("about.communityDesc"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        {/* Top Row: Text + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("about.badge")}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
              {t("about.title1")} <span className="text-gradient-gold">{t("about.titleHighlight")}</span> {t("about.title2")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
          </div>

          {/* About Image Collage */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                alt="Community meeting"
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
              <img
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=400&h=200&fit=crop"
                alt="Rural community"
                className="rounded-xl shadow-lg object-cover w-full h-32"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=200&fit=crop"
                alt="Teamwork"
                className="rounded-xl shadow-lg object-cover w-full h-32"
              />
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=300&fit=crop"
                alt="Financial growth"
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
            </div>
            {/* Decorative overlay badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-navy text-primary-foreground px-6 py-4 rounded-xl shadow-xl text-center z-10">
              <div className="font-display text-2xl font-bold text-gold">29+</div>
              <div className="text-sm text-primary-foreground/80">{t("about.yearsServing") || "Years Serving"}</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-gold/30 transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-navy mb-4">
                <value.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
