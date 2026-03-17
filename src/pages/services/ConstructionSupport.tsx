import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, ArrowRight, Check, Calculator, ArrowLeft } from "lucide-react";

const ConstructionSupport = () => {
  const { t } = useLanguage();

  const features = [
    t("services.constructionF1"),
    "Competitive Interest Rates",
    t("services.constructionF2"),
    "No-Cost EMI on Remaining 50%",
    t("services.constructionF3"),
    "Simple Documentation Process",
    "Processing Fees Applicable",
    "Step-by-Step Fund Release",
  ];

  const eligibility = [
    "Age: 21-65 years",
    "Land ownership documents",
    "Approved building plan",
    "Valid ID & address proof",
    "Income proof / salary slips",
    "Property valuation report",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-[#1f3759] py-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#960f1e]/10 rounded-full blur-3xl" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Link to="/services" className="inline-flex items-center gap-2 text-[#960f1e] hover:text-[#960f1e]/80 text-sm mb-6 transition-colors font-['Anek_Kannada'] font-semibold">
                <ArrowLeft className="h-4 w-4" />
                {t("nav.services")}
              </Link>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/10 mb-6 mx-auto">
                <Home className="h-10 w-10 text-emerald-600" />
              </div>
              <h1 className="font-['Montserrat'] text-4xl sm:text-5xl font-bold text-[#dfdcd3] mb-4">
                {t("services.construction")}
              </h1>
              <p className="font-['Anek_Kannada'] font-semibold text-xl text-[#dfdcd3]/80">
                {t("services.constructionDesc")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#dfdcd3]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-['Montserrat'] text-3xl font-bold text-[#1f3759] mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#960f1e]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-[#960f1e]" />
                      </div>
                      <span className="font-['Anek_Kannada'] font-semibold text-sm text-[#1f3759]/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-['Montserrat'] text-xl font-semibold text-[#1f3759] mb-4">Eligibility & Documents</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {eligibility.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#960f1e]" />
                      <span className="font-['Anek_Kannada'] font-semibold text-sm text-[#1f3759]/80">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    {t("servicesPage.applyNow")}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl" />
                <div className="relative z-10 text-center mb-8">
                  <div className="inline-block px-6 py-2 rounded-full bg-emerald-500/10 mb-4">
                    <span className="font-['Montserrat'] text-4xl font-bold text-[#1f3759]">₹15L</span>
                  </div>
                  <p className="font-['Anek_Kannada'] font-semibold text-sm text-[#1f3759]/80">Up to</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calculator className="h-4 w-4" />
                    <span className="text-sm font-medium">{t("servicesPage.quickCalculator")}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t("servicesPage.sampleAmount")}</span>
                      <span className="font-semibold text-foreground">₹10,00,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t("servicesPage.duration")}</span>
                      <span className="font-semibold text-foreground">10 Years</span>
                    </div>
                    <div className="h-px bg-border my-2" />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated EMI:</span>
                      <span className="font-['Montserrat'] font-bold text-[#960f1e] text-lg">₹12,132</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#dfdcd3]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-['Montserrat'] text-3xl font-bold text-[#1f3759] mb-4">{t("servicesPage.readyTitle")}</h2>
              <p className="font-['Anek_Kannada'] font-semibold text-[#1f3759]/80 mb-8">{t("servicesPage.readyDesc")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">{t("cta.contactUs")}<ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/services">{t("nav.services")}</Link>
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

export default ConstructionSupport;
