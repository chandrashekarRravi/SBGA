import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Landmark, HandCoins, Home, Wallet, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Landmark,
      title: t("services.ruralLoans"),
      description: t("services.ruralLoansDesc"),
      features: [t("services.ruralLoansF1"), t("services.ruralLoansF2"), t("services.ruralLoansF3")],
      color: "bg-blue-500/10 text-blue-600",
      link: "/services/rural-loans",
    },
    {
      icon: HandCoins,
      title: t("services.microfinance"),
      description: t("services.microfinanceDesc"),
      features: [t("services.microfinanceF1"), t("services.microfinanceF2"), t("services.microfinanceF3")],
      color: "bg-amber-500/10 text-amber-600",
      link: "/services/microfinance",
    },
    {
      icon: Home,
      title: t("services.construction"),
      description: t("services.constructionDesc"),
      features: [t("services.constructionF1"), t("services.constructionF2"), t("services.constructionF3")],
      color: "bg-emerald-500/10 text-emerald-600",
      link: "/services/construction-support",
    },
    {
      icon: Wallet,
      title: t("services.pigmy"),
      description: t("services.pigmyDesc"),
      features: [t("services.pigmyF1"), t("services.pigmyF2"), t("services.pigmyF3")],
      color: "bg-purple-500/10 text-purple-600",
      link: "/services/pigmy-collection",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#960f1e]/10 text-[#960f1e] text-sm font-semibold font-['Montserrat'] mb-4">
            {t("services.badge")}
          </div>
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-[#1f3759] mb-4">
            {t("services.title1")}{" "}
            <span className="text-[#960f1e]">{t("services.titleHighlight")}</span>
          </h2>
          <p className="font-['Anek_Kannada'] font-semibold text-lg text-[#1f3759]/80">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-xl border border-border p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-5`}>
                <service.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="font-['Montserrat'] text-xl font-semibold text-[#1f3759] mb-3">
                {service.title}
              </h3>
              <p className="font-['Anek_Kannada'] font-semibold text-[#1f3759]/80 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#1f3759]/80 font-['Anek_Kannada'] font-semibold">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#960f1e]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1f3759] hover:text-[#960f1e] transition-colors group/link"
              >
                {t("services.learnMore")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              {t("services.viewAll")}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
