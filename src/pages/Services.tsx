import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Landmark,
  HandCoins,
  Wallet,
  GraduationCap,
  Home,
  Car,
  ArrowRight,
  Check,
  Calculator,
} from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      id: "loans",
      icon: Landmark,
      title: t("services.ruralLoans"),
      subtitle: "Finance your dreams",
      description: t("services.ruralLoansDesc"),
      features: [
        "Interest from 9% p.a.",
        "Loan amount up to ₹10 lakhs",
        t("services.ruralLoansF2"),
        "Minimal documentation",
        "No processing fee",
        "Prepayment without penalty",
      ],
      highlight: "9%",
      highlightLabel: "Starting Rate",
      color: "bg-blue-500",
      link: "/services/rural-loans",
    },
    {
      id: "microfinance",
      icon: HandCoins,
      title: t("services.microfinance"),
      subtitle: "Empower your business",
      description: t("services.microfinanceDesc"),
      features: [
        "Loans starting from ₹5,000",
        t("services.microfinanceF1"),
        t("services.microfinanceF2"),
        t("services.microfinanceF3"),
        "Weekly/monthly repayment",
        "No collateral required",
      ],
      highlight: "₹5K",
      highlightLabel: "Starting From",
      color: "bg-amber-500",
      link: "/services/microfinance",
    },
    {
      id: "construction",
      icon: Home,
      title: t("services.construction"),
      subtitle: "Build your dream home",
      description: t("services.constructionDesc"),
      features: [
        t("services.constructionF1"),
        t("services.constructionF2"),
        "Long repayment tenure",
        t("services.constructionF3"),
        "Stage-wise disbursement",
        "No hidden charges",
      ],
      highlight: "₹15L",
      highlightLabel: "Up to",
      color: "bg-emerald-500",
      link: "/services/construction-support",
    },
    {
      id: "pigmy",
      icon: Wallet,
      title: t("services.pigmy"),
      subtitle: "Save daily, grow steadily",
      description: t("services.pigmyDesc"),
      features: [
        t("services.pigmyF1"),
        "Start with as little as ₹10/day",
        t("services.pigmyF2"),
        "Monthly statement provided",
        "No minimum balance",
        t("services.pigmyF3"),
      ],
      highlight: "₹10",
      highlightLabel: "Per Day",
      color: "bg-purple-500",
      link: "/services/pigmy-collection",
    },
  ];

  const additionalServices = [
    {
      icon: GraduationCap,
      title: t("servicesPage.educationLoan"),
      description: t("servicesPage.educationLoanDesc"),
    },
    {
      icon: Car,
      title: t("servicesPage.vehicleLoan"),
      description: t("servicesPage.vehicleLoanDesc"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
                {t("servicesPage.badge")}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
                {t("servicesPage.title1")} <span className="text-gradient-gold">{t("servicesPage.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t("servicesPage.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color}/10 mb-6`}>
                      <service.icon className={`h-8 w-8 ${service.color.replace('bg-', 'text-').replace('-500', '-600')}`} />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gold font-medium mb-4">{service.subtitle}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-gold" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="default" asChild>
                      <Link to={service.link}>
                        {t("services.learnMore")}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual Card */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-card rounded-2xl border border-border p-8 relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-40 h-40 ${service.color}/5 rounded-full blur-2xl`} />
                      
                      {/* Highlight Badge */}
                      <div className="relative z-10 text-center mb-8">
                        <div className={`inline-block px-6 py-2 rounded-full ${service.color}/10 mb-4`}>
                          <span className="font-display text-4xl font-bold text-foreground">
                            {service.highlight}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.highlightLabel}</p>
                      </div>

                      {/* Calculator Preview */}
                      <div className="bg-muted/50 rounded-xl p-6">
                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <Calculator className="h-4 w-4" />
                          <span className="text-sm font-medium">{t("servicesPage.quickCalculator")}</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{t("servicesPage.sampleAmount")}</span>
                            <span className="font-semibold text-foreground">₹1,00,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{t("servicesPage.duration")}</span>
                            <span className="font-semibold text-foreground">1 Year</span>
                          </div>
                          <div className="h-px bg-border my-2" />
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t("servicesPage.maturityAmount")}</span>
                            <span className="font-bold text-gold text-lg">₹1,08,500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                {t("servicesPage.moreServices")} <span className="text-gradient-gold">{t("servicesPage.moreServicesHighlight")}</span>
              </h2>
              <p className="text-muted-foreground">
                {t("servicesPage.moreServicesDesc")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-gold/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-navy flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
                {t("servicesPage.readyTitle")}
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                {t("servicesPage.readyDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    {t("cta.contactUs")}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/login">{t("nav.customerLogin")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
