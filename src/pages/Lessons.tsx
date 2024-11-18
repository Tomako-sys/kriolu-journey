import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

const Lessons = () => {
  const { t } = useLanguage();

  const lessonCategories = [
    {
      title: "Basics",
      lessons: [
        {
          title: "Greetings & Introductions",
          description: "Learn essential greetings and how to introduce yourself",
          content: [
            { type: "text", value: "Olá (Hello)" },
            { type: "text", value: "Bon dia (Good morning)" },
            { type: "text", value: "Bon tardi (Good afternoon)" },
            { type: "text", value: "Bon noti (Good night)" },
            { type: "text", value: "Nha nomi é... (My name is...)" },
          ],
          progress: 75,
          imageUrl: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d"
        },
        {
          title: "Numbers 1-20",
          description: "Master counting in Kriolu",
          content: [
            { type: "text", value: "Un (One)" },
            { type: "text", value: "Dos (Two)" },
            { type: "text", value: "Tres (Three)" },
            { type: "text", value: "Kuatu (Four)" },
            { type: "text", value: "Sinku (Five)" },
          ],
          progress: 30,
          imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904"
        }
      ]
    },
    {
      title: "Daily Life",
      lessons: [
        {
          title: "Food & Drinks",
          description: "Essential vocabulary for restaurants and meals",
          content: [
            { type: "text", value: "Kumida (Food)" },
            { type: "text", value: "Águ (Water)" },
            { type: "text", value: "Kafé (Coffee)" },
            { type: "text", value: "Pon (Bread)" },
            { type: "text", value: "Katxupa (Traditional dish)" },
          ],
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        },
        {
          title: "Shopping",
          description: "Learn how to shop and bargain in Kriolu",
          content: [
            { type: "text", value: "Kantu ki kusta? (How much is it?)" },
            { type: "text", value: "Mutu karu (Very expensive)" },
            { type: "text", value: "Baratu (Cheap)" },
            { type: "text", value: "Bu teni...? (Do you have...?)" },
          ],
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-sand-light">
      <header className="sticky top-0 z-10 p-6 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <h1 className="text-2xl font-bold mb-2">{t("lessons.title")}</h1>
        <p className="text-sm text-gray-600">{t("lessons.subtitle")}</p>
      </header>

      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4">
          <Accordion type="single" collapsible className="space-y-4">
            {lessonCategories.map((category, categoryIndex) => (
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
                  <div className="space-y-4 p-4">
                    {category.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="rounded-xl bg-gray-50 p-4 transition-all duration-200 hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold mb-1">{lesson.title}</h3>
                            <p className="text-sm text-gray-600">{lesson.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="space-y-2">
                          {lesson.content.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="p-3 bg-white rounded-lg shadow-sm"
                            >
                              {item.value}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-500 ease-out"
                            style={{ width: `${lesson.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>

      <Navigation />
    </div>
  );
};

export default Lessons;