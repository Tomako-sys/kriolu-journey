import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "@/components/HamburgerMenu";
import Index from "./pages/Index";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";
import Lessons from "./pages/Lessons";
import Culture from "./pages/Culture";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import Phrasebook from "./pages/Phrasebook";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <BrowserRouter>
          <HamburgerMenu />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/community" element={<Community />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/phrasebook" element={<Phrasebook />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;