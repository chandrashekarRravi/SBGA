import { Shield, Eye, HeadphonesIcon, Lock, Smartphone, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, title: t("features.secureBanking"), description: t("features.secureBankingDesc") },
    { icon: Eye, title: t("features.transparentTx"), description: t("features.transparentTxDesc") },
    { icon: HeadphonesIcon, title: t("features.support"), description: t("features.supportDesc") },
    { icon: Lock, title: t("features.privacy"), description: t("features.privacyDesc") },
    { icon: Smartphone, title: t("features.easyAccess"), description: t("features.easyAccessDesc") },
    { icon: Clock, title: t("features.quickProcess"), description: t("features.quickProcessDesc") },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#960f1e]/10 text-[#960f1e] text-sm font-semibold font-['Montserrat'] mb-4">
            {t("features.badge")}
          </div>
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-[#1f3759] mb-4">
            {t("features.title1")}{" "}
            <span className="text-[#960f1e]">{t("features.titleHighlight")}</span>
          </h2>
          <p className="font-['Anek_Kannada'] font-semibold text-lg text-[#1f3759]/80">
            {t("features.description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-[#960f1e]/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1f3759] mb-6 group-hover:shadow-[0_4px_20px_0_rgba(150,15,30,0.25)] transition-shadow">
                <feature.icon className="h-8 w-8 text-[#960f1e]" />
              </div>
              <h3 className="font-['Montserrat'] text-xl font-semibold text-[#1f3759] mb-3">
                {feature.title}
              </h3>
              <p className="font-['Anek_Kannada'] font-semibold text-[#1f3759]/80 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#960f1e]/5 to-transparent rounded-tr-xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
