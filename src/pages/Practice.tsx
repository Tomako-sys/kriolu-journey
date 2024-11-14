import { useLanguage } from "@/contexts/LanguageContext";
import { Mic, Volume2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import VocabularyPractice from "@/components/VocabularyPractice";

const Practice = () => {
  const { t } = useLanguage();
  
  const handleRecordStart = () => {
    toast.info("Début de l'enregistrement...");
  };

  const handlePlayback = () => {
    toast.info("Lecture de l'audio...");
  };

  return (
    <div className="min-h-screen pb-20">
      <header className="p-6">
        <h1 className="text-2xl font-bold mb-2">Pratique</h1>
        <p className="text-gray-600">Améliorez votre prononciation et votre vocabulaire</p>
      </header>

      <section className="p-6 space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Exercice de Prononciation</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={handlePlayback}
                className="w-12 h-12 rounded-full"
              >
                <Volume2 className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleRecordStart}
                className="w-12 h-12 rounded-full bg-red-50 hover:bg-red-100 text-red-500"
              >
                <Mic className="h-6 w-6" />
              </Button>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Écoutez l'audio natif, puis enregistrez votre prononciation
            </p>
          </div>
        </Card>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Vocabulaire du Jour</h2>
            <Button variant="ghost" className="text-primary">
              Voir tout <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <VocabularyPractice />
        </div>
      </section>

      <Navigation />
    </div>
  );
};

export default Practice;