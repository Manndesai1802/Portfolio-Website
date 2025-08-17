import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Portfolio': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Education', href: '#education' },
      { name: 'Experience', href: '#experience' }
    ],
    'Quick Links': [
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
      { name: 'Resume', href: '/resume.pdf' }
    ],
  };

  const contactInfo = {
    email: 'manndesai03@gmail.com',
    phone: '+91 88491 09513',
    location: 'Anand, Gujarat, India'
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Mann Desai</h3>
            <p className="text-gray-400 leading-relaxed">
              Software developer crafting digital experiences
              with modern technologies. Let's build something amazing
              together.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/Manndesai1802', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mann-desai-2962a11bb', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:manndesai03@gmail.com', label: 'Email' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mann Desai.
            {/* Made with{' '}
            <Heart size={16} className="inline text-red-500 mx-1" /> using React.js */}
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed & Developed by Mann Desai
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;