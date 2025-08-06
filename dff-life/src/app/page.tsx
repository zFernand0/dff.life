'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

// Define a simple type for translation keys, assuming string values
interface Translations {
  [key: string]: string;
}

// Mock translation data (you'd replace this with a proper i18n solution)
const enTranslations: Translations = {
  under_construction: 'Under Construction',
  construction_message: "We're working hard to get this page ready for you. Please check back soon for more updates!",
  continue: 'Continue',
  designed_financial_freedom: 'Designed Financial Freedom',
  mission: 'Mission',
  our_story: 'Our Story',
  who_we_help: 'Who We Help',
  contact: 'Contact',
  espanol: 'Español',
  transform_your_financial_life: 'Transform Your Financial Life.<br/>Design Your Freedom.',
  stop_the_stress:
    'Stop the stress. Start living with purpose. We empower individuals and couples to turn financial challenges into lasting joy.',
  explore_our_coaching: 'Explore Our Coaching',
  book_a_free_call: 'Book a Free Call',
  our_mission: 'Our Mission',
  our_mission_description:
    'To empower individuals and couples to transform their financial stress into intentional purpose and lasting joy, enabling them to design a life of true financial freedom through Designed Financial Freedom (DFF).',
  our_journey: 'Our Journey: From Debt to Designed Freedom',
  our_story_intro:
    'We are Candy and Fernando, and our financial journey is deeply rooted in our experience as immigrants from the Dominican Republic, who came to the United States to pursue higher education. Our story is one of hard work, significant challenges, and ultimately, the triumph of strategic planning and purposeful living.',
  the_early_years: 'The Early Years: Degrees and Debt',
  the_early_years_description_1:
    'Fernando graduated from Penn State with a Computer Science degree in 2015 and immediately began working in his field. This was a significant achievement, but it also marked the beginning of a substantial financial challenge. He carried over $70,000 in student loans, and living alone in the U.S., he was solely responsible for all his expenses. Over time, his debt grew to include auto loans and credit card debt, accumulating to more than $100,000.',
  the_turning_point: 'The Turning Point: A Strategic Plan and Continued Resilience',
  lessons_learned: 'Lessons Learned and Our Current Focus',
  why_were_here: "Why We're Here: Helping You Achieve Your Designed Financial Freedom",
  the_debt_liberation_seeker: 'The Debt Liberation Seeker',
  the_debt_liberation_seeker_description: "Are you drowning in debt and don't see a way out? Feeling stuck or ashamed?",
  im_tired_of_the_constant_stress_and_anxiety_about_money: "I'm tired of the constant stress and anxiety about money.",
  ive_tried_to_pay_off_debt_before_but_i_always_get_derailed:
    "I've tried to pay off debt before, but I always get derailed.",
  debt_liberation_seeker_helps:
    "How Designed Financial Freedom (DFF) helps: We'll show you our proven strategies to get out of debt, just like we paid off over $100,000 in 2.5 years. Get a clear roadmap to debt liberation.",
  get_debt_free: 'Get Debt-Free',
  the_intentional_wealth_builder: 'The Intentional Wealth Builder',
  the_intentional_wealth_builder_description:
    "Earning well but don't know where your money goes? Want to invest but overwhelmed?",
  i_want_my_money_to_reflect_my_valubut_i_dont_know_how: "I want my money to reflect my values, but I don't know how.",
  i_feel_guilty_about_my_spending_even_on_things_i_enjoy: 'I feel guilty about my spending, even on things I enjoy.',
  intentional_wealth_builder_helps:
    'How Designed Financial Freedom (DFF) helps: Move beyond just saving to consciously designing a financial life that funds your passions – like guilt-free vacations and experiences. Learn to make your money work harder for you.',
  build_intentional_wealth: 'Build Intentional Wealth',
  the_resilient_navigator: 'The Resilient Navigator',
  the_resilient_navigator_description:
    'New to the US financial system and feeling lost? Need to build a strong safety net?',
  how_do_i_manage_money_when_my_income_might_be_unpredictable:
    'How do I manage money when my income might be unpredictable?',
  i_want_to_create_financial_stability_for_my_family_both_here_and_abroad:
    'I want to create financial stability for my family, both here and abroad.',
  resilient_navigator_helps:
    'How Designed Financial Freedom (DFF) helps: As immigrants ourselves, we understand unique challenges. Learn to build a robust financial foundation that provides peace of mind, even through transitions.',
  gain_financial_resilience: 'Gain Financial Resilience',
  ready_to_design_your_financial_freedom: 'Ready to Design Your Financial Freedom?',
  lets_connect:
    "Let's connect and discuss how we can help you achieve your financial goals and live a life aligned with your values.",
  email: 'Email:',
  book_a_free_discovery_call: 'Book a Free Discovery Call:',
  connect_on_social: 'Connect on Social:',
  schedule_your_discovery_call: 'Schedule Your Discovery Call',
  all_rights_reserved: '© 2025 Designed Financial Freedom (DFF). All rights reserved.',
  privacy_policy: 'Privacy Policy',
  terms_of_service: 'Terms of Service',
};
const esTranslations: Translations = {
  // Spanish translations (mock)
  under_construction: 'En Construcción',
  construction_message:
    'Estamos trabajando duro para tener esta página lista para ti. ¡Vuelve pronto para más actualizaciones!',
  continue: 'Continuar',
  designed_financial_freedom: 'Diseñando Futuros Financieros',
  mission: 'Misión',
  our_story: 'Nuestra Historia',
  who_we_help: 'A Quién Ayudamos',
  contact: 'Contacto',
  espanol: 'English', // Toggle text
  transform_your_financial_life: 'Transforma Tu Vida Financiera.<br/>Diseña Tu Libertad.',
  stop_the_stress:
    'Detén el estrés. Comienza a vivir con propósito. Empoderamos a individuos y parejas para convertir los desafíos financieros en alegría duradera.',
  explore_our_coaching: 'Explora Nuestro Coaching',
  book_a_free_call: 'Agenda una Llamada Gratis',
  our_mission: 'Nuestra Misión',
  our_mission_description:
    'Empoderar a individuos y parejas para transformar su estrés financiero en un propósito intencional y alegría duradera, permitiéndoles diseñar una vida de verdadera libertad financiera a través de Designed Financial Freedom (DFF).',
  our_journey: 'Nuestro Viaje: De la Deuda a la Libertad Diseñada',
  our_story_intro:
    'Somos Candy y Fernando, y nuestro viaje financiero está profundamente arraigado en nuestra experiencia como inmigrantes de la República Dominicana, quienes vinimos a los Estados Unidos para seguir una educación superior. Nuestra historia es de trabajo duro, desafíos significativos y, en última instancia, el triunfo de la planificación estratégica y la vida con propósito.',
  the_early_years: 'Los Primeros Años: Títulos y Deuda',
  the_early_years_description_1:
    'Fernando se graduó de Penn State con un título en Ciencias de la Computación en 2015 e inmediatamente comenzó a trabajar en su campo. Este fue un logro significativo, pero también marcó el comienzo de un desafío financiero sustancial. Tenía más de $70,000 en préstamos estudiantiles, y viviendo solo en los EE. UU., era el único responsable de todos sus gastos. Con el tiempo, su deuda creció para incluir préstamos para automóviles y deudas de tarjetas de crédito, acumulando más de $100,000.',
  the_turning_point: 'El Punto de Inflexión: Un Plan Estratégico y Resiliencia Continua',
  lessons_learned: 'Lecciones Aprendidas y Nuestro Enfoque Actual',
  why_were_here: 'Por Qué Estamos Aquí: Ayudándote a Diseñar tu Futuro Financiero',
  the_debt_liberation_seeker: 'El Buscador de Liberación de Deudas',
  the_debt_liberation_seeker_description:
    '¿Estás ahogándote en deudas y no ves una salida? ¿Te sientes estancado o avergonzado?',
  im_tired_of_the_constant_stress_and_anxiety_about_money:
    '“Estoy cansado del estrés y la ansiedad constantes por el dinero.”',
  ive_tried_to_pay_off_debt_before_but_i_always_get_derailed:
    '“He intentado pagar deudas antes, pero siempre me desvío.”',
  debt_liberation_seeker_helps:
    'Cómo ayuda Designed Financial Freedom (DFF): Te mostraremos nuestras estrategias probadas para salir de deudas, tal como nosotros pagamos más de $100,000 en 2.5 años. Obtén una hoja de ruta clara para la liberación de deudas.',
  get_debt_free: 'Libérate de Deudas',
  the_intentional_wealth_builder: 'El Constructor de Riqueza Intencional',
  the_intentional_wealth_builder_description:
    '¿Ganas bien pero no sabes a dónde va tu dinero? ¿Quieres invertir pero te sientes abrumado?',
  i_want_my_money_to_reflect_my_valubut_i_dont_know_how: '“Quiero que mi dinero refleje mis valores, pero no sé cómo.”',
  i_feel_guilty_about_my_spending_even_on_things_i_enjoy:
    '“Me siento culpable por mis gastos, incluso en cosas que disfruto.”',
  intentional_wealth_builder_helps:
    'Cómo ayuda Designed Financial Freedom (DFF): Ve más allá de solo ahorrar para diseñar conscientemente una vida financiera que financie tus pasiones, como vacaciones y experiencias sin culpa. Aprende a hacer que tu dinero trabaje más para ti.',
  build_intentional_wealth: 'Construye Riqueza Intencional',
  the_resilient_navigator: 'El Navegante Resiliente',
  the_resilient_navigator_description:
    '¿Nuevo en el sistema financiero de EE. UU. y te sientes perdido? ¿Necesitas construir una sólida red de seguridad?',
  how_do_i_manage_money_when_my_income_might_be_unpredictable:
    '“¿Cómo manejo el dinero cuando mis ingresos pueden ser impredecibles?”',
  i_want_to_create_financial_stability_for_my_family_both_here_and_abroad:
    '“Quiero crear estabilidad financiera para mi familia, tanto aquí como en el extranjero.”',
  resilient_navigator_helps:
    'Cómo ayuda Designed Financial Freedom (DFF): Como inmigrantes, entendemos los desafíos únicos. Aprende a construir una base financiera sólida que te brinde tranquilidad, incluso durante las transiciones.',
  gain_financial_resilience: 'Gana Resiliencia Financiera',
  ready_to_design_your_financial_freedom: '¿Listo para Diseñar Tu Libertad Financiera?',
  lets_connect:
    'Conectemos y hablemos sobre cómo podemos ayudarte a alcanzar tus metas financieras y vivir una vida alineada con tus valores.',
  email: 'Correo Electrónico:',
  book_a_free_discovery_call: 'Agenda una Llamada de Descubrimiento Gratuita:',
  connect_on_social: 'Conéctate en Redes Sociales:',
  schedule_your_discovery_call: 'Agenda Tu Llamada de Descubrimiento',
  all_rights_reserved: '© 2025 Designed Financial Freedom (DFF). Todos los derechos reservados.',
  privacy_policy: 'Política de Privacidad',
  terms_of_service: 'Términos de Servicio',
};

// Function to get translated text based on current language
const getTranslatedText = (key: string, currentLanguage: 'en' | 'es'): string => {
  if (currentLanguage === 'es') {
    const esKey = `${key}`;
    return esTranslations[esKey] || enTranslations[key] || key; // Fallback to English, then key itself
  }
  return enTranslations[key] || key;
};

// const Home: React.FC = () => {
export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [language, setLanguage] = useState<'en' | 'es'>('en'); // Default to English

  // This useEffect would typically handle initial data fetching or setup
  // For the overlay, we'll just manage its state directly.
  useEffect(() => {
    // You could add logic here to check for a stored language preference
    // or to hide the overlay after a certain time.
  }, []);

  // const _t = (key: string) => {
  //   return getTranslatedText(key, language); // Get the translated text based on current language
  // };

  const _t = useTranslations();

  const handleContinue = () => {
    setShowOverlay(false);

    console.log('Translations loaded:', {
      enTranslations: JSON.stringify(enTranslations),
      esTranslations: JSON.stringify(esTranslations),
    });
  };

  const languageToggle = () => {
    console.log('Translations loaded:', {
      enTranslations: JSON.stringify(enTranslations),
      esTranslations: JSON.stringify(esTranslations),
    });
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <div className='bg-gray-50 text-gray-800 antialiased font-inter'>
      <Head>
        {/*

        <script src="https://cdn.tailwindcss.com"></script>

        <Script src="scripts/main.js"></Script> */}

        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{_t('designed_financial_freedom')}</title>
        {/* Basic SEO Meta Tags */}
        <meta name='description' content={_t('stop_the_stress')} />
        <meta
          name='keywords'
          content='financial coaching, debt payoff, financial freedom, wealth building, immigrant finance, personal finance, financial planning, money management, designed financial freedom, DFF'
        />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content={_t('designed_financial_freedom')} />
        <meta property='og:description' content={_t('stop_the_stress')} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://dff.life' />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={_t('designed_financial_freedom')} />
        <meta name='twitter:description' content='Financial Coaching for a Purposeful Life' />

        {/* Additional SEO */}
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Designed Financial Freedom (DFF)' />
        <link rel='canonical' href='https://dff.life' />

        {/* Custom styles */}
        <link rel='stylesheet' href='../style/main.css' />

        {/* Google Fonts - Inter */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      {showOverlay && (
        <div
          id='under-construction-overlay'
          className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-90 transition-opacity duration-500'
        >
          <div className='max-w-md p-8 bg-white rounded-lg shadow-xl text-center transform scale-95 transition-transform duration-500'>
            <h1 id='under_construction' className='text-3xl font-bold text-gray-800 mb-4'>
              {_t('under_construction')}
            </h1>
            <p id='construction_message' className='text-gray-600 mb-6'>
              {_t('construction_message')}
            </p>
            <button
              id='continue-button'
              onClick={handleContinue}
              className='bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              {_t('continue')}
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <header className='bg-white shadow-sm py-4 sticky top-0 z-50'>
        <div className='container mx-auto px-4 flex justify-between items-center'>
          {/* Logo/Business Name */}
          <div className='logo'>
            <a
              href='#'
              id='designed_financial_freedom'
              className='text-2xl font-bold text-indigo-700 hover:text-indigo-800 transition duration-300'
            >
              {_t('designed_financial_freedom')}
            </a>
          </div>
          {/* Navigation Links */}
          <nav aria-label='Main navigation'>
            <ul className='flex space-x-6 md:space-x-8'>
              <li>
                <a
                  href='#mission'
                  id='mission'
                  className='text-gray-600 hover:text-indigo-600 font-medium transition duration-300'
                >
                  {_t('mission')}
                </a>
              </li>
              <li>
                <a
                  href='#our-story'
                  id='our_story'
                  className='text-gray-600 hover:text-indigo-600 font-medium transition duration-300'
                >
                  {_t('our_story')}
                </a>
              </li>
              <li>
                <a
                  href='#audiences'
                  id='who_we_help'
                  className='text-gray-600 hover:text-indigo-600 font-medium transition duration-300'
                >
                  {_t('who_we_help')}
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  id='contact'
                  className='text-gray-600 hover:text-indigo-600 font-medium transition duration-300'
                >
                  {_t('contact')}
                </a>
              </li>
              {/* Optional: Link to Spanish section */}
              <li>
                <button
                  onClick={languageToggle}
                  id='espanol'
                  className='text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300'
                >
                  {_t('espanol')}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 md:py-32 overflow-hidden'
        >
          <div className='container mx-auto px-4 text-center relative z-10'>
            <h1
              id='transform_your_financial_life'
              className='text-4xl md:text-6xl font-extrabold leading-tight mb-6'
              dangerouslySetInnerHTML={{ __html: _t('transform_your_financial_life') }}
            ></h1>
            <p id='stop_the_stress' className='text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90'>
              {_t('stop_the_stress')}
            </p>
            <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <a
                href='#services'
                id='explore_our_coaching'
                className='btn-primary bg-white text-indigo-700 hover:bg-indigo-100 transition duration-300'
              >
                {_t('explore_our_coaching')}
              </a>
              <a
                href='#contact'
                id='book_a_free_call'
                className='btn-secondary border-2 border-white text-white hover:bg-white hover:text-indigo-700 transition duration-300'
              >
                {_t('book_a_free_call')}
              </a>
            </div>
          </div>
          {/* Abstract background shapes for visual appeal */}
          <div className='absolute inset-0 opacity-20'>
            <svg className='w-full h-full' fill='none' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'>
              <circle cx='20' cy='20' r='15' fill='currentColor' className='text-indigo-500'></circle>
              <circle cx='80' cy='80' r='25' fill='currentColor' className='text-purple-500'></circle>
              <rect
                x='50'
                y='10'
                width='30'
                height='30'
                rx='8'
                ry='8'
                fill='currentColor'
                className='text-indigo-400'
              ></rect>
              <polygon points='10,90 30,70 50,90 30,100' fill='currentColor' className='text-purple-400'></polygon>
            </svg>
          </div>
        </section>

        {/* Our Mission Section */}
        <section id='mission' className='py-16 md:py-24 bg-white'>
          <div className='container mx-auto px-4 text-center max-w-4xl'>
            <h2 id='our_mission' className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {_t('our_mission')}
            </h2>
            <p id='our_mission_description' className='text-lg md:text-xl text-gray-700 leading-relaxed'>
              {_t('our_mission_description')}
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section id='our-story' className='py-16 md:py-24 bg-gray-50'>
          <div className='container mx-auto px-4 max-w-5xl'>
            <h2 id='our_journey' className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
              {_t('our_journey')}
            </h2>
            <div className='story-content space-y-8 text-lg text-gray-700 leading-relaxed'>
              <p id='our_story_intro'>{_t('our_story_intro')}</p>

              <h3 id='the_early_years' className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
                {_t('the_early_years')}
              </h3>
              <p id='the_early_years_description_1'>{_t('the_early_years_description_1')}</p>
              <p>
                During this period, my own journey in the U.S. was distinct. I first came to the U.S. in August 2017 to
                study, fortunate enough to receive scholarships that allowed me to avoid student loans. However, I had
                to return to the Dominican Republic in December 2018 due to visa requirements. I continued to work
                remotely, and while I visited the U.S. for extended periods starting in 2021, my income was based in the
                DR and not enough to contribute to expenses in the U.S.
              </p>

              <h3 id='the_turning_point' className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
                {_t('the_turning_point')}
              </h3>
              <p>
                The pivotal moment came in January 2018. Even before we got married in 2019, we knew we wanted to be
                prepared for our next step together. We sat down, meticulously analyzed all the numbers, and created a
                comprehensive, strategic plan to tackle the debt head-on. It was a daunting task, but we were committed.
              </p>
              <p>
                Through disciplined effort and adhering to our new plan, we are incredibly proud to share that we
                completely paid off all of that debt—over $100,000—in just two and a half years, by August 2020. This
                significant achievement was largely accomplished while Fernando was living alone, managing all his
                expenses and strategically paying down this substantial debt. This achievement, accomplished even as we
                navigated getting married, solidified our belief in the power of intentional financial management.
              </p>
              <p>
                However, our financial journey continued to present unique challenges. Although I moved permanently to
                the U.S. in 2022, I was unemployed for more than six months, attending countless interviews. During this
                period, Fernando continued to bear the full financial responsibility, supporting both of us until I
                started working in January 2023. Fortunately, because he had already paid off his significant debt by
                2020 and had consistently built up his emergency funds, 401(k), and HSA, this period of supporting both
                of us was not financially difficult. This experience further reinforced our resilience and commitment to
                our shared financial goals.
              </p>

              <h3 id='lessons_learned' className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
                {_t('lessons_learned')}
              </h3>
              <p>
                Our journey wasn't without its detours. We also ventured into real estate investment, purchasing two
                properties. However, through that experience, we learned that it wasn't the right fit for our vision of
                Designed Financial Freedom. We decided to sell both properties, understanding that true financial
                freedom means aligning our investments and spending with what truly matters to us.
              </p>
              <p>
                Today, we are heavily invested in our retirement and consciously saving for the experiences and passions
                that bring us the most joy. We are big on vacations and experiences. This means we purposefully cut back
                on things that matter less to us, allowing us to plan ahead and spend generously on the trips and
                experiences we truly want, guilt-free.
              </p>

              <h3 id='why_were_here' className='text-2xl font-semibold text-gray-800 mt-8 mb-4'>
                {_t('why_were_here')}
              </h3>
              <p>
                Our personal journey, from navigating significant debt as immigrants to building a life aligned with our
                values, has inspired us to help others. We are launching this pilot program because we want to empower
                you to achieve your own Designed Financial Freedom (DFF), whatever that looks like for you. We believe
                that with the right strategies and a clear understanding of your values, anyone can transform their
                financial life.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Help (Target Audiences) Section */}
        <section id='audiences' className='py-16 md:py-24 bg-white'>
          <div className='container mx-auto px-4'>
            <h2 id='who_we_help' className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
              {_t('who_we_help')}: Find Your Path to Financial Freedom
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Target Audience 1: The Debt Liberation Seeker */}
              <div className='audience-card bg-indigo-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100'>
                <h3 id='the_debt_liberation_seeker' className='text-2xl font-bold text-indigo-700 mb-4'>
                  {_t('the_debt_liberation_seeker')}
                </h3>
                <p id='the_debt_liberation_seeker_description' className='text-gray-700 mb-4'>
                  {_t('the_debt_liberation_seeker_description')}
                </p>
                <ul className='list-disc list-inside text-gray-600 mb-6 space-y-2'>
                  <li id='im_tired_of_the_constant_stress_and_anxiety_about_money'>
                    {_t('im_tired_of_the_constant_stress_and_anxiety_about_money')}
                  </li>
                  <li id='ive_tried_to_pay_off_debt_before_but_i_always_get_derailed'>
                    {_t('ive_tried_to_pay_off_debt_before_but_i_always_get_derailed')}
                  </li>
                </ul>
                <p id='debt_liberation_seeker_helps' className='text-gray-800 font-medium mb-6'>
                  <strong>{_t('debt_liberation_seeker_helps')}</strong>
                </p>
                <a
                  href='#contact'
                  id='get_debt_free'
                  className='btn-card bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300'
                >
                  {_t('get_debt_free')}
                </a>
              </div>

              {/* Target Audience 2: The Intentional Wealth Builder */}
              <div className='audience-card bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-purple-100'>
                <h3 id='the_intentional_wealth_builder' className='text-2xl font-bold text-purple-700 mb-4'>
                  {_t('the_intentional_wealth_builder')}
                </h3>
                <p id='the_intentional_wealth_builder_description' className='text-gray-700 mb-4'>
                  {_t('the_intentional_wealth_builder_description')}
                </p>
                <ul className='list-disc list-inside text-gray-600 mb-6 space-y-2'>
                  <li id='i_want_my_money_to_reflect_my_valubut_i_dont_know_how'>
                    {_t('i_want_my_money_to_reflect_my_valubut_i_dont_know_how')}
                  </li>
                  <li id='i_feel_guilty_about_my_spending_even_on_things_i_enjoy'>
                    {_t('i_feel_guilty_about_my_spending_even_on_things_i_enjoy')}
                  </li>
                </ul>
                <p id='intentional_wealth_builder_helps' className='text-gray-800 font-medium mb-6'>
                  <strong>{_t('intentional_wealth_builder_helps')}</strong>
                </p>
                <a
                  href='#contact'
                  id='build_intentional_wealth'
                  className='btn-card bg-purple-600 text-white hover:bg-purple-700 transition duration-300'
                >
                  {_t('build_intentional_wealth')}
                </a>
              </div>

              {/* Target Audience 3: The Resilient Navigator */}
              <div className='audience-card bg-green-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-green-100'>
                <h3 id='the_resilient_navigator' className='text-2xl font-bold text-green-700 mb-4'>
                  {_t('the_resilient_navigator')}
                </h3>
                <p id='the_resilient_navigator_description' className='text-gray-700 mb-4'>
                  {_t('the_resilient_navigator_description')}
                </p>
                <ul className='list-disc list-inside text-gray-600 mb-6 space-y-2'>
                  <li id='how_do_i_manage_money_when_my_income_might_be_unpredictable'>
                    {_t('how_do_i_manage_money_when_my_income_might_be_unpredictable')}
                  </li>
                  <li id='i_want_to_create_financial_stability_for_my_family_both_here_and_abroad'>
                    {_t('i_want_to_create_financial_stability_for_my_family_both_here_and_abroad')}
                  </li>
                </ul>
                <p id='resilient_navigator_helps' className='text-gray-800 font-medium mb-6'>
                  <strong>{_t('resilient_navigator_helps')}</strong>
                </p>
                <a
                  href='#contact'
                  id='gain_financial_resilience'
                  className='btn-card bg-green-600 text-white hover:bg-green-700 transition duration-300'
                >
                  {_t('gain_financial_resilience')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id='contact' className='py-16 md:py-24 bg-gray-50 text-center'>
          <div className='container mx-auto px-4 max-w-4xl'>
            <h2
              id='ready_to_design_your_financial_freedom'
              className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'
            >
              {_t('ready_to_design_your_financial_freedom')}
            </h2>
            <p id='lets_connect' className='text-lg md:text-xl text-gray-700 mb-10'>
              {_t('lets_connect')}
            </p>
            <div className='contact-methods text-lg text-gray-700 mb-10 space-y-4'>
              <p>
                <strong>{_t('email')}</strong>{' '}
                <a href='mailto:hello@dff.life' className='text-indigo-600 hover:underline'>
                  hello@dff.life
                </a>
              </p>
              <p>
                <strong>{_t('book_a_free_discovery_call')}</strong>{' '}
                <a href='#contact' className='text-indigo-600 hover:underline'>
                  Schedule Here
                </a>
              </p>
              <p id='connect_on_social'>
                <strong>{_t('connect_on_social')}</strong>
                <a href='#' target='_blank' className='text-indigo-600 hover:underline mr-4'>
                  Instagram
                </a>
                <a href='#' target='_blank' className='text-indigo-600 hover:underline mr-4'>
                  Facebook
                </a>
                <a href='#' target='_blank' className='text-indigo-600 hover:underline'>
                  LinkedIn
                </a>
              </p>
            </div>
            <a
              href='#contact'
              id='schedule_your_discovery_call'
              className='btn-primary bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300'
            >
              {_t('schedule_your_discovery_call')}
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className='bg-gray-800 text-white py-8'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm'>
          <p id='all_rights_reserved' className='mb-4 md:mb-0'>
            {_t('all_rights_reserved')}
          </p>
          <ul className='flex space-x-6'>
            <li>
              <a href='./privacy' id='privacy_policy' className='hover:text-indigo-400 transition duration-300'>
                {_t('privacy_policy')}
              </a>
            </li>
            <li>
              <a href='./terms' id='terms_of_service' className='hover:text-indigo-400 transition duration-300'>
                {_t('terms_of_service')}
              </a>
            </li>
            {/* Add other footer links like disclaimers etc. */}
          </ul>
        </div>
      </footer>
    </div>
  );
}
