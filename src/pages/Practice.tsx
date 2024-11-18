import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import VocabularyPractice from "@/components/VocabularyPractice";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Practice = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Bu ta papia Kriolu. Modi ki bu sta oji? (Hello! I speak Kriolu. How are you today?)"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const simulateAIResponse = async (userMessage: string) => {
    // Simulate AI responses based on common phrases
    const responses = {
      "hello": "Olá! Tudu dretu? (Hello! All good?)",
      "how are you": "N sta dretu, obrigadu! Bu sta dretu? (I'm good, thank you! Are you good?)",
      "yes": "Sabi! (Nice!)",
      "goodbye": "Txau! Ti logu! (Bye! See you later!)",
      "thank you": "Di nada! (You're welcome!)",
      default: "Ah, N ka ntendi dretu. Bu podi repiti? (Ah, I didn't understand well. Can you repeat?)"
    };

    // Simple matching logic
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
    if (!input.trim()) return;

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
    <div className="min-h-screen pb-20">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-10 p-4 border-b">
        <h1 className="text-2xl font-bold">Practice Kriolu</h1>
        <p className="text-sm text-gray-600">Chat with AI to practice conversations</p>
      </header>

      <main className="pt-24 px-4 pb-20">
        <Card className="mb-6">
          <ScrollArea className="h-[400px] p-4">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
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
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-2">
                    <p className="text-sm">Typing...</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Daily Vocabulary Practice</h2>
          <VocabularyPractice />
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Practice;