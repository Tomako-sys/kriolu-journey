import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const BackHomeButton = () => {
  const { t } = useLanguage();

  return (
    <Link to="/">
      <Button 
        variant="ghost" 
        className="absolute top-4 left-4 flex items-center gap-2 text-primary hover:text-primary-dark"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm">{t("back.home")}</span>
      </Button>
    </Link>
  );
};

export default BackHomeButton;