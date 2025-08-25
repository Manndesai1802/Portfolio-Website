import { motion } from 'framer-motion';
import { Home, GraduationCap, Briefcase, Code2, FolderOpen, Mail, Sun, Moon } from 'lucide-react';

const MobileNavbar = ({ activeSection, setActiveSection, theme, setTheme }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    // { id: 'education', label: 'Educ.', icon: GraduationCap },
    { id: 'experience', label: 'Expe.', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Proj.', icon: FolderOpen },
    { id: 'contact', label: 'Cont.', icon: Mail }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50 md:hidden transition-colors duration-300"
    >
      <div className="flex items-center justify-around py-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-lg transition-colors ${activeSection === item.id ? 'text-primary-600' : 'text-gray-500 dark:text-gray-400'
                }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </motion.button>
          );
        })}

        {/* Theme Toggle Button */}
        <motion.button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center px-2 py-1 rounded-lg transition-colors text-gray-500 dark:text-gray-400"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          <span className="text-[11px] font-medium leading-tight">
            {theme === "light" ? "Dark" : "Light"}
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
