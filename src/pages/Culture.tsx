import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";

const Culture = () => {
  const { t } = useLanguage();

  const culturalItems = [
    {
      title: "Traditional Music",
      description: "Discover the rich history of Morna and Coladeira",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Cape Verdean Cuisine",
      description: "Learn about traditional dishes and their names",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <HamburgerMenu />
      <header className="p-6">
        <h1 className="text-2xl font-bold mb-2">{t("culture.title")}</h1>
        <p className="text-gray-600">{t("culture.subtitle")}</p>
      </header>

      <section className="px-6 space-y-4">
        {culturalItems.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <button className="flex items-center text-primary">
                <Volume2 className="w-5 h-5 mr-2" />
                {t("listen")}
              </button>
            </div>
          </Card>
        ))}
      </section>

      <Navigation />
    </div>
  );
};

export default Culture;