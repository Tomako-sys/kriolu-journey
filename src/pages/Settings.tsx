import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Globe, Bell, Download, User } from "lucide-react";

const Settings = () => {
  const { t, language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", label: "English" },
    { code: "pt", label: "Português" },
    { code: "fr", label: "Français" }
  ];

  return (
    <div className="min-h-screen pb-20">
      <header className="p-6">
        <h1 className="text-2xl font-bold mb-2">{t("settings.title")}</h1>
        <p className="text-gray-600">{t("settings.subtitle")}</p>
      </header>

      <section className="px-6 space-y-4">
        <Card className="p-4">
          <div className="flex items-center mb-4">
            <Globe className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-lg font-semibold">{t("settings.language")}</h2>
          </div>
          <div className="space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`w-full text-left p-2 rounded ${
                  language === lang.code ? "bg-primary/10 text-primary" : ""
                }`}
                onClick={() => setLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <Bell className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-lg font-semibold">{t("settings.notifications")}</h2>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <Download className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-lg font-semibold">{t("settings.offline")}</h2>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <User className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-lg font-semibold">{t("settings.profile")}</h2>
          </div>
        </Card>
      </section>

      <Navigation />
    </div>
  );
};

export default Settings;