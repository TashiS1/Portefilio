import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const getLanguageDisplay = () => {
    switch (language) {
      case 'en': return 'FR';
      case 'fr': return '日本語';
      case 'ja': return 'EN';
      default: return 'EN';
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
    >
      {getLanguageDisplay()}
    </button>
  );
};

export default LanguageToggle;