import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  // const experiences = [
  //   {
  //     title: 'Software Developer',
  //     company: 'Company Name 3',
  //     location: 'City, State',
  //     period: 'Jan 2024 - Present',
  //     status: 'Full-time',
  //     description: 'Currently working on developing scalable web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.',
  //     responsibilities: [
  //       'Developing and maintaining web applications using React.js and Node.js',
  //       'Implementing responsive UI/UX designs with modern CSS frameworks',
  //       'Collaborating with backend teams for API integration and optimization',
  //       'Participating in code reviews and maintaining coding standards',
  //       'Contributing to architectural decisions and technical documentation'
  //     ],
  //     technologies: ['React.js', 'Node.js', 'JavaScript', 'CSS3', 'Git', 'Agile']
  //   }
  // ];
const experiences = [
  {
    title: 'Software Developer',
    company: 'Etech International Inc.',
    location: 'Gujarat, India',
    period: 'May 2024 - Present',
    status: 'Full-time',
    description:
      'Working as a Software Developer focusing on enterprise-grade applications using modern web technologies and Microsoft stack.',
    responsibilities: [
      'Developing and maintaining scalable applications using React.js, TypeScript, C#, and .NET Core.',
      'Participating in debugging, feature development, and live issue resolution.',
      'Collaborating in Agile teams using Jira for task tracking and Bitbucket for version control.',
      'Writing reusable, clean, and optimized code for both frontend and backend.',
      'Ensuring code quality through unit testing and peer reviews.'
    ],
    technologies: ['React.js', 'TypeScript', 'C#', '.NET Core', 'SQL Server', 'Bitbucket', 'Jira']
  },
  {
    title: 'Internship Trainee',
    company: 'Etech International Inc.',
    location: 'Gujarat, India',
    period: 'Dec 2023 - Apr 2024',
    status: 'Internship',
    description:
      'Completed a 5-month internship program working on real-world modules and basic functionalities using .NET Core and React.',
    responsibilities: [
      'Built and tested basic modules in React and .NET Core.',
      'Learned and implemented foundational concepts of full-stack development.',
      'Collaborated with senior developers for code debugging and improvements.',
      'Participated in sprint planning, documentation, and code walkthroughs.'
    ],
    technologies: ['React.js', 'TypeScript', '.NET Core', 'SQL Server']
  },
  {
    title: 'Project Intern',
    company: 'Conveyor Industries',
    location: 'Anand, Gujarat, India',
    period: 'Jun 2023 - Jul 2023',
    status: 'Full-time',
    description:
      'Worked on a short-term industrial project during the summer internship program.',
    responsibilities: [
      'Assisted in developing and testing web components.',
      'Documented code and created small utilities for project use.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Summer Intern (Web + IoT Developer)',
    company: 'Code Potato Software Pvt. Ltd.',
    location: 'Anand, Gujarat, India',
    period: 'May 2023 - Jun 2023',
    status: 'Internship',
    description:
      'Worked as a Web Developer with IoT integration during the summer internship.',
    responsibilities: [
      'Developed web interfaces integrated with IoT using Blynk and Node MCU.',
      'Created dashboards and controlled IoT hardware using custom web UI.',
      'Used Arduino IDE and Blynk for prototyping.'
    ],
    technologies: ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Node MCU', 'Blynk', 'Arduino IDE']
  },
  {
    title: 'Summer Intern (Full Stack Developer)',
    company: 'Code Potato Software Pvt. Ltd.',
    location: 'Anand, Gujarat, India',
    period: 'May 2022 - Jun 2022',
    status: 'Internship',
    description:
      'Worked on full-stack web development projects using open-source technologies.',
    responsibilities: [
      'Built CRUD operations using PHP and MySQL.',
      'Created responsive frontend using Bootstrap, HTML5, and CSS.',
      'Used jQuery for dynamic frontend interactivity.'
    ],
    technologies: ['PHP', 'HTML5', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PhpMyAdmin']
  }
];


  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12"
            >
              {/* Timeline Line */}
              {index < experiences.length  && (
                <div className="absolute left-8 top-16 h-32 w-0.5 bg-primary-200"></div>
              )}

              {/* Timeline Node */}
              <div className="absolute left-6 top-12 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content Card */}
              <div className="ml-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary-600 font-semibold mb-2">
                        <Briefcase size={18} className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.status}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                    <div className="grid gap-2">
                      {exp.responsibilities.map((responsibility, rIndex) => (
                        <motion.div
                          key={rIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: rIndex * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{responsibility}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIndex) => (
                        <motion.span
                          key={tIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: tIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;