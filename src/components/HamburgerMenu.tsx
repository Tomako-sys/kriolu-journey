import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={toggleMenu}
        className="p-2 text-primary hover:text-primary/80 transition-colors"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg"
            >
              <div className="p-4">
                <nav className="space-y-4">
                  <Link to="/" className="block text-lg hover:text-primary" onClick={toggleMenu}>
                    {t("home")}
                  </Link>
                  <Link to="/practice" className="block text-lg hover:text-primary" onClick={toggleMenu}>
                    {t("practice")}
                  </Link>
                  <Link to="/lessons" className="block text-lg hover:text-primary" onClick={toggleMenu}>
                    {t("lessons")}
                  </Link>
                  <Link to="/culture" className="block text-lg hover:text-primary" onClick={toggleMenu}>
                    {t("culture")}
                  </Link>
                  <Link to="/settings" className="block text-lg hover:text-primary" onClick={toggleMenu}>
                    {t("settings")}
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;