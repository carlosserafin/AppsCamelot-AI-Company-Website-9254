import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {useLanguage} from '../i18n/language';

const {FiArrowUpRight,FiMapPin,FiShoppingBag,FiZap}=FiIcons;

const copy={
  en: {
    eyebrow: 'NEW IN MEXICO',
    heading: 'Keep local delivery yours.',
    description: 'Introducing DeliPROPIO, our new local delivery offering in Mexico. Put your business closer to the people in your neighborhood and give customers an easy way to discover what you offer.',
    button: 'Explore DeliPROPIO',
    badge: 'Local delivery',
    points: ['Reach nearby customers','Bring your business closer','Grow locally']
  },
  es: {
    eyebrow: 'NUEVO EN MÉXICO',
    heading: 'Haz que las entregas locales sean tuyas.',
    description: 'Presentamos DeliPROPIO, nuestra nueva propuesta de entregas locales en México. Acerca tu negocio a las personas de tu comunidad y facilita que descubran lo que ofreces.',
    button: 'Conoce DeliPROPIO',
    badge: 'Entregas locales',
    points: ['Llega a clientes cercanos','Acerca tu negocio','Crece localmente']
  }
};

export default function DeliProntoLaunch() {
  const language=useLanguage();
  const text=copy[language];

  return (
    <section id="delipropio" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{opacity: 0,y: 24}} whileInView={{opacity: 1,y: 0}} viewport={{once: true}} className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-orange-300">
            <SafeIcon icon={FiZap} /> {text.eyebrow}
          </span>
          <div>
            <p className="mb-3 text-2xl font-black tracking-tight text-orange-400">DeliPROPIO</p>
            <h2 className="max-w-xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl">{text.heading}</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-300">{text.description}</p>
          <div className="flex flex-wrap gap-3">
            {text.points.map((point)=> (
              <span key={point} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">{point}</span>
            ))}
          </div>
          <a href="https://delipropio.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-400">
            {text.button} <SafeIcon icon={FiArrowUpRight} className="text-xl" />
          </a>
        </motion.div>
        <motion.div initial={{opacity: 0,scale: 0.94}} whileInView={{opacity: 1,scale: 1}} viewport={{once: true}} className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rotate-6 rounded-[3rem] bg-gradient-to-br from-orange-500 to-amber-300 opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl sm:p-12">
            <div className="mb-14 flex items-center justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-slate-950">
                <SafeIcon icon={FiShoppingBag} />
              </div>
              <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-xs font-semibold text-emerald-300">{text.badge}</span>
            </div>
            <div className="mb-5 text-5xl font-black tracking-tighter text-white sm:text-7xl">Deli<span className="text-orange-400">PROPIO</span><span className="text-orange-400">.</span></div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-orange-500 to-amber-300" />
            </div>
            <div className="mt-7 flex items-center gap-2 text-sm text-slate-300">
              <SafeIcon icon={FiMapPin} className="text-orange-400" /> México
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
