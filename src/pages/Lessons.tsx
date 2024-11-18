import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import BackHomeButton from "@/components/BackHomeButton";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import WordPractice from "@/components/WordPractice";
import { useState } from "react";

const Lessons = () => {
  const { t } = useLanguage();
  const [points, setPoints] = useState(0);

  const handleWordValidation = (isCorrect: boolean) => {
    if (isCorrect) {
      setPoints(prev => prev + 10);
    }
  };

  const lessonCategories = [
    {
      title: "Les bases",
      lessons: [
        {
          title: "Salutations",
          content: [
            { type: "word", original: "Olá", translation: "Bonjour", audio: "/audio/ola.mp3" },
            { type: "word", original: "Bon dia", translation: "Bonjour (matin)", audio: "/audio/bondia.mp3" },
            { type: "word", original: "Bon tardi", translation: "Bonsoir", audio: "/audio/bontardi.mp3" },
          ]
        },
        {
          title: "Se présenter",
          content: [
            { type: "word", original: "Nha nomi é", translation: "Je m'appelle", audio: "/audio/nhanomi.mp3" },
            { type: "word", original: "Modi bu sta", translation: "Comment vas-tu", audio: "/audio/modibusta.mp3" },
            { type: "word", original: "N sta dretu", translation: "Je vais bien", audio: "/audio/nstadretu.mp3" },
          ]
        }
      ]
    },
    {
      title: "La vie quotidienne",
      lessons: [
        {
          title: "La nourriture",
          content: [
            { type: "word", original: "Kumida", translation: "Nourriture", audio: "/audio/kumida.mp3" },
            { type: "word", original: "Katxupa", translation: "Cachupa", audio: "/audio/katxupa.mp3" },
            { type: "word", original: "Pexe", translation: "Poisson", audio: "/audio/pexe.mp3" },
          ]
        },
        {
          title: "Les boissons",
          content: [
            { type: "word", original: "Águ", translation: "Eau", audio: "/audio/agu.mp3" },
            { type: "word", original: "Kafé", translation: "Café", audio: "/audio/kafe.mp3" },
            { type: "word", original: "Sumu", translation: "Jus", audio: "/audio/sumu.mp3" },
          ]
        }
      ]
    },
    {
      title: "La famille",
      lessons: [
        {
          title: "Les membres de la famille",
          content: [
            { type: "word", original: "Mai", translation: "Mère", audio: "/audio/mai.mp3" },
            { type: "word", original: "Pai", translation: "Père", audio: "/audio/pai.mp3" },
            { type: "word", original: "Irmon", translation: "Frère", audio: "/audio/irmon.mp3" },
          ]
        },
        {
          title: "Les relations",
          content: [
            { type: "word", original: "Família", translation: "Famille", audio: "/audio/familia.mp3" },
            { type: "word", original: "Amigu", translation: "Ami", audio: "/audio/amigu.mp3" },
            { type: "word", original: "Vizinhu", translation: "Voisin", audio: "/audio/vizinhu.mp3" },
          ]
        }
      ]
    },
    {
      title: "Les nombres",
      lessons: [
        {
          title: "Les chiffres de 1 à 10",
          content: [
            { type: "word", original: "Un", translation: "Un", audio: "/audio/un.mp3" },
            { type: "word", original: "Dos", translation: "Deux", audio: "/audio/dos.mp3" },
            { type: "word", original: "Tres", translation: "Trois", audio: "/audio/tres.mp3" },
          ]
        },
        {
          title: "Les dizaines",
          content: [
            { type: "word", original: "Dez", translation: "Dix", audio: "/audio/dez.mp3" },
            { type: "word", original: "Vinti", translation: "Vingt", audio: "/audio/vinti.mp3" },
            { type: "word", original: "Trinta", translation: "Trente", audio: "/audio/trinta.mp3" },
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-sand-light">
      <BackHomeButton />
      <header className="sticky top-0 z-10 p-6 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <h1 className="text-2xl font-bold mb-2">{t("lessons.title")}</h1>
        <p className="text-sm text-gray-600">{t("lessons.subtitle")}</p>
        <div className="mt-2 text-primary font-semibold">
          {t("practice.points")}: {points}
        </div>
      </header>

      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4">
          <Accordion type="single" collapsible className="space-y-4">
            {lessonCategories.length > 0 ? (
              lessonCategories.map((category, categoryIndex) => (
                <AccordionItem
                  key={categoryIndex}
                  value={`category-${categoryIndex}`}
                  className="border rounded-2xl bg-white overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center">
                      <h2 className="text-xl font-semibold">{category.title}</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 p-4">
                      {category.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="space-y-4">
                          <h3 className="font-semibold text-lg text-primary">
                            {lesson.title}
                          </h3>
                          <div className="grid gap-4">
                            {lesson.content.map((item, itemIndex) => (
                              <WordPractice
                                key={itemIndex}
                                word={item.original}
                                translation={item.translation}
                                audioUrl={item.audio}
                                onValidation={handleWordValidation}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p>Aucune catégorie disponible.</p>
            )}
          </Accordion>
        </div>
      </ScrollArea>

      <Navigation />
    </div>
  );
};

export default Lessons;