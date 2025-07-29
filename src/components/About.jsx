import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiUsers, FiAward, FiTrendingUp, FiGlobe, FiCpu, FiExternalLink } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiUsers, value: '500k+', label: 'Happy Clients' },
    { icon: FiGlobe, value: '150+', label: 'IT Projects developed' },
    { icon: FiCpu, value: '1,700+', label: 'AI Smart Conversations' },
    { icon: FiAward, value: '98%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Innovation First',
      description: 'We stay at the forefront of AI technology, constantly innovating to deliver cutting-edge solutions.'
    },
    {
      icon: FiUsers,
      title: 'Client Success',
      description: 'Your success is our mission. We work closely with clients to ensure exceptional results and ROI.'
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Growth',
      description: 'We believe in continuous improvement and helping our clients scale their businesses effectively.'
    }
  ];

  const products = [
    {
      name: "WAiBOT",
      description: "AI-powered sales assistant that transforms customer interactions",
      logo: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753298591040-waibot-logo.png",
      link: "https://waibot.io"
    },
    {
      name: "Ticket Factura",
      description: "Streamlined electronic invoicing solution for businesses",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbPbx15QZrEKxAWtKBRlymDQl6-wf21zUiw&s",
      link: "https://www.ticketfactura.com"
    },
    {
      name: "HabitTube",
      description: "AI-powered habit building through personalized YouTube content",
      logo: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753377427340-HabitTube%20logo%20cuadrado.png",
      link: "https://app.habittube.io"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">AppsCamelot</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading AI Factory Business specializing in software development and artificial intelligence solutions that transform how businesses operate and engage with their customers.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2011 with a vision to democratize AI technology, AppsCamelot has grown from a small startup to a recognized leader in AI-powered business solutions. Our journey began with a simple belief: every business, regardless of size, should have access to intelligent automation that drives growth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to have completed over 150+ ad-hoc software development projects, with our flagship products WAiBOT and Ticket Factura leading the way in AI sales automation and electronic invoicing. Our team of expert developers, AI specialists, and business strategists work tirelessly to create solutions that not just meet, but exceed expectations.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Our Mission</h4>
              <p className="text-blue-100">
                To empower businesses worldwide with intelligent AI solutions that drive growth, enhance customer experiences, and unlock new possibilities for success.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h4>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <SafeIcon icon={stat.icon} className="text-white text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Our Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.logo} 
                        alt={`${product.name} Logo`} 
                        className="w-12 h-12 object-contain" 
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">{product.name}</h4>
                      <SafeIcon icon={FiExternalLink} className="text-blue-500 text-sm mt-1" />
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Expert Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of AI specialists, software engineers, and business strategists brings decades of combined experience in delivering exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { role: 'IT Architect', count: '25+ years exp.' },
              { role: 'AI Engineers', count: '5+' },
              { role: 'IT Dev Projects', count: '150+' },
              { role: 'Business Analysts', count: '5+' }
            ].map((team, index) => (
              <motion.div
                key={team.role}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{team.count}</div>
                <div className="text-gray-700 font-medium">{team.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;