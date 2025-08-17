import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import mannImage from '../assets/ProfilePhoto.jpeg';

const Hero = () => {
  // Data configuration
  const heroData = {
    name: 'Mann Desai',
    title: 'Software Developer',
    description: 'I am a software engineer with over 2 years of experience in developing useful and creative software. I have worked in different software companies and handled both frontend and backend projects. I enjoy turning ideas into real, working applications using clean and simple code.',
    resumeUrl: '/MannDesai_Resume.pdf',
    resumeFileName: 'MannDesai_Resume.pdf',
    email: 'manndesai03@gmail.com',
    socialLinks: [
      { icon: Github, href: 'https://github.com/Manndesai1802', label: 'GitHub' },
      { icon: Linkedin, href: 'https://www.linkedin.com/in/mann-desai-2962a11bb', label: 'LinkedIn' },
    ]
  };

  // Animation configuration
  const animationConfig = {
    container: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8 }
    },
    heading: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.2 }
    },
    subtitle: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.4 }
    },
    description: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.6 }
    },
    buttons: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.8 }
    },
    socials: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 1 }
    },
    imageContainer: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, delay: 0.3 }
    },
    scrollIndicator: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8, delay: 1.2 }
    }
  };

  // Handlers
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = heroData.resumeUrl;
    link.download = heroData.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            {...animationConfig.container}
            className="order-2 md:order-1 space-y-6"
          >
            <motion.h1
              {...animationConfig.heading}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                {heroData.name}
              </span>
            </motion.h1>

            <motion.p
              {...animationConfig.subtitle}
              className="text-xl md:text-2xl text-gray-600 font-medium"
            >
              {heroData.title}
            </motion.p>

            <motion.p
              {...animationConfig.description}
              className="text-gray-600 text-lg leading-relaxed"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              {...animationConfig.buttons}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${heroData.email}`}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-primary-700 transition-colors"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-primary-600 hover:text-white transition-colors"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            <motion.div
              {...animationConfig.socials}
              className="flex space-x-4 pt-4"
            >
              {heroData.socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            {...animationConfig.imageContainer}
            className="flex justify-center order-1 md:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img
                    src={mannImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-300"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          {...animationConfig.scrollIndicator}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;