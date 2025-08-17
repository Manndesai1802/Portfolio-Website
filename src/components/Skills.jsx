import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Globe } from 'lucide-react';
import { skills } from '../data/skills';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: skills.frontend,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: skills.backend,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Languages',
      icon: Globe,
      skills: skills.languages,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-primary-50 hover:text-primary-700 transition-all duration-300 cursor-pointer"
                    >
                      <div className="text-lg mb-1">{skill.icon}</div>
                      <div className="text-sm font-medium text-gray-700">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;