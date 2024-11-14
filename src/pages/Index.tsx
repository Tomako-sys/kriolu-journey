import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import LessonCard from "@/components/LessonCard";
import VocabularyPractice from "@/components/VocabularyPractice";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="p-6 mb-8">
        <h1 className="text-3xl font-bold mb-2 animate-fade-up">Bon dia!</h1>
        <p className="text-gray-600 animate-fade-up" style={{ animationDelay: "100ms" }}>
          {t("welcome")}
        </p>
      </header>

      {/* Progress Section */}
      <section className="px-6 mb-8">
        <ProgressBar progress={35} />
      </section>

      {/* Vocabulary Practice */}
      <section className="mb-12">
        <VocabularyPractice />
      </section>

      {/* Continue Learning */}
      <section className="px-6">
        <h2 className="text-2xl font-semibold mb-4">{t("continue.learning")}</h2>
        <div className="grid gap-4">
          <LessonCard 
            title="Basic Greetings"
            description="Learn essential greetings in Kriolu"
            progress={75}
            imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          />
          <LessonCard 
            title="Numbers & Counting"
            description="Master numbers from 1 to 100"
            progress={30}
            imageUrl="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
          />
        </div>
      </section>

      <Navigation />
    </div>
  );
};

export default Index;