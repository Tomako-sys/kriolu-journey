import { useState } from "react";
import { Volume2 } from "lucide-react";

interface VocabularyCardProps {
  word: string;
  translation: string;
  audioUrl: string;
}

const VocabularyCard = ({ word, translation, audioUrl }: VocabularyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const playAudio = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div 
      className="card cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative transform transition-all duration-500 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
        <div className="flex flex-col items-center space-y-4 backface-hidden">
          <h3 className="text-2xl font-bold text-gray-800">{word}</h3>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              playAudio();
            }}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <Volume2 className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-y-180 backface-hidden">
          <p className="text-xl text-gray-600">{translation}</p>
        </div>
      </div>
    </div>
  );
};

export default VocabularyCard;