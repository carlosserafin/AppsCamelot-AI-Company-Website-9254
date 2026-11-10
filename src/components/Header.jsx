import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { setLanguage, useLanguage } from '../i18n/language';

const { FiMenu, FiX, FiCode, FiUsers, FiMail, FiSettings, FiBookOpen, FiBriefcase, FiGlobe } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const language = useLanguage();
  const navItems = [
    { name: 'Home', href: '#home', icon: FiCode },
    { name: 'Services', href: '#services', icon: FiSettings },
    { name: 'About', href: '#about', icon: FiUsers },
    { name: 'Contact', href: '#contact', icon: FiMail },
    { name: 'CEO Partner', href: 'https://ceo-wanted.appscamelot.com/', icon: FiBriefcase, external: true },
    { name: 'Blog', href: 'https://appscamelot.com/blog/', icon: FiBookOpen, external: true }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      setIsMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const languageToggle = (
    <button
      type="button"
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
      className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
    >
      <SafeIcon icon={FiGlobe} />
      <span data-no-translate>{language.toUpperCase()}</span>
      <span className="text-blue-300">/</span>
      <span data-no-translate>{language === 'en' ? 'ES' : 'EN'}</span>
    </button>
  );

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 z-50 w-full bg-white/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.button type="button" whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 text-left" onClick={() => scrollToSection('#home')}>
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
              <img src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753292926473-appscamelot-icon.png" alt="AppsCamelot Icon" className="h-full w-full object-contain" />
            </div>
            <div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-2xl font-bold text-transparent">AppsCamelot</span>
              <p className="text-xs text-gray-600">AI Automation Services</p>
            </div>
          </motion.button>
          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <motion.button key={item.name} type="button" onClick={() => scrollToSection(item.href)} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 whitespace-nowrap text-gray-700 transition-colors hover:text-blue-600">
                <SafeIcon icon={item.icon} className="text-sm" />
                <span className="text-sm font-medium">{item.name}</span>
              </motion.button>
            ))}
            {languageToggle}
          </nav>
          <div className="flex items-center gap-3 lg:hidden">
            {languageToggle}
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} className="rounded-lg p-2 transition-colors hover:bg-gray-100">
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-xl" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="border-t border-gray-200 py-4 lg:hidden">
            {navItems.map((item) => (
              <button key={item.name} type="button" onClick={() => scrollToSection(item.href)} className="flex w-full items-center gap-3 py-3 text-left text-gray-700 transition-colors hover:text-blue-600">
                <SafeIcon icon={item.icon} className="text-lg" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
