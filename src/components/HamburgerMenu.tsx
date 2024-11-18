import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
      { path: "/", label: `${t("nav.home")}.` },
      { path: "/lessons", label: `Leçons.` },
      { path: "/practice", label: `Pratique.` },
      { path: "/progress", label: `Progrès.` },
      { path: "/culture", label: `${t("nav.culture")}.` },
      { path: "/community", label: `Communauté.` },
      { path: "/settings", label: `${t("nav.settings")}.` },
    ];

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-primary" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-8">{t("menu.title")}</h2>
                <nav className="space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}