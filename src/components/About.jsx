import { motion } from 'framer-motion';
import { Code2, Users, Trophy, BookOpen } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code2, value: '2+', label: 'Years Experience' },
    { icon: Users, value: '3', label: 'Companies Worked' },
    { icon: Trophy, value: '5+', label: 'Projects Completed' },
    { icon: BookOpen, value: 'B.Tech', label: 'Computer Engineering' }
  ];

  const focusAreas = [
    'Full-stack web development with React.js, Node.js & .Net Technologies',
    'Modern JavaScript frameworks and libraries',
    'Database design and optimization',
    'Cloud technologies and deployment',
    'Agile development methodologies'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-4">
              Software Engineer
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate software developerwith hands-on industry experience. With nearly 2 years of professional experience 
              across 3 software companies, I've developed a strong foundation in modern web technologies 
              and software development practices.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              My journey in technology started during my academic years where I created various projects 
              that sparked my interest in software development. This passion led me to work in the industry 
              while completing my studies, giving me a unique blend of theoretical knowledge and practical experience.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. My goal is to 
              create innovative solutions that make a real impact while building scalable and maintainable software systems.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Current Focus Areas:</h4>
              <ul className="space-y-2">
                {focusAreas.map((area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                    {area}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl text-center border border-primary-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;