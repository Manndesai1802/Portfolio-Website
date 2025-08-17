import { motion } from 'framer-motion';
import { Home, GraduationCap, Briefcase, Code2, FolderOpen, Mail } from 'lucide-react';

const MobileNavbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'education', label: 'Educ.', icon: GraduationCap },
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
      // initial={{ y: 100, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden"
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'text-primary-600'
                  : 'text-gray-500'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileNavbar;