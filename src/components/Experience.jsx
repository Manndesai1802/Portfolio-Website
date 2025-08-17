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
      title: 'Associate Software Engineer',
      company: 'Alois Solution Pvt. Ltd.',
      location: 'Vadodara, Gujarat',
      period: 'Nov 2024 - Present',
      status: 'Full-time',
      description:
        'Working as a Full-Stack Developer using JavaScript & .NET technologies, focusing on developing high-performance web applications.',
      responsibilities: [
        'Developing full-stack web applications using JavaScript and .NET technologies',
        'Enhanced system performance to exceed 90% and optimized SEO',
        'Improved user experience and accessibility across web platforms',
        'Utilized GitHub for version control and collaboration',
        'Followed Scrum methodology for effective project management'
      ],
      technologies: ['JavaScript', '.NET', 'GitHub', 'Scrum', 'HTML5', 'CSS3']
  },
    {
      title: 'Junior Software Engineer',
      company: 'Civica Resource Pvt. Ltd.',
      location: 'Vadodara, Gujarat',
      period: 'Feb 2024 - Nov 2024',
      status: 'Full-time',
      description:
        'Worked as a Full-Stack Developer on enterprise projects using .NET Core and React.js.',
      responsibilities: [
        'Developed applications using .NET Core 6 (MVC & API), EF Core, and React.js',
        'Used Azure DevOps for version control, CI/CD, and team collaboration',
        'Wrote unit tests to ensure code reliability and maintainability',
        'Collaborated with team members to meet project deadlines and ensure quality delivery'
      ],
      technologies: ['.NET Core 6', 'EF Core', 'React.js', 'Azure DevOps', 'CI/CD', 'Unit Testing']
    },
    {
      title: 'IDP Project - Intern',
      company: 'Venom Technologies',
      location: 'Anand, Gujarat',
      period: 'July 2023 - Dec 2023',
      status: 'Internship',
      description:
        'Developed a full-stack industrial project using the MERN stack, including frontend, backend, and deployment.',
      responsibilities: [
        'Built a full-stack web application using React.js, Node.js, MongoDB, and Express.js',
        'Integrated RESTful APIs for data handling and communication between client and server',
        'Deployed the application on the cloud for real-world accessibility',
        'Gained hands-on experience in both frontend and backend development'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Cloud Deployment']
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
              {index < experiences.length - 1 && (
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