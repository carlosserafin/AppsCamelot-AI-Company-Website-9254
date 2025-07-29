import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBot, FiCode, FiUsers, FiTrendingUp, FiMessageCircle, FiShield, FiPlay, FiTarget, FiExternalLink } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiBot,
      title: 'WAiBOT AI Sales Agents',
      description: 'Intelligent AI agents that boost sales performance across any industry with personalized customer interactions.',
      features: ['24/7 Sales Support', 'Lead Qualification', 'Conversion Optimization'],
      logo: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753298591040-waibot-logo.png",
      link: "https://waibot.io"
    },
    {
      icon: FiMessageCircle,
      title: 'Customer Care AI Agents',
      description: 'Advanced AI-powered customer support that provides instant, accurate responses and exceptional service.',
      features: ['Instant Response', 'Multi-language Support', 'Sentiment Analysis']
    },
    {
      icon: FiCode,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your specific business needs.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions']
    },
    {
      icon: FiTrendingUp,
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with our AI-powered analytics and reporting solutions.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Performance Metrics']
    },
    {
      icon: FiUsers,
      title: 'AI Consultation',
      description: 'Expert guidance on implementing AI solutions that drive growth and operational efficiency.',
      features: ['Strategy Planning', 'Implementation Support', 'Training & Support']
    },
    {
      icon: FiShield,
      title: 'Ticket Factura',
      description: 'Scalable, secure electronic invoicing solution designed for businesses of all sizes.',
      features: ['Security Compliance', 'Easy Integration', 'Automated Processing'],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbPbx15QZrEKxAWtKBRlymDQl6-wf21zUiw&s",
      link: "https://www.ticketfactura.com"
    }
  ];

  const ServiceCard = ({ service, index }) => {
    const CardContent = (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
      >
        <div className="flex items-center space-x-4 mb-4">
          {service.logo ? (
            <div className="w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={service.logo}
                alt={`${service.title} Logo`}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <SafeIcon icon={service.icon} className="text-white text-2xl" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            {service.link && (
              <SafeIcon icon={FiExternalLink} className="text-blue-500 text-sm mt-1" />
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
        
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );

    return service.link ? (
      <a 
        href={service.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full"
      >
        {CardContent}
      </a>
    ) : (
      CardContent
    );
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and software development solutions to transform your business operations and drive growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* WAiBOT Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753298591040-waibot-logo.png" 
                    alt="WAiBOT Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold">WAiBOT: The Future of Sales</h3>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our flagship AI Sales Expert Agents are revolutionizing how businesses interact with customers. 
                WAiBOT combines advanced natural language processing, machine learning, and industry-specific 
                knowledge to deliver exceptional sales results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '1700+ Smart sales conversations and growing', value: ' ' },
                  { label: 'Avg. Sales Increase', value: '45%' },
                  { label: 'Customer Satisfaction', value: '96%' },
                  { label: 'Response Time', value: '<1s' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753298591040-waibot-logo.png" 
                      alt="WAiBOT Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold">WAiBOT Features</span>
                </div>
                <ul className="space-y-2 text-blue-100">
                  <li>• Industry-specific knowledge base</li>
                  <li>• Real-time customer sentiment analysis</li>
                  <li>• Automated lead scoring and qualification</li>
                  <li>• Seamless CRM integration</li>
                  <li>• Multi-channel support (web, mobile, voice)</li>
                  <li>• Advanced analytics and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ticket Factura Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center justify-center">
              <img 
                src="https://50friends.pv1.mx/FotoCfdi/imagenes/Logo-TF.png" 
                alt="Ticket Factura Logo" 
                className="max-w-xs w-full h-auto mb-6"
              />
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Invoices Processed', value: '1M+' },
                  { label: 'Business Users', value: '5,000+' },
                  { label: 'Accuracy Rate', value: '99.9%' },
                  { label: 'Processing Time', value: '<2s' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ticket Factura: Simplified Electronic Invoicing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our electronic invoicing solution streamlines your billing processes with automated, 
                compliant, and secure invoice generation. Ticket Factura integrates seamlessly with your 
                existing systems to provide hassle-free tax documentation.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 text-blue-700">Key Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Fully compliant with tax regulations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Automated invoice generation and delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Secure document storage and retrieval</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Easy integration with accounting systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Real-time status tracking and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* HabitTube Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753377427340-HabitTube%20logo%20cuadrado.png" 
                    alt="HabitTube Logo" 
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Introducing HabitTube</h3>
                  <p className="text-lg text-purple-600 font-medium">Elevating Personal Development with AI</p>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Unlock Your Full Potential</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As part of our commitment to creating transformative solutions, HabitTube is a revolutionary app 
                designed to help users build and sustain meaningful habits through personalized YouTube content. 
                Leveraging AI, HabitTube creates tailored learning journeys that guide users in their quest to 
                develop positive routines, improve skills, and achieve personal goals.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-purple-700">Key Features of HabitTube:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                      <SafeIcon icon={FiTarget} className="text-white text-sm" />
                    </div>
                    <div>
                      <span className="font-semibold">AI-Driven Habit Coaching:</span>
                      <span className="text-gray-600"> Receive personalized coaching based on your progress, habits, and goals.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                      <SafeIcon icon={FiPlay} className="text-white text-sm" />
                    </div>
                    <div>
                      <span className="font-semibold">YouTube Content Integration:</span>
                      <span className="text-gray-600"> Curate and schedule YouTube videos to reinforce learning and habit-building.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                      <SafeIcon icon={FiUsers} className="text-white text-sm" />
                    </div>
                    <div>
                      <span className="font-semibold">Community Engagement:</span>
                      <span className="text-gray-600"> Join public or private HabitTube challenges to grow with friends, influencers, or communities.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mt-0.5">
                      <SafeIcon icon={FiTrendingUp} className="text-white text-sm" />
                    </div>
                    <div>
                      <span className="font-semibold">Social & Gamification:</span>
                      <span className="text-gray-600"> Earn rewards, share milestones, and stay motivated with in-app badges and incentives.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753377430269-HabitTube%20logo%20horizontal.png" 
                alt="HabitTube Horizontal Logo" 
                className="max-w-sm w-full h-auto"
              />
              
              <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                {[
                  { label: 'Active Users', value: '100+' },
                  { label: 'Habits repetitions', value: '50K+' },
                  { label: 'Success Rate', value: '57%' },
                  { label: 'Daily Engagement', value: '+15min' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://app.habittube.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-6 w-full max-w-sm text-center hover:shadow-lg transition-shadow"
              >
                <h5 className="font-bold text-lg mb-2">Try HabitTube</h5>
                <p className="text-purple-100 text-sm mb-3">
                  Start building better habits today with AI-powered guidance and YouTube content curation.
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="font-semibold">Launch App</span>
                  <SafeIcon icon={FiExternalLink} className="text-sm" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;