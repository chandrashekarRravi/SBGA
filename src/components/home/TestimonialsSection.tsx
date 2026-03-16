import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Farmer, Mandya District",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The agricultural loan from SBGAT helped me expand my farm. The interest rates are reasonable and the staff treats us with respect. Best decision I ever made.",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "Started my tailoring business with a microfinance loan. The flexible repayment options made it possible for me to grow without stress. Forever grateful!",
    rating: 5,
  },
  {
    name: "Venkatesh Gowda",
    role: "Teacher, Hassan District",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The fixed deposit scheme offers excellent returns. I've been a member for 15 years and my savings have grown significantly. Highly trustworthy institution.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            {t("testimonials.badge")}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("testimonials.title1")} <span className="text-gradient-gold">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-md">
                  <Quote className="h-4 w-4 text-navy-dark" />
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
