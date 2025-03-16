// /data/coursesData.ts

export interface ResourceItem {
    title: string;
    description: string;
  }
  
  export interface SliderItem {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export interface TimelineItem {
    step: number;
    description: string;
  }
  
  export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface CourseDetails {
    slug: string;
    courseTitle: string;
    courseSubtitle: string;
    heroImageUrl: string;
    introParagraphs: string[];
    resourcesHeading: string;
    resources: ResourceItem[];
    sliderTitle: string;
    sliderItems: SliderItem[];
    timelineTitle: string;
    timelineItems: TimelineItem[];
    faqTitle: string;
    faqItems: FAQItem[];
  }
  
  export const coursesData: CourseDetails[] = [
    {
      slug: "html-css-js",
      courseTitle: "HTML, CSS & JavaScript",
      courseSubtitle: "Le cours complet pour devenir créateur du web.",
      heroImageUrl: "/assets/courses/webdev.png",
      introParagraphs: [
        "Dans un monde numérique, maîtriser les bases du développement est essentiel.",
        "Ce cours vous initie aux technologies fondamentales du web.",
        "Que vous soyez débutant ou souhaitiez approfondir vos compétences, ce cours vous donnera toutes les bases."
      ],
      resourcesHeading: "Les Meilleures Ressources Pour Apprendre le Développement Web",
      resources: [
        { title: "Pourquoi Apprendre le Web ?", description: "HTML, CSS et JavaScript sont la base pour créer des sites interactifs." },
        { title: "Apprendre par la Pratique", description: "Tutoriels interactifs, vidéos et exercices pratiques." },
        { title: "Projets Réels", description: "Travaillez sur des projets concrets pour un apprentissage optimal." }
      ],
      sliderTitle: "Atteignez de Nouveaux Sommets Avec Vos Projets Web",
      sliderItems: [
        { title: "HTML CSS JS START", description: "Idéal pour les 12 à 13 ans, ce module initie aux bases du web.", imageUrl: "/assets/Courses/ui.jpg" },
        { title: "HTML CSS JS PRO", description: "Pour ceux maîtrisant déjà les bases, ce module permet de créer des sites interactifs.", imageUrl: "/assets/Courses/ui.jpg" },
        { title: "HTML CSS JS EXPERT", description: "Pour les passionnés prêts à relever des défis ambitieux dans le web.", imageUrl: "/assets/Courses/ui.jpg" }
      ],
      timelineTitle: "Les Étapes de Votre Apprentissage :",
      timelineItems: [
        { step: 1, description: "Comprendre les bases du HTML (en 1 mois)" },
        { step: 2, description: "Maîtriser le CSS pour styliser vos pages (en 2 mois)" },
        { step: 3, description: "Introduire JavaScript pour dynamiser vos pages (en 3 mois)" },
        { step: 4, description: "Développer un projet complet, du concept à la mise en ligne (en 6 mois)" }
      ],
      faqTitle: "Trouvez une réponse à vos questions",
      faqItems: [
        { question: "À qui s'adresse ce cours ?", answer: "Ce cours est destiné aux enfants et adolescents souhaitant découvrir le développement web." },
        { question: "Quels sont les prérequis ?", answer: "Aucun, ce cours est conçu pour les débutants." },
        { question: "Recevrai-je un certificat ?", answer: "Oui, un certificat de réussite sera délivré à la fin du cours." }
      ]
    },
    {
      slug: "node-js",
      courseTitle: "Node.js Backend Development",
      courseSubtitle: "Construisez des serveurs robustes avec Node.js et Express.",
      heroImageUrl: "/assets/courses/nodejs.png",
      introParagraphs: [
        "Découvrez le développement backend avec Node.js.",
        "Apprenez à construire des API performantes et scalables.",
        "Développez des applications web complètes avec Express.js."
      ],
      resourcesHeading: "Ressources pour le Développement Backend",
      resources: [
        { title: "Introduction à Node.js", description: "Comprendre les bases de Node.js et son environnement." },
        { title: "Express.js Essentials", description: "Tutoriels et documentation sur Express." },
        { title: "Projets Pratiques", description: "Mettez en pratique vos compétences avec des projets réels." }
      ],
      sliderTitle: "Boostez vos compétences en Backend",
      sliderItems: [
        { title: "Node.js Basics", description: "Débuter avec Node.js pour construire des applications simples.", imageUrl: "/assets/Courses/node_slider.jpg" },
        { title: "Advanced Node.js", description: "Approfondissez vos connaissances et optimisez vos performances.", imageUrl: "/assets/Courses/node_slider.jpg" }
      ],
      timelineTitle: "Plan de Formation Backend",
      timelineItems: [
        { step: 1, description: "Apprendre JavaScript pour le backend (1 mois)" },
        { step: 2, description: "Comprendre l'asynchrone et les callbacks (1 mois)" },
        { step: 3, description: "Maîtriser Express.js pour créer des API (2 mois)" }
      ],
      faqTitle: "Questions Fréquentes sur Node.js",
      faqItems: [
        { question: "Ai-je besoin de connaissances en JavaScript ?", answer: "Oui, une base en JavaScript est recommandée." },
        { question: "Ce cours convient-il aux débutants ?", answer: "Oui, il est conçu pour les débutants avec quelques notions préalables." }
      ]
    },
    {
      slug: "database",
      courseTitle: "Database Fundamentals",
      courseSubtitle: "Maîtrisez les bases de données NoSQL avec MongoDB.",
      heroImageUrl: "/assets/courses/database.png",
      introParagraphs: [
        "Apprenez à manipuler des bases de données NoSQL.",
        "Découvrez MongoDB et Mongoose pour des projets web dynamiques."
      ],
      resourcesHeading: "Ressources pour les Bases de Données",
      resources: [
        { title: "MongoDB Guide", description: "Tutoriels et documentation officielle." },
        { title: "Mongoose Overview", description: "Comprendre l'ORM pour MongoDB." }
      ],
      sliderTitle: "Optimisez la Gestion de Vos Données",
      sliderItems: [
        { title: "MongoDB Basics", description: "Introduction aux concepts de base de MongoDB.", imageUrl: "/assets/Courses/database_slider.jpg" }
      ],
      timelineTitle: "Étapes pour Maîtriser MongoDB",
      timelineItems: [
        { step: 1, description: "Comprendre les bases des bases de données (1 mois)" },
        { step: 2, description: "Installation et configuration de MongoDB (1 mois)" },
        { step: 3, description: "Utilisation de Mongoose pour des projets web (2 mois)" }
      ],
      faqTitle: "Questions sur les Bases de Données",
      faqItems: [
        { question: "Faut-il connaître SQL ?", answer: "Non, ce cours se concentre sur NoSQL et MongoDB." }
      ]
    },
    {
      slug: "react-js",
      courseTitle: "React.js Frontend Development",
      courseSubtitle: "Construisez des interfaces modernes avec React et Redux.",
      heroImageUrl: "/assets/courses/react.png",
      introParagraphs: [
        "Plongez dans le développement frontend moderne.",
        "Apprenez à utiliser React.js et Redux pour des applications dynamiques."
      ],
      resourcesHeading: "Ressources pour le Développement Frontend",
      resources: [
        { title: "React Documentation", description: "La documentation officielle de React." },
        { title: "Redux Essentials", description: "Guide complet sur Redux pour la gestion d'état." }
      ],
      sliderTitle: "Développez des Interfaces Réactives",
      sliderItems: [
        { title: "React for Beginners", description: "Un module pour débuter avec React.", imageUrl: "/assets/Courses/react_slider.jpg" },
        { title: "Advanced React", description: "Approfondissez vos compétences en React.", imageUrl: "/assets/Courses/react_slider.jpg" }
      ],
      timelineTitle: "Votre Parcours avec React",
      timelineItems: [
        { step: 1, description: "Introduction à React (1 mois)" },
        { step: 2, description: "Gestion d'état avec Redux (1 mois)" },
        { step: 3, description: "Création d'une application complète (2 mois)" }
      ],
      faqTitle: "FAQ sur React.js",
      faqItems: [
        { question: "Dois-je connaître JavaScript ?", answer: "Oui, une bonne maîtrise de JavaScript est essentielle." }
      ]
    },
    {
      slug: "react-native",
      courseTitle: "React Native Mobile Development",
      courseSubtitle: "Développez des applications mobiles avec React Native.",
      heroImageUrl: "/assets/courses/reactnative.png",
      introParagraphs: [
        "Apprenez à créer des applications mobiles pour iOS et Android.",
        "Utilisez React Native pour développer des applications performantes."
      ],
      resourcesHeading: "Ressources pour le Développement Mobile",
      resources: [
        { title: "React Native Docs", description: "La documentation officielle de React Native." },
        { title: "Mobile UI/UX", description: "Conseils pour concevoir des applications mobiles attractives." }
      ],
      sliderTitle: "Lancez Votre Carrière Mobile",
      sliderItems: [
        { title: "React Native Basics", description: "Découvrez les fondements de React Native.", imageUrl: "/assets/Courses/reactnative_slider.jpg" }
      ],
      timelineTitle: "Plan de Formation Mobile",
      timelineItems: [
        { step: 1, description: "Bases de React Native (1 mois)" },
        { step: 2, description: "Création d'une application simple (2 mois)" }
      ],
      faqTitle: "Questions sur le Développement Mobile",
      faqItems: [
        { question: "Ce cours est-il adapté aux débutants ?", answer: "Aucune expérience préalable en développement mobile n'est requise." }
      ]
    },
    {
      slug: "swift",
      courseTitle: "Swift iOS Development",
      courseSubtitle: "Créez des applications iOS natives avec Swift.",
      heroImageUrl: "/assets/courses/swift.png",
      introParagraphs: [
        "Apprenez Swift pour développer des applications pour iPhone et iPad.",
        "Maîtrisez les concepts fondamentaux du développement iOS."
      ],
      resourcesHeading: "Ressources pour Swift",
      resources: [
        { title: "Swift Programming", description: "Cours et documentation pour apprendre Swift." }
      ],
      sliderTitle: "Innover sur iOS avec Swift",
      sliderItems: [
        { title: "Swift Basics", description: "Introduction à Swift pour débutants.", imageUrl: "/assets/Courses/swift_slider.jpg" }
      ],
      timelineTitle: "Votre Parcours iOS",
      timelineItems: [
        { step: 1, description: "Bases de Swift (1 mois)" },
        { step: 2, description: "Création d'une application iOS (2 mois)" }
      ],
      faqTitle: "FAQ sur Swift",
      faqItems: [
        { question: "Dois-je posséder un Mac ?", answer: "Oui, un Mac est nécessaire pour développer sur iOS." }
      ]
    },
    {
      slug: "flutter",
      courseTitle: "Flutter Mobile Development",
      courseSubtitle: "Créez des applications mobiles cross-platform avec Flutter.",
      heroImageUrl: "/assets/courses/flutter.png",
      introParagraphs: [
        "Découvrez Flutter pour développer des applications mobiles pour iOS et Android.",
        "Profitez d'une seule base de code pour plusieurs plateformes."
      ],
      resourcesHeading: "Ressources pour Flutter",
      resources: [
        { title: "Flutter Docs", description: "La documentation officielle de Flutter." },
        { title: "Dart Language", description: "Apprenez le langage Dart pour Flutter." }
      ],
      sliderTitle: "Développez des Applications Magnifiques",
      sliderItems: [
        { title: "Flutter Basics", description: "Les fondements du développement avec Flutter.", imageUrl: "/assets/Courses/flutter_slider.jpg" }
      ],
      timelineTitle: "Plan de Formation Flutter",
      timelineItems: [
        { step: 1, description: "Introduction à Flutter (1 mois)" },
        { step: 2, description: "Création d'une application Flutter (2 mois)" }
      ],
      faqTitle: "FAQ sur Flutter",
      faqItems: [
        { question: "Ce cours est-il adapté aux débutants ?", answer: "Aucune expérience préalable en développement mobile n'est requise." }
      ]
    },
    {
      slug: "onsen-ui",
      courseTitle: "Onsen UI Mobile Development",
      courseSubtitle: "Créez des applications mobiles avec Onsen UI.",
      heroImageUrl: "/assets/courses/onsenui.png",
      introParagraphs: [
        "Apprenez à utiliser Onsen UI pour créer des applications mobiles hybrides.",
        "Profitez d'une interface utilisateur performante et moderne."
      ],
      resourcesHeading: "Ressources pour Onsen UI",
      resources: [
        { title: "Onsen UI Guide", description: "Documentation et tutoriels officiels." }
      ],
      sliderTitle: "Développez avec Onsen UI",
      sliderItems: [
        { title: "Onsen UI Basics", description: "Introduction aux bases d'Onsen UI.", imageUrl: "/assets/Courses/onsenui_slider.jpg" }
      ],
      timelineTitle: "Étapes pour Maîtriser Onsen UI",
      timelineItems: [
        { step: 1, description: "Comprendre les concepts de base (1 mois)" },
        { step: 2, description: "Développer une application mobile (2 mois)" }
      ],
      faqTitle: "FAQ sur Onsen UI",
      faqItems: [
        { question: "Ce cours nécessite-t-il des compétences en HTML/CSS ?", answer: "Oui, des bases en HTML et CSS sont nécessaires." }
      ]
    },
    {
      slug: "tensorflow",
      courseTitle: "TensorFlow for Data Science",
      courseSubtitle: "Apprenez le machine learning avec TensorFlow.",
      heroImageUrl: "/assets/courses/tensorflow.png",
      introParagraphs: [
        "Découvrez le machine learning avec TensorFlow.",
        "Développez des modèles de deep learning pour résoudre des problèmes complexes."
      ],
      resourcesHeading: "Ressources pour TensorFlow",
      resources: [
        { title: "TensorFlow Docs", description: "Documentation et tutoriels officiels." }
      ],
      sliderTitle: "Boostez Vos Projets en Data Science",
      sliderItems: [
        { title: "TensorFlow Basics", description: "Introduction aux concepts de TensorFlow.", imageUrl: "/assets/Courses/tensorflow_slider.jpg" }
      ],
      timelineTitle: "Plan d'Apprentissage TensorFlow",
      timelineItems: [
        { step: 1, description: "Introduction au machine learning (1 mois)" },
        { step: 2, description: "Bases de TensorFlow (1 mois)" },
        { step: 3, description: "Développement de modèles avancés (2 mois)" }
      ],
      faqTitle: "FAQ sur TensorFlow",
      faqItems: [
        { question: "Ai-je besoin d'une solide connaissance en mathématiques ?", answer: "Une compréhension de base des mathématiques est recommandée." }
      ]
    },
    {
      slug: "aws",
      courseTitle: "AWS Cloud Computing",
      courseSubtitle: "Maîtrisez les services cloud d'AWS pour la Data Science.",
      heroImageUrl: "/assets/courses/aws.png",
      introParagraphs: [
        "Découvrez les services cloud d'AWS.",
        "Apprenez à utiliser AWS pour des projets de data science et d'analyse de données."
      ],
      resourcesHeading: "Ressources pour AWS",
      resources: [
        { title: "AWS Documentation", description: "Accédez aux guides officiels d'AWS." }
      ],
      sliderTitle: "Explorez le Cloud avec AWS",
      sliderItems: [
        { title: "AWS Basics", description: "Introduction aux services cloud d'AWS.", imageUrl: "/assets/Courses/aws_slider.jpg" }
      ],
      timelineTitle: "Plan de Formation AWS",
      timelineItems: [
        { step: 1, description: "Comprendre le cloud computing (1 mois)" },
        { step: 2, description: "Utiliser AWS pour la data science (2 mois)" }
      ],
      faqTitle: "FAQ sur AWS",
      faqItems: [
        { question: "Ce cours est-il certifiant ?", answer: "Un certificat de réussite sera délivré après le cours." }
      ]
    },
    {
      slug: "bokeh",
      courseTitle: "Bokeh Data Visualization",
      courseSubtitle: "Créez des visualisations interactives avec Bokeh.",
      heroImageUrl: "/assets/courses/bokeh.png",
      introParagraphs: [
        "Apprenez à visualiser vos données avec Bokeh.",
        "Créez des graphiques interactifs et dynamiques pour vos projets de data science."
      ],
      resourcesHeading: "Ressources pour Bokeh",
      resources: [
        { title: "Bokeh Documentation", description: "Accédez aux guides et tutoriels officiels de Bokeh." }
      ],
      sliderTitle: "Donnez Vie à Vos Données avec Bokeh",
      sliderItems: [
        { title: "Bokeh Basics", description: "Introduction à Bokeh pour la visualisation de données.", imageUrl: "/assets/Courses/bokeh_slider.jpg" }
      ],
      timelineTitle: "Plan pour la Visualisation de Données",
      timelineItems: [
        { step: 1, description: "Comprendre les principes de base (1 mois)" },
        { step: 2, description: "Création de visualisations interactives (2 mois)" }
      ],
      faqTitle: "FAQ sur Bokeh",
      faqItems: [
        { question: "Est-ce que Bokeh est adapté pour le web ?", answer: "Oui, Bokeh permet de créer des visualisations web interactives." }
      ]
    },
    {
      slug: "scikit",
      courseTitle: "Scikit-Learn for Machine Learning",
      courseSubtitle: "Maîtrisez le machine learning avec Scikit-Learn et Python.",
      heroImageUrl: "/assets/courses/scikit.png",
      introParagraphs: [
        "Découvrez les algorithmes de machine learning avec Scikit-Learn.",
        "Apprenez à implémenter des modèles prédictifs en Python."
      ],
      resourcesHeading: "Ressources pour Scikit-Learn",
      resources: [
        { title: "Scikit-Learn Guide", description: "Tutoriels et documentation pour Scikit-Learn." }
      ],
      sliderTitle: "Maîtrisez le Machine Learning",
      sliderItems: [
        { title: "Scikit Basics", description: "Introduction aux concepts de machine learning.", imageUrl: "/assets/Courses/scikit_slider.jpg" }
      ],
      timelineTitle: "Étapes pour le Machine Learning",
      timelineItems: [
        { step: 1, description: "Introduction aux algorithmes (1 mois)" },
        { step: 2, description: "Implémentation avec Scikit-Learn (2 mois)" }
      ],
      faqTitle: "FAQ sur Scikit-Learn",
      faqItems: [
        { question: "Ai-je besoin d'un background en mathématiques ?", answer: "Des bases en mathématiques sont utiles mais pas obligatoires." }
      ]
    },
    {
      slug: "laas",
      courseTitle: "Infrastructure as a Service (IaaS)",
      courseSubtitle: "Découvrez le monde de l'infrastructure en tant que service.",
      heroImageUrl: "/assets/courses/laas.png",
      introParagraphs: [
        "Apprenez les concepts d'IaaS pour gérer des infrastructures cloud.",
        "Utilisez des outils modernes pour déployer et gérer des serveurs virtuels."
      ],
      resourcesHeading: "Ressources pour IaaS",
      resources: [
        { title: "IaaS Guide", description: "Tutoriels et documentation sur l'infrastructure en tant que service." }
      ],
      sliderTitle: "Maîtrisez l'Infrastructure Cloud",
      sliderItems: [
        { title: "IaaS Basics", description: "Introduction aux concepts d'infrastructure cloud.", imageUrl: "/assets/Courses/laas_slider.jpg" }
      ],
      timelineTitle: "Plan de Formation IaaS",
      timelineItems: [
        { step: 1, description: "Comprendre les concepts de base (1 mois)" },
        { step: 2, description: "Déploiement d'une infrastructure (2 mois)" }
      ],
      faqTitle: "FAQ sur IaaS",
      faqItems: [
        { question: "Ce cours convient-il aux débutants ?", answer: "Oui, il introduit les concepts de base de l'infrastructure cloud." }
      ]
    },
    {
      slug: "iaas",
      courseTitle: "Information as a Service (IaaS)",
      courseSubtitle: "Explorez les solutions d'information en tant que service.",
      heroImageUrl: "/assets/courses/iaas.png",
      introParagraphs: [
        "Découvrez comment les données peuvent être fournies en tant que service.",
        "Apprenez à gérer et distribuer l'information efficacement."
      ],
      resourcesHeading: "Ressources pour IaaS",
      resources: [
        { title: "IaaS Overview", description: "Comprendre le concept d'information en tant que service." }
      ],
      sliderTitle: "Révolutionnez la Gestion de l'Information",
      sliderItems: [
        { title: "IaaS Essentials", description: "Les bases de l'information en tant que service.", imageUrl: "/assets/Courses/iaas_slider.jpg" }
      ],
      timelineTitle: "Plan pour IaaS",
      timelineItems: [
        { step: 1, description: "Introduction au concept (1 mois)" },
        { step: 2, description: "Mise en pratique avec des projets (2 mois)" }
      ],
      faqTitle: "FAQ sur IaaS",
      faqItems: [
        { question: "Ai-je besoin d'une expérience technique ?", answer: "Non, ce cours est conçu pour tous les niveaux." }
      ]
    },
    {
      slug: "paas",
      courseTitle: "Platform as a Service (PaaS)",
      courseSubtitle: "Découvrez les plateformes pour déployer vos applications.",
      heroImageUrl: "/assets/courses/paas.png",
      introParagraphs: [
        "Maîtrisez les plateformes cloud pour déployer vos applications.",
        "Découvrez comment PaaS simplifie le déploiement et la gestion des applications."
      ],
      resourcesHeading: "Ressources pour PaaS",
      resources: [
        { title: "PaaS Documentation", description: "Tutoriels et guides sur les plateformes PaaS." }
      ],
      sliderTitle: "Simplifiez le Déploiement de Vos Applications",
      sliderItems: [
        { title: "PaaS Basics", description: "Introduction aux concepts de PaaS.", imageUrl: "/assets/Courses/paas_slider.jpg" }
      ],
      timelineTitle: "Plan de Formation PaaS",
      timelineItems: [
        { step: 1, description: "Introduction aux plateformes cloud (1 mois)" },
        { step: 2, description: "Déploiement d'applications avec PaaS (2 mois)" }
      ],
      faqTitle: "FAQ sur PaaS",
      faqItems: [
        { question: "Est-ce adapté pour les petites entreprises ?", answer: "Oui, PaaS offre des solutions adaptées à tous les types d'entreprises." }
      ]
    },
    {
      slug: "saas",
      courseTitle: "Software as a Service (SaaS)",
      courseSubtitle: "Apprenez à développer et déployer des solutions SaaS.",
      heroImageUrl: "/assets/courses/saas.png",
      introParagraphs: [
        "Découvrez le modèle SaaS pour le déploiement de logiciels.",
        "Apprenez à développer des applications accessibles en ligne."
      ],
      resourcesHeading: "Ressources pour SaaS",
      resources: [
        { title: "SaaS Guide", description: "Tutoriels et meilleures pratiques pour le développement SaaS." }
      ],
      sliderTitle: "Innover avec des Solutions SaaS",
      sliderItems: [
        { title: "SaaS Basics", description: "Introduction aux concepts de SaaS.", imageUrl: "/assets/Courses/saas_slider.jpg" }
      ],
      timelineTitle: "Plan de Formation SaaS",
      timelineItems: [
        { step: 1, description: "Comprendre le modèle SaaS (1 mois)" },
        { step: 2, description: "Développer une application SaaS (2 mois)" }
      ],
      faqTitle: "FAQ sur SaaS",
      faqItems: [
        { question: "Ai-je besoin d'une infrastructure complexe ?", answer: "Non, le modèle SaaS simplifie le déploiement et la maintenance des applications." }
      ]
    }
  ];
  