import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Mic, Volume2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import BackHomeButton from "@/components/BackHomeButton";
import VocabularyPractice from "@/components/VocabularyPractice";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Practice = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour ! Je suis votre assistant Kriolu. Je peux vous aider à pratiquer la langue. Essayez de me dire bonjour !"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const simulateAIResponse = async (userMessage: string) => {
    const responses = {
      "bonjour": "Olá! (Bonjour!) Comment puis-je vous aider à pratiquer le Kriolu aujourd'hui ?",
      "comment": "N sta dretu, obrigadu! (Je vais bien, merci!) Et vous ?",
      "merci": "Di nada! (De rien!) Voulez-vous apprendre d'autres expressions ?",
      "au revoir": "Txau! Ti logu! (Au revoir! À bientôt!) N'oubliez pas de revenir pratiquer !",
      "je m'appelle": "Nha nomi é [votre nom]! C'est comme ça qu'on se présente en Kriolu !",
      "parler": "Pour dire 'parler' en Kriolu, on dit 'papia'. Par exemple: N ta papia Kriolu (Je parle Kriolu)",
      default: "Hmm, essayons une expression simple en Kriolu. Que voulez-vous apprendre ?"
    };

    const lowerMessage = userMessage.toLowerCase();
    let response = responses.default;

    Object.entries(responses).forEach(([key, value]) => {
      if (lowerMessage.includes(key)) {
        response = value;
      }
    });

    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: "user" as const,
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse = await simulateAIResponse(input);
      
      setMessages(prev => [...prev, {
        role: "assistant",
        content: aiResponse
      }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pb-20">
        <BackHomeButton />
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-10 p-4 border-b">
          <h1 className="text-2xl font-bold">{t("practice.chat")}</h1>
          <p className="text-sm text-gray-600">{t("practice.chat.placeholder")}</p>
        </header>

        <main className="pt-24 px-4 pb-20">
          <Card className="mb-6">
            <div className="h-[400px] p-4 overflow-y-auto">
              <AnimatePresence>
                {messages.map((message, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    } mb-4`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <p className="text-sm">En train d'écrire...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message..."
                className="flex-1"
              />
              <Button type="button" variant="outline" size="icon">
                <Mic className="h-4 w-4" />
              </Button>
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Vocabulaire quotidien</h2>
            <VocabularyPractice />
          </div>
        </main>

        <Navigation />
      </div>
    </PageTransition>
  );
};

export default Practice;