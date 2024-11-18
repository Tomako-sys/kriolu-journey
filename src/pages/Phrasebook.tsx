import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import VocabularyCard from "@/components/VocabularyCard";

const Phrasebook = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: "Greetings",
      phrases: [
        {
          word: "Bon dia",
          translation: "Good morning",
          audioUrl: "/audio/bon-dia.mp3"
        },
        {
          word: "Boa tardi",
          translation: "Good afternoon",
          audioUrl: "/audio/boa-tardi.mp3"
        }
      ]
    },
    {
      title: "Common Phrases",
      phrases: [
        {
          word: "Obrigadu",
          translation: "Thank you",
          audioUrl: "/audio/obrigadu.mp3"
        },
        {
          word: "Por favor",
          translation: "Please",
          audioUrl: "/audio/por-favor.mp3"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <header className="p-6">
        <h1 className="text-2xl font-bold mb-2">{t("phrasebook.title")}</h1>
        <p className="text-gray-600">{t("phrasebook.subtitle")}</p>
      </header>

      <section className="px-6 space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-semibold">{category.title}</h2>
            <div className="grid gap-4">
              {category.phrases.map((phrase, phraseIndex) => (
                <VocabularyCard
                  key={phraseIndex}
                  word={phrase.word}
                  translation={phrase.translation}
                  audioUrl={phrase.audioUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <Navigation />
    </div>
  );
};

export default Phrasebook;