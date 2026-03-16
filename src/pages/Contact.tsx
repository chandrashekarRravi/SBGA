import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
} from "lucide-react";

const branches = [
  {
    name: "Head Office",
    address: "123 Main Street, Rural District, Karnataka - 560001",
    phone: "+91 1234 567 890",
    email: "headoffice@sbgatrust.org",
    hours: "Mon - Sat: 9:00 AM - 5:00 PM",
  },
  {
    name: "Hassan Branch",
    address: "45 Market Road, Hassan District, Karnataka - 573201",
    phone: "+91 1234 567 891",
    email: "hassan@sbgatrust.org",
    hours: "Mon - Sat: 9:30 AM - 4:30 PM",
  },
  {
    name: "Mandya Branch",
    address: "78 Temple Street, Mandya District, Karnataka - 571401",
    phone: "+91 1234 567 892",
    email: "mandya@sbgatrust.org",
    hours: "Mon - Sat: 9:30 AM - 4:30 PM",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("contact.messageSent"),
      description: t("contact.messageSuccess"),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
                {t("contact.badge")}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
                {t("contact.title1")} <span className="text-gradient-gold">{t("contact.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                {t("contact.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section id="contact" className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {t("contact.sendMessage")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t("contact.fullName")}
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t("contact.email")}
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t("contact.phone")}
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 1234 567 890"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t("contact.subject")}
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t("contact.message")}
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder=""
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t("contact.sending")
                    ) : (
                      <>
                        {t("contact.send")}
                        <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    {t("contact.getInTouch")}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-10 h-10 rounded-lg bg-gradient-navy flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{t("footer.headOffice")}</div>
                        <div className="text-sm text-muted-foreground">
                          123 Main Street, Rural District,<br />
                          Karnataka, India - 560001
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-10 h-10 rounded-lg bg-gradient-navy flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{t("contact.phone")}</div>
                        <div className="text-sm text-muted-foreground">
                          +91 1234 567 890<br />
                          +91 1234 567 891
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-10 h-10 rounded-lg bg-gradient-navy flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{t("login.email")}</div>
                        <div className="text-sm text-muted-foreground">
                          info@sbgatrust.org<br />
                          support@sbgatrust.org
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-10 h-10 rounded-lg bg-gradient-navy flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{t("contact.workingHours")}</div>
                        <div className="text-sm text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 5:00 PM<br />
                          Sunday: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branches */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                {t("contact.branches")} <span className="text-gradient-gold">{t("contact.branchesHighlight")}</span>
              </h2>
              <p className="text-muted-foreground">
                {t("contact.branchesDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {branch.name}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{branch.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
