import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Flame, Star } from "lucide-react";
import { Link } from "react-router-dom";
import HamburgerMenu from "@/components/HamburgerMenu";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <HamburgerMenu />
      <h1 className="text-4xl font-bold mt-8">{t("welcome")}</h1>
      <ProgressBar className="w-3/4 mt-4" />
      <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
        <Link to="/lessons" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Trophy className="h-16 w-16 text-primary" />
          <span className="mt-2 text-lg font-semibold">{t("nav.lessons")}</span>
        </Link>
        <Link to="/practice" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Flame className="h-16 w-16 text-primary" />
          <span className="mt-2 text-lg font-semibold">{t("nav.practice")}</span>
        </Link>
        <Link to="/progress" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Star className="h-16 w-16 text-primary" />
          <span className="mt-2 text-lg font-semibold">{t("nav.progress")}</span>
        </Link>
      </div>
      <footer className="mt-8 p-4 bg-white shadow-md w-full text-center">
        <p className="text-gray-600">© 2023 Mon Application. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Index;