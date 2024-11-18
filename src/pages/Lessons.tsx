import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LessonCard from "@/components/LessonCard";

const Lessons = () => {
  const { t } = useLanguage();

  const lessons = [
    {
      title: "Basics 1",
      description: "Learn essential greetings and simple phrases",
      progress: 75,
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Numbers",
      description: "Count from 1 to 100 in Kriolu",
      progress: 30,
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      title: "Family",
      description: "Learn words for family members",
      progress: 0,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Food & Drinks",
      description: "Essential vocabulary for restaurants and meals",
      progress: 0,
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Travel",
      description: "Useful phrases for getting around",
      progress: 0,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-sand-light">
      <header className="p-6 bg-primary text-white">
        <h1 className="text-2xl font-bold mb-2">{t("lessons.title")}</h1>
        <p className="text-sm opacity-90">{t("lessons.subtitle")}</p>
      </header>

      <section className="p-4 grid gap-4">
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