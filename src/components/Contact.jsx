import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiGlobe } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    services: {
      aiAutomation: false,
      aiChatbot: false,
      mvpWebApp: false,
      enterpriseWebApp: false,
      other: false
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare services selected for email
    const selectedServices = Object.entries(formData.services)
      .filter(([_, isSelected]) => isSelected)
      .map(([service]) => {
        const serviceNames = {
          aiAutomation: "AI Automation for company",
          aiChatbot: "AI Chatbot",
          mvpWebApp: "MVP Web Application for startup",
          enterpriseWebApp: "Enterprise-grade Web Application",
          other: "Other services"
        };
        return serviceNames[service];
      })
      .join(", ");

    // Prepare email content
    const emailSubject = `New Contact Form Submission from ${formData.name}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Website: ${formData.website || 'Not provided'}
Services Interested In: ${selectedServices || 'None selected'}
Message:
${formData.message}
    `;

    // Send email using mailto link
    window.location.href = `mailto:appscamelot@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      message: '',
      services: {
        aiAutomation: false,
        aiChatbot: false,
        mvpWebApp: false,
        enterpriseWebApp: false,
        other: false
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (service) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [service]: !formData.services[service]
      }
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'administracion@appscamelot.com',
      link: 'mailto:administracion@appscamelot.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+5214776307150',
      link: 'tel:+5214776307150'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'León Guanajuato, México',
      link: '#'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      value: 'Mon-Fri 9AM-6PM CST',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how AppsCamelot can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <SafeIcon icon={info.icon} className="text-white text-lg" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.title}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <SafeIcon icon={FiGlobe} className="text-2xl" />
                <h4 className="text-xl font-bold">High Availability SaaS and Support Service</h4>
              </div>
              <p className="text-blue-100 mb-4">
                Providing reliable, scalable solutions with dedicated support to ensure your business operations run smoothly around the clock.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-blue-200">Uptime</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What services are you interested in? *
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="aiAutomation"
                      checked={formData.services.aiAutomation}
                      onChange={() => handleServiceChange('aiAutomation')}
                      className="mt-1 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="aiAutomation" className="ml-2 text-gray-700">
                      AI Automation for my company
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="aiChatbot"
                      checked={formData.services.aiChatbot}
                      onChange={() => handleServiceChange('aiChatbot')}
                      className="mt-1 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="aiChatbot" className="ml-2 text-gray-700">
                      AI Chatbot solution
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="mvpWebApp"
                      checked={formData.services.mvpWebApp}
                      onChange={() => handleServiceChange('mvpWebApp')}
                      className="mt-1 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="mvpWebApp" className="ml-2 text-gray-700">
                      MVP Web App for startup
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="enterpriseWebApp"
                      checked={formData.services.enterpriseWebApp}
                      onChange={() => handleServiceChange('enterpriseWebApp')}
                      className="mt-1 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="enterpriseWebApp" className="ml-2 text-gray-700">
                      Enterprise Web Application
                    </label>
                  </div>
                  
                  <div className="flex items-start md:col-span-2">
                    <input
                      type="checkbox"
                      id="other"
                      checked={formData.services.other}
                      onChange={() => handleServiceChange('other')}
                      className="mt-1 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="other" className="ml-2 text-gray-700">
                      Other services
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span>Send Message</span>
                <SafeIcon icon={FiSend} className="text-lg" />
              </motion.button>
            </form>
            <p className="text-sm text-gray-600 mt-4 text-center">
              We'll get back to you within 24 hours during business days.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;