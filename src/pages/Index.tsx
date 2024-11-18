import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Flame, Star } from "lucide-react";
import { Link } from "react-router-dom";
import HamburgerMenu from "@/components/HamburgerMenu";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div>
      <HamburgerMenu />
      <h1>{t("welcome")}</h1>
      <ProgressBar />
      <div className="flex justify-around mt-4">
        <Link to="/lessons" className="flex flex-col items-center">
          <Trophy className="h-8 w-8 text-primary" />
          <span>{t("nav.lessons")}</span>
        </Link>
        <Link to="/practice" className="flex flex-col items-center">
          <Flame className="h-8 w-8 text-primary" />
          <span>{t("nav.practice")}</span>
        </Link>
        <Link to="/progress" className="flex flex-col items-center">
          <Star className="h-8 w-8 text-primary" />
          <span>{t("nav.progress")}</span>
        </Link>
      </div>
    </div>
  );
};

export default Index;