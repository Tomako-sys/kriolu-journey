import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LessonCard from "@/components/LessonCard";

const Lessons = () => {
  const { t } = useLanguage();

  const lessons = [
    {
      title: "Basic Greetings",
      description: "Learn essential greetings in Kriolu",
      progress: 75,
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Numbers & Counting",
      description: "Master numbers from 1 to 100",
      progress: 30,
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      title: "Family Members",
      description: "Learn words for family relationships",
      progress: 0,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Daily Activities",
      description: "Common verbs and actions",
      progress: 15,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <header className="p-6">
        <h1 className="text-2xl font-bold mb-2">{t("lessons.title")}</h1>
        <p className="text-gray-600">{t("lessons.subtitle")}</p>
      </header>

      <section className="px-6 grid gap-4">
        {lessons.map((lesson, index) => (
          <LessonCard 
            key={index}
            title={lesson.title}
            description={lesson.description}
            progress={lesson.progress}
            imageUrl={lesson.imageUrl}
          />
        ))}
      </section>

      <Navigation />
    </div>
  );
};

export default Lessons;