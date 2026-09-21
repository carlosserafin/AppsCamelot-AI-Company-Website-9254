import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiArrowRight,FiBriefcase,FiExternalLink}=FiIcons;

const CEOOpportunityBanner=()=> (
  <section className="py-16 bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.a
        href="https://ceo-wanted.appscamelot.com/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{opacity: 0,y: 24}}
        whileInView={{opacity: 1,y: 0}}
        whileHover={{scale: 1.01}}
        transition={{duration: 0.7}}
        className="group block rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm md:p-10"
      >
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <SafeIcon icon={FiBriefcase} className="text-3xl text-blue-200" />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                AppsCamelot Opportunity
              </p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Looking for a CEO Partner
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-blue-100">
                Join us in shaping the future of AI automation and innovative software solutions.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors group-hover:bg-blue-50">
            <span>Learn More</span>
            <SafeIcon icon={FiArrowRight} className="text-lg transition-transform group-hover:translate-x-1" />
            <SafeIcon icon={FiExternalLink} className="text-sm" />
          </div>
        </div>
      </motion.a>
    </div>
  </section>
);

export default CEOOpportunityBanner;