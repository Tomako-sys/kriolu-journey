import { BookOpen, Trophy, Music, MessageCircle } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg animate-fade-up">
      <div className="flex items-center justify-around p-4">
        <NavItem icon={<BookOpen className="w-6 h-6" />} label="Lessons" active />
        <NavItem icon={<Music className="w-6 h-6" />} label="Practice" />
        <NavItem icon={<Trophy className="w-6 h-6" />} label="Progress" />
        <NavItem icon={<MessageCircle className="w-6 h-6" />} label="Chat" />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <button className={`flex flex-col items-center space-y-1 ${active ? "text-primary" : "text-gray-400"}`}>
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

export default Navigation;