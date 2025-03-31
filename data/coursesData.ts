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
    slug: "programmation-de-base",
    courseTitle: "Programmation de Base",
    courseSubtitle: "Les fondamentaux de la programmation pour débutants.",
    heroImageUrl: "/assets/courses/coursesOne.jpg",
    introParagraphs: [
      "Ce cours est conçu pour les débutants qui souhaitent comprendre les concepts fondamentaux de la programmation. Il couvre les bases de la logique algorithmique, les structures de contrôle, les variables, les boucles, et les fonctions.",
      "Objectifs : Apprendre à écrire des programmes simples, comprendre les principes de base de la programmation, développer une base solide pour aborder des langages plus avancés et résoudre des problèmes simples en utilisant des algorithmes."
    ],
    resourcesHeading: "Ressources Essentielles pour la Programmation de Base",
    resources: [
      { title: "Logique Algorithmique", description: "Comprendre la logique derrière les algorithmes." },
      { title: "Structures de Contrôle", description: "Apprendre à utiliser conditions et boucles." },
      { title: "Fonctions et Variables", description: "Maîtriser la création et l'utilisation de fonctions et de variables." }
    ],
    sliderTitle: "Débutez en Programmation",
    sliderItems: [
      { title: "Introduction à la Programmation", description: "Découverte des concepts de base.", imageUrl: "/assets/courses/coursesOne.jpg" },
      { title: "Exercices Pratiques", description: "Mettez en pratique ce que vous apprenez.", imageUrl: "/assets/courses/coursesOne.jpg" }
    ],
    timelineTitle: "Parcours d'Apprentissage",
    timelineItems: [
      { step: 1, description: "Découverte et bases (1 semaine)" },
      { step: 2, description: "Exercices et projets simples (2 semaines)" },
      { step: 3, description: "Approfondissement et révision (1 semaine)" }
    ],
    faqTitle: "FAQ - Programmation de Base",
    faqItems: [
      { question: "Est-ce adapté aux débutants ?", answer: "Oui, ce cours est conçu pour les novices en programmation." },
      { question: "Quels prérequis sont nécessaires ?", answer: "Aucun prérequis technique n'est requis pour suivre ce cours." }
    ]
  },
  {
    slug: "python",
    courseTitle: "Python",
    courseSubtitle: "Python : Un langage polyvalent et facile à apprendre.",
    heroImageUrl: "/assets/courses/coursesTwo.svg",
    introParagraphs: [
      "Python est un langage de programmation polyvalent et facile à apprendre, idéal pour les débutants.",
      "Objectifs : Maîtriser les bases de Python, écrire des scripts pour automatiser des tâches, créer des programmes interactifs et explorer des projets pratiques comme des calculatrices ou des jeux simples."
    ],
    resourcesHeading: "Ressources pour Maîtriser Python",
    resources: [
      { title: "Syntaxe Python", description: "Comprendre la syntaxe simple de Python." },
      { title: "Structures de Données", description: "Utiliser listes, dictionnaires et autres structures." },
      { title: "Projets Pratiques", description: "Appliquez vos compétences sur des projets réels." }
    ],
    sliderTitle: "Plongez dans Python",
    sliderItems: [
      { title: "Les Bases de Python", description: "Commencez par les fondamentaux du langage.", imageUrl: "/assets/courses/coursesTwo.svg" },
      { title: "Automatisation", description: "Créez des scripts pour automatiser des tâches.", imageUrl: "/assets/courses/coursesTwo.svg" }
    ],
    timelineTitle: "Itinéraire d'Apprentissage Python",
    timelineItems: [
      { step: 1, description: "Introduction et syntaxe (2 semaines)" },
      { step: 2, description: "Pratique et projets simples (3 semaines)" },
      { step: 3, description: "Exploration avancée (1 mois)" }
    ],
    faqTitle: "FAQ - Python",
    faqItems: [
      { question: "Python est-il adapté aux débutants ?", answer: "Oui, Python est reconnu pour sa simplicité et sa clarté." },
      { question: "Quels types de projets vais-je réaliser ?", answer: "Vous réaliserez des scripts, des programmes interactifs et de petits jeux." }
    ]
  },
  {
    slug: "java",
    courseTitle: "Java",
    courseSubtitle: "Java : Programmation orientée objet pour des applications robustes.",
    heroImageUrl: "/assets/courses/coursesThree.png",
    introParagraphs: [
      "Java est un langage de programmation orienté objet largement utilisé dans le développement d'applications professionnelles.",
      "Objectifs : Comprendre les principes de la programmation orientée objet, écrire des programmes modulaires et réutilisables, développer des applications simples et appliquer les concepts de la POO à des projets pratiques."
    ],
    resourcesHeading: "Ressources pour Apprendre Java",
    resources: [
      { title: "Concepts OOP", description: "Comprendre classes, objets, héritage et polymorphisme." },
      { title: "Exemples Pratiques", description: "Étudier des exemples concrets de code Java." },
      { title: "Projets Modulaires", description: "Développer des applications en appliquant la POO." }
    ],
    sliderTitle: "Découvrez Java",
    sliderItems: [
      { title: "Introduction à Java", description: "Les bases de Java expliquées clairement.", imageUrl: "/assets/courses/coursesThree.png" },
      { title: "POO en Action", description: "Appliquez les concepts de la programmation orientée objet.", imageUrl: "/assets/courses/coursesThree.png" }
    ],
    timelineTitle: "Parcours en Java",
    timelineItems: [
      { step: 1, description: "Introduction à Java (1 mois)" },
      { step: 2, description: "Concepts OOP et exercices (1 mois)" },
      { step: 3, description: "Projet final (2 mois)" }
    ],
    faqTitle: "FAQ - Java",
    faqItems: [
      { question: "Faut-il une expérience préalable ?", answer: "Non, ce cours commence par les bases de Java." },
      { question: "Quels outils utiliser ?", answer: "Vous utiliserez des IDE comme Eclipse ou IntelliJ IDEA." }
    ]
  },
  {
    slug: "developpement-web",
    courseTitle: "Développement Web",
    courseSubtitle: "Développez des sites web interactifs et modernes.",
    heroImageUrl: "/assets/courses/coursesFour.png",
    introParagraphs: [
      "Ce cours enseigne comment concevoir et développer des pages web interactives en utilisant HTML, CSS et JavaScript.",
      "Objectifs : Maîtriser le HTML pour structurer une page, utiliser CSS pour la styliser, ajouter des fonctionnalités avec JavaScript et créer des sites web simples et fonctionnels."
    ],
    resourcesHeading: "Ressources pour le Développement Web",
    resources: [
      { title: "HTML et CSS", description: "Les bases pour structurer et styliser vos pages web." },
      { title: "JavaScript", description: "Ajouter de l'interactivité à vos sites web." },
      { title: "Projets Web", description: "Créez votre propre site web ou blog." }
    ],
    sliderTitle: "Créez Votre Site Web",
    sliderItems: [
      { title: "Introduction au Web", description: "Apprenez les bases du développement web.", imageUrl: "/assets/courses/coursesFour.png" },
      { title: "Interactivité", description: "Utilisez JavaScript pour des sites dynamiques.", imageUrl: "/assets/courses/coursesFour.png" }
    ],
    timelineTitle: "Itinéraire de Développement Web",
    timelineItems: [
      { step: 1, description: "Bases du HTML et CSS (2 semaines)" },
      { step: 2, description: "Interactivité avec JavaScript (1 mois)" },
      { step: 3, description: "Projet de site web complet (1 mois)" }
    ],
    faqTitle: "FAQ - Développement Web",
    faqItems: [
      { question: "Dois-je connaître le design ?", answer: "Une connaissance basique est utile mais pas indispensable." },
      { question: "Quels outils vais-je utiliser ?", answer: "HTML, CSS, JavaScript et divers frameworks modernes." }
    ]
  },
  {
    slug: "developpement-de-jeux",
    courseTitle: "Développement de Jeux",
    courseSubtitle: "Créez des jeux 2D et 3D captivants.",
    heroImageUrl: "/assets/courses/pygame.png",
    introParagraphs: [
      "Ce cours explore le développement de jeux 2D et 3D, en mettant l'accent sur les interactions, les animations et les concepts de physique.",
      "Objectifs : Comprendre les bases du développement de jeux, créer des jeux simples avec des mécanismes interactifs, explorer la physique dans les jeux et développer des projets pratiques comme des jeux de plateforme ou des quiz interactifs."
    ],
    resourcesHeading: "Ressources pour le Développement de Jeux",
    resources: [
      { title: "Concepts de Jeu", description: "Les bases des interactions, animations et physique." },
      { title: "Outils de Développement", description: "Utilisez Pygame, Unity et d'autres outils." },
      { title: "Projets de Jeux", description: "Créez des jeux ludiques et interactifs." }
    ],
    sliderTitle: "Donnez Vie à Vos Jeux",
    sliderItems: [
      { title: "Introduction aux Jeux", description: "Découvrez les fondements du développement de jeux.", imageUrl: "/assets/courses/pygame.png" },
      { title: "Projets Pratiques", description: "Développez des jeux simples et interactifs.", imageUrl: "/assets/courses/pygame.png" }
    ],
    timelineTitle: "Parcours en Développement de Jeux",
    timelineItems: [
      { step: 1, description: "Bases du développement de jeux (1 mois)" },
      { step: 2, description: "Interactions et animations (1 mois)" },
      { step: 3, description: "Projet complet de jeu (2 mois)" }
    ],
    faqTitle: "FAQ - Développement de Jeux",
    faqItems: [
      { question: "Ai-je besoin de compétences artistiques ?", answer: "Non, l'accent est mis sur la programmation des jeux." },
      { question: "Quels outils seront utilisés ?", answer: "Des outils comme Pygame ou Unity seront abordés." }
    ]
  },
  {
    slug: "intelligence-artificielle-et-machine-learning",
    courseTitle: "Intelligence Artificielle et Machine Learning",
    courseSubtitle: "Explorez les technologies qui façonnent l'avenir.",
    heroImageUrl: "/assets/courses/robot.png",
    introParagraphs: [
      "Ce cours introduit les concepts de base de l'intelligence artificielle (IA) et du machine learning (ML).",
      "Objectifs : Comprendre les bases de l'IA et du ML, créer des modèles simples d'apprentissage automatique, appliquer des algorithmes supervisés et non supervisés, et développer des projets pratiques comme des systèmes de recommandation ou des classificateurs d'images."
    ],
    resourcesHeading: "Ressources pour l'Intelligence Artificielle",
    resources: [
      { title: "Concepts de l'IA", description: "Introduction aux fondamentaux de l'intelligence artificielle." },
      { title: "Algorithmes de ML", description: "Explorez les algorithmes supervisés et non supervisés." },
      { title: "Projets Pratiques", description: "Développez des modèles et des systèmes pratiques." }
    ],
    sliderTitle: "Votre Avenir en IA",
    sliderItems: [
      { title: "Fondamentaux de l'IA", description: "Comprendre les bases de l'intelligence artificielle.", imageUrl: "/assets/courses/robot.png" },
      { title: "Applications du ML", description: "Appliquez les algorithmes de machine learning.", imageUrl: "/assets/courses/robot.png" }
    ],
    timelineTitle: "Itinéraire en Intelligence Artificielle",
    timelineItems: [
      { step: 1, description: "Introduction à l'IA (2 semaines)" },
      { step: 2, description: "Apprentissage automatique (1 mois)" },
      { step: 3, description: "Projet pratique (1 mois)" }
    ],
    faqTitle: "FAQ - Intelligence Artificielle",
    faqItems: [
      { question: "Ce cours est-il accessible aux débutants ?", answer: "Oui, aucune expérience préalable n'est requise." },
      { question: "Quel langage est utilisé ?", answer: "Principalement Python pour les projets d'IA et ML." }
    ]
  },
  {
    slug: "cybersecurite",
    courseTitle: "Cybersécurité",
    courseSubtitle: "Protégez vos données et apprenez les bases de la sécurité informatique.",
    heroImageUrl: "/assets/courses/security.png",
    introParagraphs: [
      "Ce cours enseigne les pratiques de sécurité de base pour protéger les données et les systèmes contre les cyberattaques.",
      "Objectifs : Comprendre les principes fondamentaux de la cybersécurité, identifier et corriger les vulnérabilités, simuler des scénarios d'attaque et de défense, et appliquer de bonnes pratiques pour sécuriser les données."
    ],
    resourcesHeading: "Ressources pour la Cybersécurité",
    resources: [
      { title: "Principes de Sécurité", description: "Les bases de l'authentification, du chiffrement et plus." },
      { title: "Techniques de Défense", description: "Simuler et contrer des cyberattaques." },
      { title: "Outils de Sécurité", description: "Découvrez les outils essentiels pour protéger vos systèmes." }
    ],
    sliderTitle: "Renforcez Votre Sécurité",
    sliderItems: [
      { title: "Introduction à la Cybersécurité", description: "Comprendre les fondamentaux de la sécurité informatique.", imageUrl: "/assets/courses/security.png" },
      { title: "Techniques de Défense", description: "Approfondissez les stratégies pour protéger vos données.", imageUrl: "/assets/courses/security.png" }
    ],
    timelineTitle: "Parcours en Cybersécurité",
    timelineItems: [
      { step: 1, description: "Fondamentaux de la sécurité (1 mois)" },
      { step: 2, description: "Techniques d'attaque et de défense (1 mois)" },
      { step: 3, description: "Projet de sécurité (2 mois)" }
    ],
    faqTitle: "FAQ - Cybersécurité",
    faqItems: [
      { question: "Ce cours est-il adapté à tous les niveaux ?", answer: "Oui, il est conçu pour être accessible à tous." },
      { question: "Faut-il des connaissances préalables en informatique ?", answer: "Non, le cours commence par les bases." }
    ]
  }
];
