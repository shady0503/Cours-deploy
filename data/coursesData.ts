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
      "Ce cours vous introduit aux concepts fondamentaux de la programmation.",
      "Idéal pour ceux qui veulent découvrir le monde du développement informatique."
    ],
    resourcesHeading: "Ressources Essentielles pour Maîtriser la Programmation",
    resources: [
      { title: "Concepts de Base", description: "Comprendre les bases et la logique de programmation." },
      { title: "Pratique Interactive", description: "Exercices et projets pour renforcer vos compétences." },
      { title: "Outils et Environnements", description: "Présentation des outils de développement." }
    ],
    sliderTitle: "Progressez avec Confiance",
    sliderItems: [
      { title: "Introduction", description: "Les fondamentaux expliqués de manière simple.", imageUrl: "/assets/courses/coursesOne.jpg" },
      { title: "Exercices Pratiques", description: "Mettez en pratique vos compétences dès le premier jour.", imageUrl: "/assets/courses/coursesOne.jpg" }
    ],
    timelineTitle: "Votre Parcours en Programmation",
    timelineItems: [
      { step: 1, description: "Découverte des bases (1 semaine)" },
      { step: 2, description: "Approfondissement des concepts (2 semaines)" },
      { step: 3, description: "Projet final (1 mois)" }
    ],
    faqTitle: "Questions Fréquentes sur la Programmation de Base",
    faqItems: [
      { question: "Ce cours est-il pour les débutants?", answer: "Oui, aucun prérequis n'est nécessaire." },
      { question: "Ai-je besoin d'un ordinateur spécifique?", answer: "Un ordinateur standard suffit pour suivre le cours." }
    ]
  },
  {
    slug: "python",
    courseTitle: "Python",
    courseSubtitle: "Apprenez à programmer avec Python, un langage puissant et polyvalent.",
    heroImageUrl: "/assets/courses/coursesTwo.svg",
    introParagraphs: [
      "Ce cours vous guide à travers les concepts clés de Python.",
      "Idéal pour l'analyse de données, le développement web et l'automatisation."
    ],
    resourcesHeading: "Ressources pour Maîtriser Python",
    resources: [
      { title: "Documentation Officielle", description: "Accédez aux guides et références de Python." },
      { title: "Exercices Pratiques", description: "Renforcez vos compétences avec des exercices interactifs." },
      { title: "Projets Réels", description: "Appliquez vos connaissances sur des projets concrets." }
    ],
    sliderTitle: "Plongez dans l'Univers Python",
    sliderItems: [
      { title: "Syntaxe et Structures", description: "Comprenez la syntaxe simple et puissante de Python.", imageUrl: "/assets/courses/coursesTwo.svg" },
      { title: "Bibliothèques Python", description: "Découvrez les bibliothèques populaires pour divers domaines.", imageUrl: "/assets/courses/coursesTwo.svg" }
    ],
    timelineTitle: "Votre Progression en Python",
    timelineItems: [
      { step: 1, description: "Introduction et Syntaxe (2 semaines)" },
      { step: 2, description: "Projets Pratiques (3 semaines)" },
      { step: 3, description: "Approfondissement et Frameworks (1 mois)" }
    ],
    faqTitle: "Questions Fréquentes sur le Cours Python",
    faqItems: [
      { question: "Est-ce que Python est adapté aux débutants?", answer: "Oui, Python est réputé pour sa syntaxe simple." },
      { question: "Quelles bibliothèques vais-je apprendre?", answer: "Vous explorerez des bibliothèques comme Pandas et Flask." }
    ]
  },
  {
    slug: "java",
    courseTitle: "Java",
    courseSubtitle: "Maîtrisez la programmation orientée objet avec Java.",
    heroImageUrl: "/assets/courses/coursesThree.png",
    introParagraphs: [
      "Ce cours vous enseigne les bases et les concepts avancés de Java.",
      "Parfait pour ceux qui veulent développer des applications robustes et performantes."
    ],
    resourcesHeading: "Ressources pour Apprendre Java",
    resources: [
      { title: "Cours Interactifs", description: "Suivez des leçons structurées et interactives." },
      { title: "Exemples Concrets", description: "Étudiez des exemples de code pour comprendre les concepts." },
      { title: "Communauté Active", description: "Rejoignez une communauté pour échanger et progresser." }
    ],
    sliderTitle: "Explorez l'Univers Java",
    sliderItems: [
      { title: "Bases de Java", description: "Comprendre les fondations de la programmation Java.", imageUrl: "/assets/courses/coursesThree.png" },
      { title: "OOP en Profondeur", description: "Plongez dans la programmation orientée objet.", imageUrl: "/assets/courses/coursesThree.png" }
    ],
    timelineTitle: "Votre Parcours en Java",
    timelineItems: [
      { step: 1, description: "Introduction à Java (1 mois)" },
      { step: 2, description: "Concepts Avancés (1 mois)" },
      { step: 3, description: "Projet Final (2 mois)" }
    ],
    faqTitle: "Questions Fréquentes sur le Cours Java",
    faqItems: [
      { question: "Faut-il une expérience préalable?", answer: "Aucune expérience préalable n'est requise." },
      { question: "Quel IDE est recommandé?", answer: "Eclipse ou IntelliJ IDEA sont recommandés." }
    ]
  },
  {
    slug: "developpement-web",
    courseTitle: "Développement Web",
    courseSubtitle: "Créez des sites web interactifs et modernes.",
    heroImageUrl: "/assets/courses/coursesFour.jpg",
    introParagraphs: [
      "Ce cours vous initie aux technologies du web pour créer des pages interactives.",
      "Idéal pour apprendre à développer des sites web dynamiques et responsives."
    ],
    resourcesHeading: "Ressources pour le Développement Web",
    resources: [
      { title: "HTML, CSS et JavaScript", description: "Les piliers du web expliqués de manière claire." },
      { title: "Tutoriels Vidéo", description: "Suivez des tutoriels pour voir le code en action." },
      { title: "Projets Pratiques", description: "Mettez en pratique vos compétences sur des projets réels." }
    ],
    sliderTitle: "Transformez Vos Idées en Sites Web",
    sliderItems: [
      { title: "Introduction au Web", description: "Comprendre les bases du développement web.", imageUrl: "/assets/courses/coursesFour.jpg" },
      { title: "Techniques Avancées", description: "Plongez dans le développement de sites modernes.", imageUrl: "/assets/courses/coursesFour.jpg" }
    ],
    timelineTitle: "Votre Parcours en Développement Web",
    timelineItems: [
      { step: 1, description: "Découverte des Bases (2 semaines)" },
      { step: 2, description: "Approfondissement (1 mois)" },
      { step: 3, description: "Projet de Site Complet (1 mois)" }
    ],
    faqTitle: "Questions Fréquentes sur le Développement Web",
    faqItems: [
      { question: "Dois-je connaître le design?", answer: "Une base en design est un plus, mais pas nécessaire." },
      { question: "Quels outils vais-je utiliser?", answer: "HTML, CSS, JavaScript et divers frameworks modernes." }
    ]
  },
  {
    slug: "developpement-de-jeux",
    courseTitle: "Développement de Jeux",
    courseSubtitle: "Créez des jeux 2D et 3D captivants.",
    heroImageUrl: "/assets/courses/coursesFive.png",
    introParagraphs: [
      "Ce cours vous guide dans la création de jeux vidéo avec des interactions dynamiques.",
      "Idéal pour les passionnés de jeux et de programmation."
    ],
    resourcesHeading: "Ressources pour le Développement de Jeux",
    resources: [
      { title: "Moteurs de Jeu", description: "Découvrez Unity, Unreal Engine et plus encore." },
      { title: "Concepts de Physique", description: "Apprenez comment intégrer la physique dans les jeux." },
      { title: "Design et Animation", description: "Comprenez les bases du design de jeux." }
    ],
    sliderTitle: "Donnez Vie à Vos Jeux",
    sliderItems: [
      { title: "Concepts de Base", description: "Les fondamentaux du développement de jeux.", imageUrl: "/assets/courses/coursesFive.png" },
      { title: "Techniques Avancées", description: "Approfondissez vos connaissances en développement de jeux.", imageUrl: "/assets/courses/coursesFive.png" }
    ],
    timelineTitle: "Votre Parcours en Développement de Jeux",
    timelineItems: [
      { step: 1, description: "Introduction et Concepts (1 mois)" },
      { step: 2, description: "Développement Progressif (1 mois)" },
      { step: 3, description: "Projet Complet (2 mois)" }
    ],
    faqTitle: "Questions Fréquentes sur le Développement de Jeux",
    faqItems: [
      { question: "Ai-je besoin de compétences artistiques?", answer: "Pas nécessaire, la programmation est l'essentiel." },
      { question: "Quels outils utiliser?", answer: "Unity et Unreal Engine sont les plus courants." }
    ]
  },
  {
    slug: "intelligence-artificielle-et-machine-learning",
    courseTitle: "Intelligence Artificielle et Machine Learning",
    courseSubtitle: "Explorez les technologies qui façonnent l'avenir.",
    heroImageUrl: "/assets/courses/coursesSix.png",
    introParagraphs: [
      "Ce cours vous plonge dans le monde de l'IA et du Machine Learning.",
      "Idéal pour comprendre les concepts derrière l'intelligence artificielle."
    ],
    resourcesHeading: "Ressources pour l'Intelligence Artificielle",
    resources: [
      { title: "Concepts Clés", description: "Les bases de l'intelligence artificielle expliquées simplement." },
      { title: "Tutoriels et Exercices", description: "Mettez en pratique avec des exercices dédiés." },
      { title: "Projets Innovants", description: "Réalisez des projets pour appliquer vos connaissances." }
    ],
    sliderTitle: "Développez Votre Avenir en IA",
    sliderItems: [
      { title: "Fondamentaux", description: "Comprendre les bases de l'IA et du Machine Learning.", imageUrl: "/assets/courses/coursesSix.png" },
      { title: "Applications Réelles", description: "Explorez comment l'IA change le monde.", imageUrl: "/assets/courses/coursesSix.png" }
    ],
    timelineTitle: "Votre Parcours en Intelligence Artificielle",
    timelineItems: [
      { step: 1, description: "Introduction à l'IA (2 semaines)" },
      { step: 2, description: "Apprentissage Automatique (1 mois)" },
      { step: 3, description: "Projet Innovant (1 mois)" }
    ],
    faqTitle: "Questions Fréquentes sur l'Intelligence Artificielle",
    faqItems: [
      { question: "Ce cours est-il pour les débutants?", answer: "Oui, aucune expérience préalable n'est requise." },
      { question: "Quels langages vais-je apprendre?", answer: "Principalement Python pour l'IA et le ML." }
    ]
  },
  {
    slug: "cybersecurite",
    courseTitle: "Cybersécurité",
    courseSubtitle: "Protégez vos données et apprenez les bases de la sécurité informatique.",
    heroImageUrl: "/assets/courses/coursesSeven.png",
    introParagraphs: [
      "Ce cours vous initie aux pratiques essentielles pour sécuriser les systèmes informatiques.",
      "Parfait pour comprendre comment protéger vos données en ligne."
    ],
    resourcesHeading: "Ressources pour la Cybersécurité",
    resources: [
      { title: "Sécurité des Réseaux", description: "Les bases de la sécurisation des réseaux informatiques." },
      { title: "Prévention et Défense", description: "Stratégies pour prévenir et contrer les attaques." },
      { title: "Outils et Techniques", description: "Découvrez les outils essentiels en cybersécurité." }
    ],
    sliderTitle: "Renforcez Votre Sécurité Informatique",
    sliderItems: [
      { title: "Introduction", description: "Les bases de la cybersécurité expliquées de manière simple.", imageUrl: "/assets/courses/coursesSeven.png" },
      { title: "Techniques Avancées", description: "Approfondissez vos compétences en sécurité informatique.", imageUrl: "/assets/courses/coursesSeven.png" }
    ],
    timelineTitle: "Votre Parcours en Cybersécurité",
    timelineItems: [
      { step: 1, description: "Fondamentaux de la Sécurité (1 mois)" },
      { step: 2, description: "Techniques Avancées (1 mois)" },
      { step: 3, description: "Projet de Sécurité (2 mois)" }
    ],
    faqTitle: "Questions Fréquentes sur la Cybersécurité",
    faqItems: [
      { question: "Ce cours est-il pour tous?", answer: "Oui, il est accessible à tous les niveaux." },
      { question: "Dois-je avoir des connaissances en informatique?", answer: "Non, ce cours commence par les bases." }
    ]
  }
];
