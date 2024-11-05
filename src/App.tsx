import React from 'react';
import { Github, Linkedin, Mail, Terminal, Server, Globe, Database, Code2, FileDown } from 'lucide-react';
import ProjectCarousel from './components/ProjectCarousel';
import ContactForm from './components/ContactForm';
import SkillBadge from './components/SkillBadge';
import LanguageToggle from './components/LanguageToggle';
import CommentSection from './components/CommentSection';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: t('skills.frontend'), icon: <Globe className="w-6 h-6" />, level: 90 },
    { name: t('skills.backend'), icon: <Server className="w-6 h-6" />, level: 85 },
    { name: t('skills.database'), icon: <Database className="w-6 h-6" />, level: 88 },
  ];

  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      tech: ['Symfony', 'React', 'SQL', 'Trello'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      features: [
        'projects.ecommerce.features.inventory',
        'projects.ecommerce.features.analytics',
        'projects.ecommerce.features.orders',
        'projects.ecommerce.features.vendors'
      ],
      role: t('projects.ecommerce.role'),
      githubUrl: 'https://github.com/LSNG1/ecom'
    },
    {
      title: t('projects.password.title'),
      description: t('projects.password.description'),
      tech: ['React', 'Typescript', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
      features: [
        'projects.password.features.modular',
        'projects.password.features.strong',
        'projects.password.features.secure',
        'projects.password.features.free'
      ],
      role: t('projects.password.role'),
      liveUrl: 'https://passwordgeneratorrrrrrrrr.netlify.app',
      githubUrl: 'https://github.com/TashiS1/GenerateurMDP'
    },
    {
      title: t('projects.restaurant.title'),
      description: t('projects.restaurant.description'),
      tech: ['Vue', 'Typescript', 'Next.js'],
      image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
      features: [
        'projects.restaurant.features.showcase',
        'projects.restaurant.features.reservation',
        'projects.restaurant.features.pricing',
        'projects.restaurant.features.menu'
      ],
      role: t('projects.restaurant.role'),
      liveUrl: 'https://3emepole.netlify.app',
      githubUrl: 'https://github.com/TashiS1/Restaurant'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <nav className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Tashi</span>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition">{t('nav.home')}</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">{t('nav.about')}</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">{t('nav.projects')}</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">{t('nav.contact')}</button>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/TashiS1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/tashi-sakyi-70494a21b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:Tashisakyi@gmail.com" className="hover:text-blue-400 transition">
                <Mail className="w-6 h-6" />
              </a>
              <a href="/TashiSakyi_CV.pdf" download className="hover:text-blue-400 transition">
                <FileDown className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {t('about.title')}
          </h2>
          <div className="bg-gray-800/50 p-8 rounded-xl">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                {t('about.p1')}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {t('about.p2')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('about.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('projects.title')}</h2>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('contact.title')}</h2>
          <ContactForm />
        </div>
      </section>

      <section className="py-20 bg-black/30">
        <div className="max-w-3xl mx-auto px-4">
          <CommentSection />
        </div>
      </section>

      <footer className="bg-black/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tashi. {t('contact.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;