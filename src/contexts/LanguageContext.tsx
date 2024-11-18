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
    "nav.community": "Community",
    "welcome": "Ready to continue your Kriolu journey?",
    "daily.vocabulary": "Daily Vocabulary",
    "next.word": "Next Word",
    "continue.learning": "Continue Learning",
    "lessons.title": "Lessons",
    "lessons.subtitle": "Start learning Kriolu step by step",
    "culture.title": "Cultural Insights",
    "culture.subtitle": "Discover Cape Verdean culture",
    "community.title": "Community",
    "community.subtitle": "Connect with other learners",
    "settings.title": "Settings",
    "settings.subtitle": "Customize your learning experience",
    "settings.language": "Interface Language",
    "settings.notifications": "Notifications",
    "settings.offline": "Offline Content",
    "settings.profile": "Profile",
    "phrasebook.title": "Phrasebook",
    "phrasebook.subtitle": "Essential phrases for daily use",
    "listen": "Listen"
  },
  pt: {
    "nav.lessons": "Lições",
    "nav.practice": "Prática",
    "nav.progress": "Progresso",
    "nav.community": "Comunidade",
    "welcome": "Pronto para continuar sua jornada em Kriolu?",
    "daily.vocabulary": "Vocabulário Diário",
    "next.word": "Próxima Palavra",
    "continue.learning": "Continuar Aprendendo",
    "lessons.title": "Lições",
    "lessons.subtitle": "Comece a aprender Kriolu passo a passo",
    "culture.title": "Aspectos Culturais",
    "culture.subtitle": "Descubra a cultura cabo-verdiana",
    "community.title": "Comunidade",
    "community.subtitle": "Conecte-se com outros aprendizes",
    "settings.title": "Configurações",
    "settings.subtitle": "Personalize sua experiência de aprendizado",
    "settings.language": "Idioma da Interface",
    "settings.notifications": "Notificações",
    "settings.offline": "Conteúdo Offline",
    "settings.profile": "Perfil",
    "phrasebook.title": "Guia de Frases",
    "phrasebook.subtitle": "Frases essenciais para uso diário",
    "listen": "Ouvir"
  },
  fr: {
    "nav.lessons": "Leçons",
    "nav.practice": "Pratique",
    "nav.progress": "Progrès",
    "nav.community": "Communauté",
    "welcome": "Prêt à continuer votre voyage en Kriolu ?",
    "daily.vocabulary": "Vocabulaire Quotidien",
    "next.word": "Mot Suivant",
    "continue.learning": "Continuer l'Apprentissage",
    "lessons.title": "Leçons",
    "lessons.subtitle": "Commencez à apprendre le Kriolu étape par étape",
    "culture.title": "Aspects Culturels",
    "culture.subtitle": "Découvrez la culture cap-verdienne",
    "community.title": "Communauté",
    "community.subtitle": "Connectez-vous avec d'autres apprenants",
    "settings.title": "Paramètres",
    "settings.subtitle": "Personnalisez votre expérience d'apprentissage",
    "settings.language": "Langue de l'Interface",
    "settings.notifications": "Notifications",
    "settings.offline": "Contenu Hors Ligne",
    "settings.profile": "Profil",
    "phrasebook.title": "Guide de Phrases",
    "phrasebook.subtitle": "Phrases essentielles pour usage quotidien",
    "listen": "Écouter"
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