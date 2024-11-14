import React, { createContext, useContext, useState } from "react";

type Language = "en" | "pt" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.lessons": "Lessons",
    "nav.practice": "Practice",
    "nav.progress": "Progress",
    "nav.chat": "Chat",
    "welcome": "Ready to continue your Kriolu journey?",
    "daily.vocabulary": "Daily Vocabulary",
    "next.word": "Next Word",
    "continue.learning": "Continue Learning"
  },
  pt: {
    "nav.lessons": "Lições",
    "nav.practice": "Prática",
    "nav.progress": "Progresso",
    "nav.chat": "Chat",
    "welcome": "Pronto para continuar sua jornada Kriolu?",
    "daily.vocabulary": "Vocabulário Diário",
    "next.word": "Próxima Palavra",
    "continue.learning": "Continuar Aprendendo"
  },
  fr: {
    "nav.lessons": "Leçons",
    "nav.practice": "Pratique",
    "nav.progress": "Progrès",
    "nav.chat": "Chat",
    "welcome": "Prêt à continuer votre voyage en Kriolu?",
    "daily.vocabulary": "Vocabulaire Quotidien",
    "next.word": "Mot Suivant",
    "continue.learning": "Continuer l'Apprentissage"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};