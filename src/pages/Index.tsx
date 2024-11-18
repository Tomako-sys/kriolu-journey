import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Flame, Star } from "lucide-react";
import { Link } from "react-router-dom";
import HamburgerMenu from "@/components/HamburgerMenu";

  const Index = () => {
    return (
      <div>
        <HamburgerMenu />
        <h1>Bienvenue sur la page d'accueil</h1>
      </div>
    );
  };
  
  export default Index;