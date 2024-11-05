import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'ja';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'Building scalable applications and elegant solutions to complex problems',

    // About Section
    'about.title': 'About Me',
    'about.p1': "I'm a passionate Full Stack Developer with a deep love for creating innovative solutions to complex problems. With expertise in both frontend and backend technologies, I bridge the gap between user experience and server-side functionality.",
    'about.p2': "My journey in software development began with a fascination for how things work under the hood. This curiosity has driven me to master various technologies and frameworks, always staying at the forefront of industry trends and best practices.",
    'about.p3': "When I'm not coding, I'm either exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I believe in writing clean, maintainable code and building scalable applications that make a real impact.",

    // Skills Section
    'skills.title': 'Expertise',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database Design',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.ecommerce.title': 'E-Commerce Platform',
    'projects.ecommerce.description': 'Full-stack e-commerce solution with real-time inventory management and advanced analytics',
    'projects.ecommerce.role': 'Lead Full Stack Developer',
    'projects.password.title': 'Generate Password',
    'projects.password.description': 'Strong and Modulable Password',
    'projects.password.role': 'Developer Full Stack',
    'projects.restaurant.title': 'Familial Restaurant',
    'projects.restaurant.description': 'A Website to present our restaurant, take reservation and see pricing',
    'projects.restaurant.role': 'Full Stack Developer',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    'projects.role': 'Role',
    'projects.keyFeatures': 'Key Features',
    
    // E-commerce features
    'projects.ecommerce.features.inventory': 'Real-time inventory tracking',
    'projects.ecommerce.features.analytics': 'Advanced analytics dashboard',
    'projects.ecommerce.features.orders': 'Automated order processing',
    'projects.ecommerce.features.vendors': 'Multi-vendor support',
    
    // Password Generator features
    'projects.password.features.modular': 'Customizable password options',
    'projects.password.features.strong': 'Strong password generation',
    'projects.password.features.secure': 'Secure and reliable',
    'projects.password.features.free': 'Free and ad-free',
    
    // Restaurant features
    'projects.restaurant.features.showcase': 'Beautiful restaurant showcase',
    'projects.restaurant.features.reservation': 'Online reservation system',
    'projects.restaurant.features.pricing': 'Menu and pricing',
    'projects.restaurant.features.menu': 'Interactive menu display',

    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.rights': 'All rights reserved',

    // Comments Section
    'comments.title': 'Recent Comments',
    'comments.count': 'comments',
    'comments.loadMore': 'Load More Comments',
    'comments.addComment': 'Add Comment',
    'comments.name': 'Name',
    'comments.namePlaceholder': 'Enter your name',
    'comments.message': 'Message',
    'comments.messagePlaceholder': 'Write your comment...',
    'comments.post': 'Post Comment',
    'comments.posting': 'Posting...',
    'comments.cancel': 'Cancel'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Développeur Full Stack',
    'hero.subtitle': 'Création de solutions élégantes et d\'applications évolutives pour des problèmes complexes',

    // About Section
    'about.title': 'À Propos de Moi',
    'about.p1': "Je suis un développeur Full Stack passionné avec un profond intérêt pour la création de solutions innovantes. Avec une expertise en technologies frontend et backend, je fais le pont entre l'expérience utilisateur et la fonctionnalité côté serveur.",
    'about.p2': "Mon parcours dans le développement logiciel a commencé par une fascination pour le fonctionnement interne des systèmes. Cette curiosité m'a poussé à maîtriser diverses technologies et frameworks, restant toujours à la pointe des tendances et des meilleures pratiques de l'industrie.",
    'about.p3': "Quand je ne code pas, j'explore de nouvelles technologies, je contribue à des projets open-source ou je partage mes connaissances avec la communauté des développeurs. Je crois en l'écriture de code propre et maintenable pour créer des applications qui ont un impact réel.",

    // Skills Section
    'skills.title': 'Expertise',
    'skills.frontend': 'Développement Frontend',
    'skills.backend': 'Développement Backend',
    'skills.database': 'Conception de Base de Données',

    // Projects Section
    'projects.title': 'Projets Principaux',
    'projects.ecommerce.title': 'Plateforme E-Commerce',
    'projects.ecommerce.description': 'Solution e-commerce complète avec gestion des stocks en temps réel et analyses avancées',
    'projects.ecommerce.role': 'Développeur Full Stack Principal',
    'projects.password.title': 'Générateur de Mot de Passe',
    'projects.password.description': 'Mot de passe fort et modulable',
    'projects.password.role': 'Développeur Full Stack',
    'projects.restaurant.title': 'Restaurant Familial',
    'projects.restaurant.description': 'Un site web pour présenter notre restaurant, prendre des réservations et voir les prix',
    'projects.restaurant.role': 'Développeur Full Stack',
    'projects.liveDemo': 'Démo en Direct',
    'projects.sourceCode': 'Code Source',
    'projects.role': 'Rôle',
    'projects.keyFeatures': 'Fonctionnalités Clés',
    
    // E-commerce features
    'projects.ecommerce.features.inventory': 'Suivi des stocks en temps réel',
    'projects.ecommerce.features.analytics': 'Tableau de bord analytique avancé',
    'projects.ecommerce.features.orders': 'Traitement automatisé des commandes',
    'projects.ecommerce.features.vendors': 'Support multi-vendeurs',
    
    // Password Generator features
    'projects.password.features.modular': 'Options de mot de passe personnalisables',
    'projects.password.features.strong': 'Génération de mots de passe forts',
    'projects.password.features.secure': 'Sécurisé et fiable',
    'projects.password.features.free': 'Gratuit et sans publicité',
    
    // Restaurant features
    'projects.restaurant.features.showcase': 'Vitrine élégante du restaurant',
    'projects.restaurant.features.reservation': 'Système de réservation en ligne',
    'projects.restaurant.features.pricing': 'Menu et tarifs',
    'projects.restaurant.features.menu': 'Menu interactif',

    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.rights': 'Tous droits réservés',

    // Comments Section
    'comments.title': 'Commentaires Récents',
    'comments.count': 'commentaires',
    'comments.loadMore': 'Charger Plus de Commentaires',
    'comments.addComment': 'Ajouter un Commentaire',
    'comments.name': 'Nom',
    'comments.namePlaceholder': 'Entrez votre nom',
    'comments.message': 'Message',
    'comments.messagePlaceholder': 'Écrivez votre commentaire...',
    'comments.post': 'Publier',
    'comments.posting': 'Publication...',
    'comments.cancel': 'Annuler'
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '私について',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'お問い合わせ',

    // Hero Section
    'hero.title': 'フルスタック開発者',
    'hero.subtitle': '複雑な問題に対するスケーラブルなアプリケーションとエレガントなソリューションの構築',

    // About Section
    'about.title': '自己紹介',
    'about.p1': "私は革新的なソリューションの創造に情熱を持つフルスタック開発者です。フロントエンドとバックエンドの両方の技術に精通し、ユーザー体験とサーバーサイドの機能性の架け橋となっています。",
    'about.p2': "ソフトウェア開発の旅は、システムの内部動作への興味から始まりました。この好奇心が、様々な技術やフレームワークの習得を促し、常に業界のトレンドとベストプラクティスの最前線に立ち続けています。",
    'about.p3': "コーディング以外の時間は、新しい技術の探求、オープンソースプロジェクトへの貢献、開発者コミュニティでの知識共有に費やしています。クリーンで保守性の高いコードを書き、実際に影響を与えるスケーラブルなアプリケーションの構築を信念としています。",

    // Skills Section
    'skills.title': '専門知識',
    'skills.frontend': 'フロントエンド開発',
    'skills.backend': 'バックエンド開発',
    'skills.database': 'データベース設計',

    // Projects Section
    'projects.title': '主要プロジェクト',
    'projects.ecommerce.title': 'Eコマースプラットフォーム',
    'projects.ecommerce.description': 'リアルタイムの在庫管理と高度な分析機能を備えたフルスタックEコマースソリューション',
    'projects.ecommerce.role': 'リードフルスタック開発者',
    'projects.password.title': 'パスワード生成ツール',
    'projects.password.description': '強力でカスタマイズ可能なパスワード',
    'projects.password.role': 'フルスタック開発者',
    'projects.restaurant.title': '家族経営レストラン',
    'projects.restaurant.description': 'レストランの紹介、予約受付、料金確認ができるウェブサイト',
    'projects.restaurant.role': 'フルスタック開発者',
    'projects.liveDemo': 'ライブデモ',
    'projects.sourceCode': 'ソースコード',
    'projects.role': '役割',
    'projects.keyFeatures': '主な機能',
    
    // E-commerce features
    'projects.ecommerce.features.inventory': 'リアルタイム在庫管理',
    'projects.ecommerce.features.analytics': '高度な分析ダッシュボード',
    'projects.ecommerce.features.orders': '注文の自動処理',
    'projects.ecommerce.features.vendors': 'マルチベンダー対応',
    
    // Password Generator features
    'projects.password.features.modular': 'カスタマイズ可能なパスワードオプション',
    'projects.password.features.strong': '強力なパスワード生成',
    'projects.password.features.secure': '安全で信頼性の高い',
    'projects.password.features.free': '無料で広告なし',
    
    // Restaurant features
    'projects.restaurant.features.showcase': 'レストランの魅力的な紹介',
    'projects.restaurant.features.reservation': 'オンライン予約システム',
    'projects.restaurant.features.pricing': 'メニューと価格',
    'projects.restaurant.features.menu': 'インタラクティブメニュー表示',

    // Contact Section
    'contact.title': 'お問い合わせ',
    'contact.rights': '全著作権所有',

    // Comments Section
    'comments.title': '最近のコメント',
    'comments.count': 'コメント',
    'comments.loadMore': 'もっと見る',
    'comments.addComment': 'コメントを追加',
    'comments.name': '名前',
    'comments.namePlaceholder': 'お名前を入力',
    'comments.message': 'メッセージ',
    'comments.messagePlaceholder': 'コメントを書く...',
    'comments.post': '投稿',
    'comments.posting': '投稿中...',
    'comments.cancel': 'キャンセル'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'en') return 'fr';
      if (prev === 'fr') return 'ja';
      return 'en';
    });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};