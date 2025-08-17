import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - Computer Engineering',
      school: 'Birla VIshvakarma Mahavidyalaya',
      location: 'Anand, Gujarat',
      period: '2020 - 2024',
      status: 'Currently Pursuing',
      description: 'Focused on computer science fundamentals, software engineering principles, and modern programming technologies. Maintained strong academic performance while gaining industry experience.',
      highlights: [
        'Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering',
        'Project-based learning with hands-on development experience',
        'Active participation in coding competitions and technical events',
        'Balanced academics with professional work experience'
      ],
      cpi: '8.42/10.0'
    },
    {
      degree: 'Higher Secondary Education (Science Stream)',
      school: 'D. N. High School',
      location: 'Anand, Gujarat',
      period: '2018 - 2020',
      status: 'Completed',
      description: 'Studied Physics, Chemistry, and Mathematics with a focus on preparing for engineering entrance exams.',
      highlights: [
        'Strong foundation in core science subjects',
        'Participated in academic and co-curricular activities',
        'Consistently scored well in internal and board exams'
      ],
      percentage: '89.66%'
    },
    {
      degree: 'Secondary School Education (10th Grade)',
      school: 'D. N. High School',
      location: 'Anand, Gujarat',
      period: '2017 - 2018',
      status: 'Completed',
      description: 'Completed foundational education with an emphasis on mathematics, science, and language skills.',
      highlights: [
        'Excelled in mathematics and science subjects',
        'Actively involved in school-level competitions and activities',
        'Achieved distinction in final board examinations'
      ],
      percentage: '92.66%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary-200"></div>

              {/* Timeline Node */}
              <div className="absolute left-6 top-12 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content Card */}
              <div className="ml-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-primary-600 font-semibold mb-2">
                        <GraduationCap size={18} className="mr-2" />
                        {edu.school}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      {/* <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {edu.status}
                      </span> */}
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-bold">
                        {edu.cpi && `CPI: ${edu.cpi}` || edu.percentage && `Percentage: ${edu.percentage}` }
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <div className="grid gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <motion.div
                          key={hIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: hIndex * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </motion.div>
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

export default Education;