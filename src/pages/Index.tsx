import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Flame, Star } from "lucide-react";
import { Link } from "react-router-dom";
import HamburgerMenu from "@/components/HamburgerMenu";

const Index = () => {
  const { t } = useLanguage();
  const streakDays = 5;

  return (
    <div className="min-h-screen pb-20 bg-sand-light">
      <HamburgerMenu />
      {/* Header with Welcome */}
      <header className="p-6 bg-primary text-white">
        <h1 className="text-3xl font-bold mb-2 animate-fade-up">Bon dia!</h1>
        <p className="animate-fade-up" style={{ animationDelay: "100ms" }}>
          {t("welcome")}
        </p>
      </header>

      {/* Daily Stats */}
      <section className="p-4 bg-white rounded-lg mx-4 -mt-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <Trophy className="w-6 h-6 text-primary mx-auto mb-1" />
            <span className="text-sm">Level 2</span>
          </div>
          <div className="text-center">
            <Flame className="w-6 h-6 text-secondary mx-auto mb-1" />
            <span className="text-sm">{streakDays} days</span>
          </div>
          <div className="text-center">
            <Star className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
            <span className="text-sm">50 XP</span>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="px-6 my-6">
        <h2 className="text-lg font-semibold mb-2">Daily Goal</h2>
        <ProgressBar progress={35} />
      </section>

      {/* Quick Actions */}
      <section className="px-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Continue Learning</h2>
        <Link to="/lessons" className="block bg-white p-4 rounded-lg shadow mb-4 hover:shadow-md transition-shadow">
          <h3 className="font-medium text-primary">Basic Phrases</h3>
          <p className="text-sm text-gray-600">Learn essential Kriolu greetings</p>
        </Link>
        <Link to="/practice" className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-medium text-primary">Daily Practice</h3>
          <p className="text-sm text-gray-600">Review today's vocabulary</p>
        </Link>
      </section>

      <Navigation />
    </div>
  );
};

export default Index;