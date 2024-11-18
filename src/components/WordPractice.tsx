import { useState } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

interface WordPracticeProps {
  word: string;
  translation: string;
  audioUrl: string;
  onValidation: (isCorrect: boolean) => void;
}

const WordPractice = ({ word, translation, audioUrl, onValidation }: WordPracticeProps) => {
  const [userInput, setUserInput] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const playAudio = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isAnswerCorrect = userInput.toLowerCase().trim() === word.toLowerCase();
    setIsCorrect(isAnswerCorrect);
    onValidation(isAnswerCorrect);

    if (isAnswerCorrect) {
      toast({
        title: "Correct!",
        description: "Très bien! Continue comme ça!",
        duration: 2000,
      });
    } else {
      toast({
        title: "Pas tout à fait...",
        description: `La bonne réponse était: ${word}`,
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">Traduire en Kriolu:</p>
          <p className="font-medium">{translation}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={playAudio}
          className="text-primary hover:text-primary-dark"
        >
          <Volume2 className="w-6 h-6" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Écrivez votre réponse..."
          className={`w-full ${
            isCorrect === true
              ? "border-green-500"
              : isCorrect === false
              ? "border-red-500"
              : ""
          }`}
        />
        <div className="flex justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsRevealed(!isRevealed)}
            className="flex-1"
          >
            {isRevealed ? "Cacher" : "Voir la réponse"}
          </Button>
          <Button type="submit" className="flex-1">
            Vérifier
          </Button>
        </div>
      </form>

      {isRevealed && (
        <div className="mt-3 p-2 bg-gray-50 rounded-lg">
          <p className="text-center text-primary font-medium">{word}</p>
        </div>
      )}
    </div>
  );
};

export default WordPractice;