import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  role?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  image,
  liveUrl,
  githubUrl,
  features,
  role
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <div 
      className="bg-gray-800/50 rounded-xl overflow-hidden h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {title}
          </h3>
          <p className="text-gray-300 mb-4">{description}</p>
        </div>

        {role && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-blue-400 mb-1">{t('projects.role')}</h4>
            <p className="text-gray-300">{role}</p>
          </div>
        )}

        {features && features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">{t('projects.keyFeatures')}</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                  {t(feature)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t('projects.liveDemo')}</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition"
              >
                <Github className="w-4 h-4" />
                <span>{t('projects.sourceCode')}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;