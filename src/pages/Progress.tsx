import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Target, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";

const Progress = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      label: "Niveau",
      value: "2",
    },
    {
      icon: <Target className="w-6 h-6 text-secondary" />,
      label: "Points XP",
      value: "450",
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-500" />,
      label: "Jours de suite",
      value: "5",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      label: "Temps total",
      value: "3h 20m",
    },
  ];

  const achievements = [
    {
      title: "Premier Pas",
      description: "Complétez votre première leçon",
      progress: 100,
    },
    {
      title: "Vocabulaire de Base",
      description: "Apprenez 50 mots",
      progress: 75,
    },
    {
      title: "Conversation",
      description: "Complétez 5 exercices de prononciation",
      progress: 40,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <header className="p-6">
        <h1 className="text-2xl font-bold mb-2">Progrès</h1>
        <p className="text-gray-600">Suivez votre progression dans l'apprentissage du Kriolu</p>
      </header>

      <section className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 flex flex-col items-center justify-center space-y-2">
              {stat.icon}
              <span className="text-sm text-gray-600">{stat.label}</span>
              <span className="text-xl font-bold">{stat.value}</span>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Objectifs</h2>
          {achievements.map((achievement, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
                <span className="text-sm font-medium text-primary">
                  {achievement.progress}%
                </span>
              </div>
              <ProgressBar progress={achievement.progress} />
            </div>
          ))}
        </div>
      </section>

      <Navigation />
    </div>
  );
};

export default Progress;