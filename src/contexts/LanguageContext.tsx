import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type Language = "en" | "kn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.customerLogin": "Customer Login",
    "nav.adminLogin": "Admin Login",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.badge": "Trusted Since 1995",
    "hero.title1": "Empowering",
    "hero.titleHighlight": "Rural Growth",
    "hero.title2": "Through Financial Trust",
    "hero.description": "Join thousands of families who have secured their financial future with our transparent, accessible, and community-focused banking solutions.",
    "hero.exploreServices": "Explore Services",
    "hero.learnAbout": "Learn About Us",
    "hero.totalBalance": "Total Balance",
    "hero.savingsAccount": "Savings Account",
    "hero.interestEarned": "+8.5% Interest Earned",
    "hero.lastDeposit": "Last Deposit",
    "hero.interestRate": "Interest Rate",
    "hero.secureTrusted": "Secure & Trusted",

    // About
    "about.badge": "About Us",
    "about.title1": "Empowering",
    "about.titleHighlight": "Rural Growth",
    "about.title2": "Since 2008-09",
    "about.p1": "Sri Basaveshwara Graminabhirudhi Trust (R.) was founded with a powerful idea: every rural family deserves access to reliable, dignified financial services.",
    "about.p2": "What began with a small group of community leaders has grown into a thriving financial institution serving thousands of families across Karnataka, marked by unwavering commitment to trust, transparency, and community service.",
    "about.security": "Security",
    "about.securityDesc": "Your trust and financial safety are our top priorities.",
    "about.transparency": "Transparency",
    "about.transparencyDesc": "Clear, honest communication. No hidden charges.",
    "about.growth": "Growth",
    "about.growthDesc": "Helping members achieve their financial goals.",
    "about.community": "Community",
    "about.communityDesc": "Serving rural communities with care and dedication.",

    // Services Section (Home)
    "services.badge": "Our Services",
    "services.title1": "Financial Solutions for",
    "services.titleHighlight": "Every Need",
    "services.description": "Comprehensive banking services tailored for rural communities, designed to help you save, grow, and prosper.",


    "services.ruralLoans": "Special Loans",
    "services.ruralLoansDesc": "Special loan plans with 50% advance and No Cost EMI, making financing simple, flexible, and interest-free.",
    "services.ruralLoansF1": "No cost EMI",
    "services.ruralLoansF2": "50% Advance",
    "services.ruralLoansF3": "Quick approval",

    "services.microfinance": "Site Loans",
    "services.microfinanceDesc": "Get quick and flexible site loans to purchase land and start building your dream property with affordable financing options.",
    "services.microfinanceF1": "Women-focused programs",
    "services.microfinanceF2": "Group lending",
    "services.microfinanceF3": "Business training",

    "services.construction": "Construction Loans",
    "services.constructionDesc": "Flexible construction loans to help you finance and build your dream home or property with ease.",
    "services.constructionF1": "Up to ₹15 lakhs",
    "services.constructionF2": "Low interest rates",
    "services.constructionF3": "Technical guidance",

    "services.pigmy": "Pigmy Collection",
    "services.pigmyDesc": "Door-to-door daily collection service that makes saving effortless. Start with just ₹10/day.",
    "services.pigmyF1": "Daily collection",
    "services.pigmyF2": "Flexible amounts",
    "services.pigmyF3": "Easy withdrawal",
    "services.learnMore": "Learn More",
    "services.viewAll": "View All Services",

    // Features
    "features.badge": "Why Choose Us",
    "features.title1": "Banking You Can",
    "features.titleHighlight": "Trust",
    "features.description": "We combine traditional values with modern technology to provide you with the best banking experience.",
    "features.secureBanking": "Secure Banking",
    "features.secureBankingDesc": "Your deposits are protected with bank-grade security and government-backed insurance.",
    "features.transparentTx": "Transparent Transactions",
    "features.transparentTxDesc": "Complete visibility of all transactions with detailed statements and real-time updates.",
    "features.support": "24/7 Customer Support",
    "features.supportDesc": "Dedicated support team available round the clock to assist you with any queries.",
    "features.privacy": "Data Privacy",
    "features.privacyDesc": "Your personal and financial information is encrypted and never shared with third parties.",
    "features.easyAccess": "Easy Access",
    "features.easyAccessDesc": "Manage your accounts anytime, anywhere with our user-friendly online portal.",
    "features.quickProcess": "Quick Processing",
    "features.quickProcessDesc": "Fast loan approvals and instant transaction processing for your convenience.",

    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title1": "What Our",
    "testimonials.titleHighlight": "Members Say",
    "testimonials.description": "Real stories from real people whose lives have been transformed by our financial services.",

    // CTA
    "cta.title1": "Ready to Start Your",
    "cta.titleHighlight": "Financial Journey?",
    "cta.description": "Join over 25,000 families who trust us with their financial future. Open your account today and experience the difference.",
    "cta.openAccount": "Open an Account",
    "cta.contactUs": "Contact Us",
    "cta.noHidden": "No hidden charges • Minimal documentation • Quick approval",

    // Footer
    "footer.tagline": "Empowering rural communities through accessible financial services since 1995. Building trust, one family at a time.",
    "footer.ourServices": "Our Services",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.aboutUs": "About Us",
    "footer.contactUs": "Contact Us",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.grievance": "Grievance Redressal",
    "footer.headOffice": "Head Office",
    "footer.rights": "All rights reserved.",
    "footer.registered": "Registered under the Indian Trusts Act. License No: SBGT/2024/1234",
    "footer.constructionSupport": "Construction Support",
    "footer.pigmyCollection": "Pigmy Collection",

    // Services Page
    "servicesPage.badge": "Our Services",
    "servicesPage.title1": "Financial Solutions",
    "servicesPage.titleHighlight": "For You",
    "servicesPage.description": "Comprehensive banking services tailored for rural communities. Simple, transparent, and designed to help you prosper.",
    "servicesPage.applyNow": "Apply Now",
    "servicesPage.quickCalculator": "Quick Calculator",
    "servicesPage.sampleAmount": "Sample Amount:",
    "servicesPage.duration": "Duration:",
    "servicesPage.maturityAmount": "Maturity Amount:",
    "servicesPage.moreServices": "More",
    "servicesPage.moreServicesHighlight": "Services",
    "servicesPage.moreServicesDesc": "Additional financial products designed to meet your every need.",
    "servicesPage.readyTitle": "Ready to Get Started?",
    "servicesPage.readyDesc": "Visit your nearest branch or contact us to open an account today.",
    "servicesPage.educationLoan": "Education Loan",
    "servicesPage.educationLoanDesc": "Invest in your children's future with our special education loan schemes.",
    "servicesPage.vehicleLoan": "Vehicle Loan",
    "servicesPage.vehicleLoanDesc": "Get your dream vehicle with our easy vehicle loan schemes.",

    // Contact Page
    "contact.badge": "Contact Us",
    "contact.title1": "We're Here to",
    "contact.titleHighlight": "Help",
    "contact.description": "Have questions? Reach out to us and our team will get back to you promptly.",
    "contact.sendMessage": "Send us a Message",
    "contact.fullName": "Full Name *",
    "contact.email": "Email Address *",
    "contact.phone": "Phone Number",
    "contact.subject": "Subject *",
    "contact.message": "Message *",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.getInTouch": "Get in Touch",
    "contact.workingHours": "Working Hours",
    "contact.branches": "Our",
    "contact.branchesHighlight": "Branches",
    "contact.branchesDesc": "Visit any of our branches for in-person assistance.",
    "contact.messageSent": "Message Sent!",
    "contact.messageSuccess": "We'll get back to you within 24 hours.",

    // About extra
    "about.yearsServing": "Years Serving",

    // Login
    "login.backHome": "Back to Home",
    "login.customerPortal": "Customer Portal",
    "login.sbgaTrust": "SBGA Trust Banking",
    "login.tab.login": "Login",
    "login.tab.signup": "Sign Up",
    "login.email": "Email Address",
    "login.password": "Password",
    "login.confirmPassword": "Confirm Password",
    "login.fullName": "Full Name",
    "login.loginBtn": "Login",
    "login.loggingIn": "Logging in...",
    "login.createAccount": "Create Account",
    "login.creatingAccount": "Creating account...",
    "login.forgotPassword": "Forgot password?",
    "login.loginFailed": "Login Failed",
    "login.signupFailed": "Sign Up Failed",
    "login.passwordMismatch": "Passwords Don't Match",
    "login.passwordMismatchDesc": "Please make sure your passwords match.",
    "login.weakPassword": "Weak Password",
    "login.weakPasswordDesc": "Password must be at least 6 characters.",
    "login.welcomeBack": "Welcome back!",
    "login.loginSuccess": "You have successfully logged in.",
    "login.accountCreated": "Account Created!",
    "login.accountCreatedDesc": "Please check your email to verify your account.",
    "login.adminLogin": "Admin Login →",
    "login.welcomeTitle": "Welcome to SBGA Trust",
    "login.welcomeDesc": "Access your account to view balances, transactions, and manage your finances with Shri Basaveshwara Grameena Abivrudhi Trust.",
    "login.accountAccess": "Account Access",
    "login.secureBanking": "Secure Banking",
  },
  kn: {
    // Nav
    "nav.home": "ಮುಖಪುಟ",
    "nav.services": "ಸೇವೆಗಳು",
    "nav.contact": "ಸಂಪರ್ಕಿಸಿ",
    "nav.login": "ಲಾಗಿನ್",
    "nav.customerLogin": "ಗ್ರಾಹಕ ಲಾಗಿನ್",
    "nav.adminLogin": "ನಿರ್ವಾಹಕ ಲಾಗಿನ್",
    "nav.getStarted": "ಪ್ರಾರಂಭಿಸಿ",

    // Hero
    "hero.badge": "1995 ರಿಂದ ನಂಬಿಕೆಯ ಸಂಸ್ಥೆ",
    "hero.title1": "ಆರ್ಥಿಕ ನಂಬಿಕೆಯ ಮೂಲಕ",
    "hero.titleHighlight": "ಗ್ರಾಮೀಣ ಬೆಳವಣಿಗೆಯ",
    "hero.title2": "ಸಬಲೀಕರಣ",
    "hero.description": "ನಮ್ಮ ಪಾರದರ್ಶಕ, ಪ್ರವೇಶಿಸಬಹುದಾದ ಮತ್ತು ಸಮುದಾಯ-ಕೇಂದ್ರಿತ ಬ್ಯಾಂಕಿಂಗ್ ಪರಿಹಾರಗಳೊಂದಿಗೆ ತಮ್ಮ ಆರ್ಥಿಕ ಭವಿಷ್ಯವನ್ನು ಭದ್ರಪಡಿಸಿಕೊಂಡ ಸಾವಿರಾರು ಕುಟುಂಬಗಳನ್ನು ಸೇರಿ.",
    "hero.exploreServices": "ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    "hero.learnAbout": "ನಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
    "hero.totalBalance": "ಒಟ್ಟು ಬ್ಯಾಲೆನ್ಸ್",
    "hero.savingsAccount": "ಉಳಿತಾಯ ಖಾತೆ",
    "hero.interestEarned": "+8.5% ಬಡ್ಡಿ ಗಳಿಕೆ",
    "hero.lastDeposit": "ಕೊನೆಯ ಠೇವಣಿ",
    "hero.interestRate": "ಬಡ್ಡಿ ದರ",
    "hero.secureTrusted": "ಸುರಕ್ಷಿತ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ",

    // About
    "about.badge": "ನಮ್ಮ ಬಗ್ಗೆ",
    "about.title1": "",
    "about.titleHighlight": "ಗ್ರಾಮೀಣ ಬೆಳವಣಿಗೆಯ",
    "about.title2": "ಸಬಲೀಕರಣ 1995 ರಿಂದ",
    "about.p1": "ಶ್ರೀ ಬಸವೇಶ್ವರ ಗ್ರಾಮೀಣಾಭಿರುದ್ಧಿ ಟ್ರಸ್ಟ್ (ರಿ.) ಒಂದು ಶಕ್ತಿಶಾಲಿ ಆಲೋಚನೆಯೊಂದಿಗೆ ಸ್ಥಾಪಿಸಲಾಯಿತು: ಪ್ರತಿ ಗ್ರಾಮೀಣ ಕುಟುಂಬವು ವಿಶ್ವಾಸಾರ್ಹ, ಗೌರವಯುತ ಆರ್ಥಿಕ ಸೇವೆಗಳಿಗೆ ಪ್ರವೇಶ ಹೊಂದಿರಬೇಕು.",
    "about.p2": "ಸಮುದಾಯ ನಾಯಕರ ಸಣ್ಣ ಗುಂಪಿನಿಂದ ಪ್ರಾರಂಭವಾದ ಈ ಸಂಸ್ಥೆ ಇಂದು ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸಾವಿರಾರು ಕುಟುಂಬಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವ ಸಮೃದ್ಧ ಆರ್ಥಿಕ ಸಂಸ್ಥೆಯಾಗಿ ಬೆಳೆದಿದೆ.",
    "about.security": "ಭದ್ರತೆ",
    "about.securityDesc": "ನಿಮ್ಮ ನಂಬಿಕೆ ಮತ್ತು ಆರ್ಥಿಕ ಸುರಕ್ಷತೆ ನಮ್ಮ ಪ್ರಮುಖ ಆದ್ಯತೆಗಳು.",
    "about.transparency": "ಪಾರದರ್ಶಕತೆ",
    "about.transparencyDesc": "ಸ್ಪಷ್ಟ, ಪ್ರಾಮಾಣಿಕ ಸಂವಹನ. ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲ.",
    "about.growth": "ಬೆಳವಣಿಗೆ",
    "about.growthDesc": "ಸದಸ್ಯರಿಗೆ ಅವರ ಆರ್ಥಿಕ ಗುರಿಗಳನ್ನು ಸಾಧಿಸಲು ಸಹಾಯ.",
    "about.community": "ಸಮುದಾಯ",
    "about.communityDesc": "ಕಾಳಜಿ ಮತ್ತು ಸಮರ್ಪಣೆಯಿಂದ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ.",

    // Services Section (Home)
    "services.badge": "ನಮ್ಮ ಸೇವೆಗಳು",
    "services.title1": "ಪ್ರತಿಯೊಂದು ಅಗತ್ಯಕ್ಕೂ",
    "services.titleHighlight": "ಆರ್ಥಿಕ ಪರಿಹಾರಗಳು",
    "services.description": "ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಮಗ್ರ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು.",
    "services.ruralLoans": "ಗ್ರಾಮೀಣ ಸಾಲಗಳು",
    "services.ruralLoansDesc": "ಸರಳ ದಾಖಲಾತಿಯೊಂದಿಗೆ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಕೈಗೆಟುಕುವ ಕೃಷಿ ಮತ್ತು ವೈಯಕ್ತಿಕ ಸಾಲಗಳು.",
    "services.ruralLoansF1": "ಕಡಿಮೆ ಬಡ್ಡಿ ದರ",
    "services.ruralLoansF2": "ಹೊಂದಿಕೊಳ್ಳುವ ಮರುಪಾವತಿ",
    "services.ruralLoansF3": "ತ್ವರಿತ ಅನುಮೋದನೆ",
    "services.microfinance": "ಸೂಕ್ಷ್ಮ ಹಣಕಾಸು ಬೆಂಬಲ",
    "services.microfinanceDesc": "ಪ್ರವೇಶಿಸಬಹುದಾದ ಸೂಕ್ಷ್ಮ-ಸಾಲಗಳು ಮತ್ತು ಆರ್ಥಿಕ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಸಣ್ಣ ವ್ಯಾಪಾರಗಳನ್ನು ಸಬಲೀಕರಣ.",
    "services.microfinanceF1": "ಮಹಿಳಾ-ಕೇಂದ್ರಿತ ಕಾರ್ಯಕ್ರಮಗಳು",
    "services.microfinanceF2": "ಗುಂಪು ಸಾಲ",
    "services.microfinanceF3": "ವ್ಯಾಪಾರ ತರಬೇತಿ",
    "services.construction": "ನಿರ್ಮಾಣ ಬೆಂಬಲ",
    "services.constructionDesc": "ಕೈಗೆಟುಕುವ ನಿಯಮಗಳೊಂದಿಗೆ ಮನೆ ನಿರ್ಮಾಣ ಮತ್ತು ನವೀಕರಣ ಯೋಜನೆಗಳಿಗೆ ಆರ್ಥಿಕ ಸಹಾಯ.",
    "services.constructionF1": "₹15 ಲಕ್ಷದವರೆಗೆ",
    "services.constructionF2": "ಕಡಿಮೆ ಬಡ್ಡಿ ದರ",
    "services.constructionF3": "ತಾಂತ್ರಿಕ ಮಾರ್ಗದರ್ಶನ",
    "services.pigmy": "ಪಿಗ್ಮಿ ಸಂಗ್ರಹ",
    "services.pigmyDesc": "ಉಳಿತಾಯವನ್ನು ಸುಲಭಗೊಳಿಸುವ ಮನೆ ಬಾಗಿಲಿಗೆ ದೈನಂದಿನ ಸಂಗ್ರಹ ಸೇವೆ. ₹10/ದಿನದಿಂದ ಪ್ರಾರಂಭಿಸಿ.",
    "services.pigmyF1": "ದೈನಂದಿನ ಸಂಗ್ರಹ",
    "services.pigmyF2": "ಹೊಂದಿಕೊಳ್ಳುವ ಮೊತ್ತಗಳು",
    "services.pigmyF3": "ಸುಲಭ ಹಿಂಪಡೆತ",
    "services.learnMore": "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    "services.viewAll": "ಎಲ್ಲಾ ಸೇವೆಗಳನ್ನು ನೋಡಿ",

    // Features
    "features.badge": "ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು",
    "features.title1": "ನೀವು",
    "features.titleHighlight": "ನಂಬಬಹುದಾದ",
    "features.description": "ಉತ್ತಮ ಬ್ಯಾಂಕಿಂಗ್ ಅನುಭವವನ್ನು ನೀಡಲು ನಾವು ಸಾಂಪ್ರದಾಯಿಕ ಮೌಲ್ಯಗಳನ್ನು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತೇವೆ.",
    "features.secureBanking": "ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕಿಂಗ್",
    "features.secureBankingDesc": "ನಿಮ್ಮ ಠೇವಣಿಗಳು ಬ್ಯಾಂಕ್-ಶ್ರೇಣಿಯ ಭದ್ರತೆ ಮತ್ತು ಸರ್ಕಾರಿ ಬೆಂಬಲಿತ ವಿಮೆಯಿಂದ ರಕ್ಷಿಸಲ್ಪಟ್ಟಿವೆ.",
    "features.transparentTx": "ಪಾರದರ್ಶಕ ವಹಿವಾಟುಗಳು",
    "features.transparentTxDesc": "ವಿವರವಾದ ಹೇಳಿಕೆಗಳು ಮತ್ತು ನೈಜ-ಸಮಯ ನವೀಕರಣಗಳೊಂದಿಗೆ ಎಲ್ಲಾ ವಹಿವಾಟುಗಳ ಸಂಪೂರ್ಣ ಗೋಚರತೆ.",
    "features.support": "24/7 ಗ್ರಾಹಕ ಬೆಂಬಲ",
    "features.supportDesc": "ನಿಮ್ಮ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಹಾಯ ಮಾಡಲು ಗಡಿಯಾರದ ಸುತ್ತಲೂ ಲಭ್ಯವಿರುವ ಮೀಸಲಾದ ಬೆಂಬಲ ತಂಡ.",
    "features.privacy": "ಡೇಟಾ ಗೌಪ್ಯತೆ",
    "features.privacyDesc": "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮತ್ತು ಆರ್ಥಿಕ ಮಾಹಿತಿಯನ್ನು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾಗಿದೆ ಮತ್ತು ಮೂರನೇ ವ್ಯಕ್ತಿಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.",
    "features.easyAccess": "ಸುಲಭ ಪ್ರವೇಶ",
    "features.easyAccessDesc": "ನಮ್ಮ ಬಳಕೆದಾರ-ಸ್ನೇಹಿ ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್‌ನೊಂದಿಗೆ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ, ಎಲ್ಲಿಂದಲಾದರೂ ನಿಮ್ಮ ಖಾತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    "features.quickProcess": "ತ್ವರಿತ ಪ್ರಕ್ರಿಯೆ",
    "features.quickProcessDesc": "ನಿಮ್ಮ ಅನುಕೂಲಕ್ಕಾಗಿ ವೇಗದ ಸಾಲ ಅನುಮೋದನೆಗಳು ಮತ್ತು ತ್ವರಿತ ವಹಿವಾಟು ಪ್ರಕ್ರಿಯೆ.",

    // Testimonials
    "testimonials.badge": "ಪ್ರಶಂಸಾಪತ್ರಗಳು",
    "testimonials.title1": "ನಮ್ಮ",
    "testimonials.titleHighlight": "ಸದಸ್ಯರು ಹೇಳುವುದು",
    "testimonials.description": "ನಮ್ಮ ಆರ್ಥಿಕ ಸೇವೆಗಳಿಂದ ಜೀವನ ಬದಲಾದ ನಿಜವಾದ ಜನರ ನಿಜವಾದ ಕಥೆಗಳು.",

    // CTA
    "cta.title1": "ನಿಮ್ಮ",
    "cta.titleHighlight": "ಆರ್ಥಿಕ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರೇ?",
    "cta.description": "25,000 ಕ್ಕೂ ಹೆಚ್ಚು ಕುಟುಂಬಗಳನ್ನು ಸೇರಿ, ಅವರು ತಮ್ಮ ಆರ್ಥಿಕ ಭವಿಷ್ಯದೊಂದಿಗೆ ನಮ್ಮನ್ನು ನಂಬುತ್ತಾರೆ.",
    "cta.openAccount": "ಖಾತೆ ತೆರೆಯಿರಿ",
    "cta.contactUs": "ಸಂಪರ್ಕಿಸಿ",
    "cta.noHidden": "ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲ • ಕನಿಷ್ಠ ದಾಖಲಾತಿ • ತ್ವರಿತ ಅನುಮೋದನೆ",

    // Footer
    "footer.tagline": "1995 ರಿಂದ ಪ್ರವೇಶಿಸಬಹುದಾದ ಆರ್ಥಿಕ ಸೇವೆಗಳ ಮೂಲಕ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳನ್ನು ಸಬಲೀಕರಣ. ನಂಬಿಕೆ ಕಟ್ಟುವುದು, ಒಂದು ಕುಟುಂಬ ಒಂದು ಸಮಯ.",
    "footer.ourServices": "ನಮ್ಮ ಸೇವೆಗಳು",
    "footer.company": "ಸಂಸ್ಥೆ",
    "footer.legal": "ಕಾನೂನು",
    "footer.aboutUs": "ನಮ್ಮ ಬಗ್ಗೆ",
    "footer.contactUs": "ಸಂಪರ್ಕಿಸಿ",
    "footer.privacyPolicy": "ಗೌಪ್ಯತೆ ನೀತಿ",
    "footer.terms": "ಸೇವಾ ನಿಯಮಗಳು",
    "footer.grievance": "ಕುಂದುಕೊರತೆ ಪರಿಹಾರ",
    "footer.headOffice": "ಮುಖ್ಯ ಕಚೇರಿ",
    "footer.rights": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.registered": "ಭಾರತೀಯ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ. ಪರವಾನಗಿ ಸಂಖ್ಯೆ: SBGT/2024/1234",
    "footer.constructionSupport": "ನಿರ್ಮಾಣ ಬೆಂಬಲ",
    "footer.pigmyCollection": "ಪಿಗ್ಮಿ ಸಂಗ್ರಹ",

    // Services Page
    "servicesPage.badge": "ನಮ್ಮ ಸೇವೆಗಳು",
    "servicesPage.title1": "ಆರ್ಥಿಕ ಪರಿಹಾರಗಳು",
    "servicesPage.titleHighlight": "ನಿಮಗಾಗಿ",
    "servicesPage.description": "ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಮಗ್ರ ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು. ಸರಳ, ಪಾರದರ್ಶಕ ಮತ್ತು ಸಮೃದ್ಧಿಗೆ ಸಹಾಯ.",
    "servicesPage.applyNow": "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    "servicesPage.quickCalculator": "ತ್ವರಿತ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    "servicesPage.sampleAmount": "ಮಾದರಿ ಮೊತ್ತ:",
    "servicesPage.duration": "ಅವಧಿ:",
    "servicesPage.maturityAmount": "ಮೆಚ್ಯೂರಿಟಿ ಮೊತ್ತ:",
    "servicesPage.moreServices": "ಇನ್ನಷ್ಟು",
    "servicesPage.moreServicesHighlight": "ಸೇವೆಗಳು",
    "servicesPage.moreServicesDesc": "ನಿಮ್ಮ ಪ್ರತಿಯೊಂದು ಅಗತ್ಯವನ್ನು ಪೂರೈಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಹೆಚ್ಚುವರಿ ಆರ್ಥಿಕ ಉತ್ಪನ್ನಗಳು.",
    "servicesPage.readyTitle": "ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರೇ?",
    "servicesPage.readyDesc": "ಇಂದೇ ಖಾತೆ ತೆರೆಯಲು ನಿಮ್ಮ ಹತ್ತಿರದ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    "servicesPage.educationLoan": "ಶಿಕ್ಷಣ ಸಾಲ",
    "servicesPage.educationLoanDesc": "ನಮ್ಮ ವಿಶೇಷ ಶಿಕ್ಷಣ ಸಾಲ ಯೋಜನೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಮಕ್ಕಳ ಭವಿಷ್ಯದಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ.",
    "servicesPage.vehicleLoan": "ವಾಹನ ಸಾಲ",
    "servicesPage.vehicleLoanDesc": "ನಮ್ಮ ಸುಲಭ ವಾಹನ ಸಾಲ ಯೋಜನೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಕನಸಿನ ವಾಹನವನ್ನು ಪಡೆಯಿರಿ.",

    // Contact Page
    "contact.badge": "ಸಂಪರ್ಕಿಸಿ",
    "contact.title1": "ನಾವು ಇಲ್ಲಿದ್ದೇವೆ",
    "contact.titleHighlight": "ಸಹಾಯ",
    "contact.description": "ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
    "contact.sendMessage": "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    "contact.fullName": "ಪೂರ್ಣ ಹೆಸರು *",
    "contact.email": "ಇಮೇಲ್ ವಿಳಾಸ *",
    "contact.phone": "ಫೋನ್ ಸಂಖ್ಯೆ",
    "contact.subject": "ವಿಷಯ *",
    "contact.message": "ಸಂದೇಶ *",
    "contact.send": "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    "contact.sending": "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...",
    "contact.getInTouch": "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
    "contact.workingHours": "ಕೆಲಸದ ಸಮಯ",
    "contact.branches": "ನಮ್ಮ",
    "contact.branchesHighlight": "ಶಾಖೆಗಳು",
    "contact.branchesDesc": "ವ್ಯಕ್ತಿಗತ ಸಹಾಯಕ್ಕಾಗಿ ನಮ್ಮ ಯಾವುದೇ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ.",
    "contact.messageSent": "ಸಂದೇಶ ಕಳುಹಿಸಲಾಗಿದೆ!",
    "contact.messageSuccess": "ನಾವು 24 ಗಂಟೆಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",

    // About extra
    "about.yearsServing": "ವರ್ಷಗಳ ಸೇವೆ",

    // Login
    "login.backHome": "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    "login.customerPortal": "ಗ್ರಾಹಕ ಪೋರ್ಟಲ್",
    "login.sbgaTrust": "ಎಸ್‌ಬಿಜಿಎ ಟ್ರಸ್ಟ್ ಬ್ಯಾಂಕಿಂಗ್",
    "login.tab.login": "ಲಾಗಿನ್",
    "login.tab.signup": "ಸೈನ್ ಅಪ್",
    "login.email": "ಇಮೇಲ್ ವಿಳಾಸ",
    "login.password": "ಪಾಸ್‌ವರ್ಡ್",
    "login.confirmPassword": "ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
    "login.fullName": "ಪೂರ್ಣ ಹೆಸರು",
    "login.loginBtn": "ಲಾಗಿನ್",
    "login.loggingIn": "ಲಾಗಿನ್ ಆಗುತ್ತಿದೆ...",
    "login.createAccount": "ಖಾತೆ ರಚಿಸಿ",
    "login.creatingAccount": "ಖಾತೆ ರಚಿಸಲಾಗುತ್ತಿದೆ...",
    "login.forgotPassword": "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?",
    "login.loginFailed": "ಲಾಗಿನ್ ವಿಫಲವಾಗಿದೆ",
    "login.signupFailed": "ಸೈನ್ ಅಪ್ ವಿಫಲವಾಗಿದೆ",
    "login.passwordMismatch": "ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ",
    "login.passwordMismatchDesc": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
    "login.weakPassword": "ದುರ್ಬಲ ಪಾಸ್‌ವರ್ಡ್",
    "login.weakPasswordDesc": "ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳಾಗಿರಬೇಕು.",
    "login.welcomeBack": "ಮರಳಿ ಸ್ವಾಗತ!",
    "login.loginSuccess": "ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಲಾಗಿನ್ ಆಗಿದ್ದೀರಿ.",
    "login.accountCreated": "ಖಾತೆ ರಚಿಸಲಾಗಿದೆ!",
    "login.accountCreatedDesc": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಪರಿಶೀಲಿಸಲು ನಿಮ್ಮ ಇಮೇಲ್ ಪರಿಶೀಲಿಸಿ.",
    "login.adminLogin": "ನಿರ್ವಾಹಕ ಲಾಗಿನ್ →",
    "login.welcomeTitle": "ಎಸ್‌ಬಿಜಿಎ ಟ್ರಸ್ಟ್‌ಗೆ ಸ್ವಾಗತ",
    "login.welcomeDesc": "ಶ್ರೀ ಬಸವೇಶ್ವರ ಗ್ರಾಮೀಣಾಭಿರುದ್ಧಿ ಟ್ರಸ್ಟ್‌ನೊಂದಿಗೆ ನಿಮ್ಮ ಬ್ಯಾಲೆನ್ಸ್, ವಹಿವಾಟುಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಮತ್ತು ಹಣಕಾಸು ನಿರ್ವಹಿಸಲು ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಪ್ರವೇಶಿಸಿ.",
    "login.accountAccess": "ಖಾತೆ ಪ್ರವೇಶ",
    "login.secureBanking": "ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕಿಂಗ್",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "kn" ? "kn" : "en") as Language;
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || translations.en[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
