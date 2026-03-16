import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import RuralLoans from "./pages/services/RuralLoans";
import Microfinance from "./pages/services/Microfinance";
import ConstructionSupport from "./pages/services/ConstructionSupport";
import PigmyCollection from "./pages/services/PigmyCollection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/rural-loans" element={<RuralLoans />} />
            <Route path="/services/microfinance" element={<Microfinance />} />
            <Route path="/services/construction-support" element={<ConstructionSupport />} />
            <Route path="/services/pigmy-collection" element={<PigmyCollection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
