import { BookOpen, Trophy, Music, MessageCircle, Globe, Settings, Book, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg animate-fade-up">
      <div className="grid grid-cols-4 items-center p-4">
        <NavItem 
          to="/lessons"
          icon={<BookOpen className="w-6 h-6" />} 
          label={t("nav.lessons")} 
          active={location.pathname === "/lessons"} 
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
          to="/community"
          icon={<Users className="w-6 h-6" />} 
          label={t("nav.community")} 
          active={location.pathname === "/community"} 
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