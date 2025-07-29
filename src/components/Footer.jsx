import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter } = FiIcons;

const Footer = () => {
  const footerLinks = {
    Services: [
      'WAiBOT AI Sales Agents',
      'Customer Care AI',
      'Software Development',
      'Ticket Factura',
      'Enterprise Solutions'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Blog',
      'Case Studies'
    ],
    Resources: [
      'Documentation',
      'API Reference',
      'Support Center',
      'Training',
      'Community'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Security',
      'Compliance'
    ]
  };

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/carlosserafin', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753292954833-apps%20camelot%20logo.png"
                  alt="AppsCamelot Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  AppsCamelot
                </h3>
                <p className="text-sm text-gray-400">AI Automation Services</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed"
            >
              Transforming businesses worldwide with cutting-edge AI solutions, WAiBOT - the ultimate AI Sales Expert Agents, and Ticket Factura for seamless electronic invoicing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <SafeIcon icon={FiMail} className="text-blue-400" />
                <span>administracion@appscamelot.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <SafeIcon icon={FiPhone} className="text-blue-400" />
                <span>+5214776307150</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <SafeIcon icon={FiMapPin} className="text-blue-400" />
                <span>León Guanajuato, México</span>
              </div>
            </motion.div>

            {/* Logo Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center space-x-4 pt-2"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753298591040-waibot-logo.png"
                  alt="WAiBOT Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbPbx15QZrEKxAWtKBRlymDQl6-wf21zUiw&s"
                  alt="Ticket Factura Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <SafeIcon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300">
                Get the latest news about AI innovations and industry insights.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © 2024 AppsCamelot. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Settings</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;