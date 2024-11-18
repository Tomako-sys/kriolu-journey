import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { MessageCircle, Users } from "lucide-react";

const Community = () => {
  const { t } = useLanguage();

  const discussions = [
    {
      title: "Pronunciation Help",
      author: "Maria S.",
      replies: 12,
      lastActive: "2h ago"
    },
    {
      title: "Daily Practice Partners",
      author: "João P.",
      replies: 8,
      lastActive: "5h ago"
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <header className="p-6">
        <h1 className="text-2xl font-bold mb-2">{t("community.title")}</h1>
        <p className="text-gray-600">{t("community.subtitle")}</p>
      </header>

      <section className="px-6 space-y-4">
        {discussions.map((discussion, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{discussion.title}</h3>
              <span className="text-sm text-gray-500">{discussion.lastActive}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              <span className="mr-4">{discussion.author}</span>
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>{discussion.replies} replies</span>
            </div>
          </Card>
        ))}
      </section>

      <Navigation />
    </div>
  );
};

export default Community;