import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Shield, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-navy shadow-md group-hover:shadow-lg transition-shadow">
            <Shield className="h-6 w-6 text-gold" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display text-lg font-bold text-primary leading-tight">
              Sri Basaveshwara
            </h1>
            <p className="text-xs text-muted-foreground">
              Graminabhirudhi Trust (R.)
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.path)
                  ? "text-gold bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "kn" : "en")}
            className="gap-2 font-medium"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "ಕನ್ನಡ" : "English"}
          </Button>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                {t("nav.login")} <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/login" className="w-full cursor-pointer">
                  {t("nav.customerLogin")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/admin/login" className="w-full cursor-pointer">
                  {t("nav.adminLogin")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <Button variant="hero" asChild>
            <Link to="/services">{t("nav.getStarted")}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-card">
            <div className="flex flex-col gap-6 mt-8">
              {/* Language Toggle Mobile */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "kn" : "en")}
                className="gap-2 font-medium w-full"
              >
                <Globe className="h-4 w-4" />
                {language === "en" ? "ಕನ್ನಡ" : "English"}
              </Button>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${isActive(link.path)
                        ? "text-gold bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    {t("nav.customerLogin")}
                  </Link>
                </Button>
                <Button variant="navyGold" asChild className="w-full">
                  <Link to="/admin/login" onClick={() => setIsOpen(false)}>
                    {t("nav.adminLogin")}
                  </Link>
                </Button>
                <Button variant="hero" asChild className="w-full">
                  <Link to="/services" onClick={() => setIsOpen(false)}>
                    {t("nav.getStarted")}
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
