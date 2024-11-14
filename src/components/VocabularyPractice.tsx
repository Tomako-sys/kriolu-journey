import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Volume2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface Word {
  kriolu: string;
  translations: {
    en: string;
    pt: string;
    fr: string;
  };
  audioUrl: string;
  example: string;
}

const words: Word[] = [
  {
    kriolu: "Bon dia",
    translations: {
      en: "Good morning",
      pt: "Bom dia",
      fr: "Bonjour"
    },
    audioUrl: "/audio/bon-dia.mp3",
    example: "Bon dia, kumó bu stá?"
  },
  {
    kriolu: "Obrigadu",
    translations: {
      en: "Thank you",
      pt: "Obrigado",
      fr: "Merci"
    },
    audioUrl: "/audio/obrigadu.mp3",
    example: "Obrigadu pa bu ajuda"
  },
  {
    kriolu: "Por favor",
    translations: {
      en: "Please",
      pt: "Por favor",
      fr: "S'il vous plaît"
    },
    audioUrl: "/audio/por-favor.mp3",
    example: "Por favor, un kafé"
  }
];

const VocabularyPractice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const { language, t } = useLanguage();

  const currentWord = words[currentIndex];

  const playAudio = () => {
    toast.info("Playing audio...");
  };

  const nextWord = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % words.length);
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-semibold text-center mb-6">{t("daily.vocabulary")}</h2>
      
      <Card
        className={`relative h-64 cursor-pointer perspective-1000 transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="absolute inset-0 backface-hidden p-6 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold mb-4">{currentWord.kriolu}</h3>
          <Button
            variant="outline"
            size="icon"
            className="mt-4"
            onClick={(e) => {
              e.stopPropagation();
              playAudio();
            }}
          >
            <Volume2 className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="absolute inset-0 backface-hidden rotate-y-180 p-6 flex flex-col items-center justify-center">
          <p className="text-2xl mb-2">{currentWord.translations[language]}</p>
          <p className="text-sm text-gray-600 italic mt-2">{currentWord.example}</p>
        </div>
      </Card>

      <div className="flex justify-center mt-6">
        <Button onClick={nextWord} className="bg-primary text-white">
          {t("next.word")}
        </Button>
      </div>
    </div>
  );
};

export default VocabularyPractice;