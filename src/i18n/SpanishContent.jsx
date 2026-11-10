import { useEffect } from 'react';
import { useLanguage } from './language';

const translations = {
  'Home': 'Inicio',
  'Services': 'Servicios',
  'About': 'Nosotros',
  'Contact': 'Contacto',
  'CEO Partner': 'Socio CEO',
  'Blog': 'Blog',
  'Our': 'Nuestros',
  'Our Services': 'Nuestros servicios',
  'Get Started': 'Comenzar',
  'Learn More': 'Conocer más',
  'AI Automation Services': 'Servicios de automatización con IA',
  'Transform Your Business with': 'Transforma tu negocio con',
  'AI Excellence': 'excelencia en IA',
  'Our Products': 'Nuestros productos',
  'Our Story': 'Nuestra historia',
  'Our Mission': 'Nuestra misión',
  'Our Impact': 'Nuestro impacto',
  'Our Values': 'Nuestros valores',
  'Expert Team': 'Equipo experto',
  'Meet Our': 'Conoce a nuestro',
  'CEO': 'director general',
  'Get In': 'Ponte en',
  'Touch': 'contacto',
  'Contact Information': 'Información de contacto',
  'Send us a Message': 'Envíanos un mensaje',
  'Full Name *': 'Nombre completo *',
  'Email Address *': 'Correo electrónico *',
  'Company Name *': 'Nombre de la empresa *',
  'Company Website': 'Sitio web de la empresa',
  'What services are you interested in? *': '¿Qué servicios te interesan? *',
  'Message *': 'Mensaje *',
  'Send Message': 'Enviar mensaje',
  'Sending...': 'Enviando...',
  'Message sent successfully!': '¡Mensaje enviado correctamente!',
  'Error sending message': 'Error al enviar el mensaje',
  'Please try again or contact us directly.': 'Inténtalo de nuevo o contáctanos directamente.',
  'Phone': 'Teléfono',
  'Location': 'Ubicación',
  'Business Hours': 'Horario de atención',
  'Mon-Fri 9AM-6PM CST': 'Lun–vie, 9 a. m.–6 p. m. CST',
  'Watch Demo': 'Ver demostración',
  'Watch Demo Video': 'Ver video de demostración',
  'Key Benefits': 'Beneficios principales',
  'See WAiBOT in Action': 'Conoce WAiBOT en acción',
  'WAiBOT: The Future of Sales': 'WAiBOT: el futuro de las ventas',
  'Chat on WhatsApp': 'Chatear por WhatsApp',
  'Introducing HabitTube': 'Presentamos HabitTube',
  'Unlock Your Full Potential': 'Desarrolla todo tu potencial',
  'Key Features of HabitTube:': 'Funciones principales de HabitTube:',
  'Try HabitTube': 'Prueba HabitTube',
  'Launch App': 'Abrir aplicación',
  'Looking for a CEO Partner': 'Buscamos un socio CEO',
  'AppsCamelot Opportunity': 'Oportunidad en AppsCamelot',
  'Stay Updated': 'Mantente al día',
  'Subscribe': 'Suscribirse',
  'Company': 'Empresa',
  'Resources': 'Recursos',
  'Legal': 'Legal',
  'About Us': 'Acerca de nosotros',
  'Our Team': 'Nuestro equipo',
  'CEO Partner Opportunity': 'Oportunidad para socio CEO',
  'Careers': 'Empleo',
  'Case Studies': 'Casos de éxito',
  'Privacy Policy': 'Aviso de privacidad',
  'Terms of Service': 'Términos del servicio',
  'Cookie Policy': 'Política de cookies',
  'Cookie Settings': 'Preferencias de cookies',
  'WAiBOT AI Sales Agents': 'Agentes de ventas con IA WAiBOT',
  'Customer Care AI': 'Atención al cliente con IA',
  'Customer Care AI Agents': 'Agentes de atención al cliente con IA',
  'Software Development': 'Desarrollo de software',
  'Custom Software Development': 'Desarrollo de software a medida',
  'Enterprise Solutions': 'Soluciones empresariales',
  'AI Business Intelligence': 'Inteligencia de negocios con IA',
  'AI Consultation': 'Consultoría en IA',
  'Local Delivery with DeliPRONTO': 'Entregas locales con DeliPRONTO',
  'Comprehensive AI and software development solutions to transform your business operations and drive growth.': 'Soluciones integrales de IA y desarrollo de software para transformar tu operación e impulsar el crecimiento.',
  'Join us in shaping the future of AI automation and innovative software solutions.': 'Únete a nosotros para dar forma al futuro de la automatización con IA y el software innovador.',
  'Ready to transform your business with AI? Let\'s discuss how AppsCamelot can help you achieve your goals.': '¿Listo para transformar tu negocio con IA? Hablemos sobre cómo AppsCamelot puede ayudarte a alcanzar tus objetivos.',
  'We\'ll get back to you within 24 hours during business days.': 'Te responderemos en un plazo de 24 horas hábiles.',
  'Get the latest news about AI innovations and industry insights.': 'Recibe novedades sobre innovación en IA y tendencias del sector.',
  'A taco robot selling the best carnitas tacos in Puebla. Experience authentic Mexican flavors with AI-powered service.': 'Un taquero robot que ofrece los mejores tacos de carnitas de Puebla. Disfruta sabores auténticos con atención impulsada por IA.',
  'An intelligent agent for real estate advisors to buy,rent or sell properties like houses,apartments,land and more.': 'Una agente inteligente para asesores inmobiliarios que ayuda a comprar, rentar o vender casas, departamentos, terrenos y más.',
  'Our flagship AI Sales Expert Agents are revolutionizing how businesses interact with customers. WAiBOT combines advanced natural language processing,machine learning,and industry-specific knowledge to deliver exceptional sales results.': 'Nuestros agentes expertos de ventas con IA están transformando la relación entre negocios y clientes. WAiBOT combina procesamiento de lenguaje natural, aprendizaje automático y conocimiento especializado para lograr resultados excepcionales.',
  'Discover how businesses across different industries are using WAiBOT to transform their customer engagement and boost sales.': 'Descubre cómo negocios de distintos sectores utilizan WAiBOT para mejorar la atención al cliente e impulsar sus ventas.',
  'AppsCamelot creates cutting-edge software solutions and WAiBOT - the ultimate AI Sales Expert Agents for any industry and customer care AI Agents.': 'AppsCamelot crea software innovador y WAiBOT: agentes expertos de ventas y atención al cliente con IA para cualquier industria.'
};

function translate(root, language) {
  if (!root) return;
  const NodeFilter = document.defaultView.NodeFilter;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('script, style, noscript, [data-no-translate]')) continue;
    const current = node.textContent;
    const trimmed = current.trim();
    if (!trimmed) continue;
    if (!node.__appscamelotEnglish) node.__appscamelotEnglish = trimmed;
    const translated = language === 'es'
      ? translations[node.__appscamelotEnglish] || node.__appscamelotEnglish
      : node.__appscamelotEnglish;
    if (translated !== trimmed) node.textContent = current.replace(trimmed, translated);
  }

  root.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((input) => {
    if (!input.dataset.englishPlaceholder) input.dataset.englishPlaceholder = input.placeholder;
    const placeholders = {
      'Your full name': 'Tu nombre completo',
      'your@email.com': 'tu@correo.com',
      'Your company name': 'Nombre de tu empresa',
      'Tell us about your project and how we can help...': 'Cuéntanos sobre tu proyecto y cómo podemos ayudarte...',
      'Enter your email': 'Escribe tu correo'
    };
    input.placeholder = language === 'es'
      ? placeholders[input.dataset.englishPlaceholder] || input.dataset.englishPlaceholder
      : input.dataset.englishPlaceholder;
  });
}

export default function SpanishContent() {
  const language = useLanguage();

  useEffect(() => {
    const root = document.getElementById('root');
    let scheduled = false;
    const update = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        translate(root, language);
      });
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  return null;
}
