import { BookOpen, Trophy, Music, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg animate-fade-up">
      <div className="flex items-center justify-around p-4">
        <NavItem 
          to="/"
          icon={<BookOpen className="w-6 h-6" />} 
          label={t("nav.lessons")} 
          active={location.pathname === "/"} 
        />
        <NavItem 
          to="/practice"
          icon={<Music className="w-6 h-6" />} 
          label={t("nav.practice")} 
          active={location.pathname === "/practice"} 
        />
        <NavItem 
          to="/progress"
          icon={<Trophy className="w-6 h-6" />} 
          label={t("nav.progress")} 
          active={location.pathname === "/progress"} 
        />
        <NavItem 
          to="/chat"
          icon={<MessageCircle className="w-6 h-6" />} 
          label={t("nav.chat")} 
          active={location.pathname === "/chat"} 
        />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, active = false, to }: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  to: string;
}) => (
  <Link 
    to={to}
    className={`flex flex-col items-center space-y-1 ${active ? "text-primary" : "text-gray-400"}`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </Link>
);

export default Navigation;