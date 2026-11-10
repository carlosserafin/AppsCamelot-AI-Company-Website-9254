import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useLanguage } from '../i18n/language';

const { FiArrowUpRight, FiMapPin } = FiIcons;

export default function DeliProntoService() {
  const [grid, setGrid] = useState(null);
  const language = useLanguage();

  useEffect(() => {
    setGrid(document.querySelector('#services > div > .grid'));
  }, []);

  if (!grid) return null;

  const spanish = language === 'es';
  return createPortal(
    <a
      href="https://delipronto.com"
      target="_blank"
      rel="noopener noreferrer"
      data-no-translate
      className="group flex h-full flex-col rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 text-2xl text-white">
          <SafeIcon icon={FiMapPin} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{spanish ? 'Entregas locales con DeliPRONTO' : 'Local Delivery with DeliPRONTO'}</h3>
          <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">{spanish ? 'Nuevo en México' : 'New in Mexico'}</span>
        </div>
        <SafeIcon icon={FiArrowUpRight} className="text-orange-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <p className="mb-4 leading-relaxed text-gray-600">
        {spanish
          ? 'Conectamos negocios locales con sus clientes a través de una experiencia de entregas cómoda y sencilla.'
          : 'Connecting local businesses with customers through a convenient, seamless delivery experience.'}
      </p>
      <ul className="mt-auto space-y-2 text-sm text-gray-700">
        {(spanish
          ? ['Comercio local', 'Entregas a domicilio', 'Experiencia de compra sencilla']
          : ['Local businesses', 'On-demand delivery', 'Effortless ordering']
        ).map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />{feature}
          </li>
        ))}
      </ul>
    </a>,
    grid
  );
}
