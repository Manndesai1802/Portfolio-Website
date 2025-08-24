import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters')
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);
      setErrors({});

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach(err => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'manndesai03@gmail.com',
      href: 'mailto:manndesai03@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 88491 09513',
      href: 'tel:+918849109513'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Anand, Gujarat, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Manndesai1802', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mann-desai-2962a11bb', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm always interested in new opportunities, collaborations, or just a chat about
                technology. Whether you have a project in mind, want to discuss potential opportunities,
                or simply want to connect, feel free to reach out!
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm currently open to full-time opportunities and freelance projects. Let's discuss how we
                can work together to bring your ideas to life.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{info.label}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hi!"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                </div>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;