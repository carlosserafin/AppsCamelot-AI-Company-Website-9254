import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLinkedin, FiAward, FiTrendingUp, FiUsers, FiCode } = FiIcons;

const CEOSection = () => {
  const achievements = [
    {
      icon: FiCode,
      title: '25+ Years',
      description: 'IT Architecture Experience'
    },
    {
      icon: FiUsers,
      title: '150+ Projects',
      description: 'Successfully Delivered'
    },
    {
      icon: FiTrendingUp,
      title: 'AI Innovation',
      description: 'Leading Digital Transformation'
    },
    {
      icon: FiAward,
      title: 'Industry Expert',
      description: 'Software Development & AI'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              CEO
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leadership driving innovation in AI and software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl opacity-20 blur-xl"></div>
              
              {/* CEO Image */}
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-2">
                <img
                  src="https://appscamelot.com/wp-content/uploads/2025/11/carlos-serafin.jpeg"
                  alt="Carlos Serafín - CEO of AppsCamelot"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiAward} className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">25+ Years</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - CEO Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Carlos Serafín
              </h3>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                CEO & Founder, AppsCamelot
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-6"></div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              With over 25 years of experience as an IT Architect, Carlos Serafín leads AppsCamelot's 
              mission to revolutionize business operations through artificial intelligence and innovative 
              software solutions. His vision has guided the development of groundbreaking products like 
              WAiBOT, transforming how companies engage with customers and optimize their sales processes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Under his leadership, AppsCamelot has successfully delivered 150+ custom software projects 
              and established itself as a pioneer in AI automation services. Carlos's deep expertise in 
              software architecture and passion for technological innovation continue to drive the company's 
              growth and success in the rapidly evolving AI landscape.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                      <SafeIcon icon={achievement.icon} className="text-white text-lg" />
                    </div>
                    <div className="font-bold text-gray-900">{achievement.title}</div>
                  </div>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <motion.a
              href="https://www.linkedin.com/in/carlosserafin/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <SafeIcon icon={FiLinkedin} className="text-xl" />
              <span>Connect on LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl font-bold text-white/20 mb-4">"</div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
              Our mission is to democratize AI technology, making it accessible and beneficial 
              for businesses of all sizes. Through innovation and dedication, we're building 
              solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
            </blockquote>
            <div className="h-1 w-20 bg-white/30 mx-auto mb-4"></div>
            <cite className="text-lg font-semibold not-italic">
              Carlos Serafín, CEO & Founder
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CEOSection;