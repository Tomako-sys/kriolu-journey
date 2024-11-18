import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LessonCard from "@/components/LessonCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const Lessons = () => {
  const { t } = useLanguage();

  const lessonCategories = [
    {
      title: "Basics",
      lessons: [
        {
          title: "Greetings & Introductions",
          description: "Learn essential greetings and how to introduce yourself",
          progress: 75,
          imageUrl: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d"
        },
        {
          title: "Numbers 1-20",
          description: "Master counting in Kriolu",
          progress: 30,
          imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904"
        },
        {
          title: "Common Phrases",
          description: "Essential everyday expressions",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f"
        }
      ]
    },
    {
      title: "Daily Life",
      lessons: [
        {
          title: "Family Members",
          description: "Learn words for family relationships",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300"
        },
        {
          title: "Food & Drinks",
          description: "Essential vocabulary for restaurants and meals",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        },
        {
          title: "Shopping",
          description: "Learn how to shop and bargain in Kriolu",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc"
        }
      ]
    },
    {
      title: "Grammar",
      lessons: [
        {
          title: "Present Tense",
          description: "Basic verb conjugations in present tense",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
        },
        {
          title: "Past Tense",
          description: "Express actions in the past",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d"
        },
        {
          title: "Questions",
          description: "Learn to form questions in Kriolu",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
        }
      ]
    },
    {
      title: "Culture & Travel",
      lessons: [
        {
          title: "Cape Verde Geography",
          description: "Learn about the islands and locations",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        },
        {
          title: "Local Customs",
          description: "Understanding Cape Verdean traditions",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1"
        },
        {
          title: "Travel Phrases",
          description: "Essential vocabulary for travelers",
          progress: 0,
          imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-sand-light">
      <header className="p-6 bg-primary text-white">
        <h1 className="text-2xl font-bold mb-2">{t("lessons.title")}</h1>
        <p className="text-sm opacity-90">{t("lessons.subtitle")}</p>
      </header>

      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4">
          {lessonCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h2>
              <div className="grid gap-4">
                {category.lessons.map((lesson, lessonIndex) => (
                  <LessonCard 
                    key={lessonIndex}
                    title={lesson.title}
                    description={lesson.description}
                    progress={lesson.progress}
                    imageUrl={lesson.imageUrl}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <Navigation />
    </div>
  );
};

export default Lessons;