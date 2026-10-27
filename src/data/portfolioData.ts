export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  studyDuration: string;
  status: string;
  notes?: string;
  badge?: string;
}

export interface InternshipItem {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string;
  highlights: string[];
  isDurationEditable?: boolean;
}

export interface PracticalProject {
  id: string;
  title: string;
  category: 'gardening' | 'nursery' | 'vegetables' | 'campus' | 'ai-content' | 'ai-agri';
  categoryLabel: string;
  description: string;
  learnings: string[];
  isFutureConcept?: boolean;
  imageFallbackType: 'garden' | 'nursery' | 'vegetable' | 'education' | 'ai' | 'smart-farming';
  customImage?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  level: string;
  description: string;
  items: string[];
}

export interface SocialLinks {
  email: string;
  linkedIn: string;
  facebook: string;
  whatsApp: string; // empty unless user provides
  youtube?: string;
  github?: string;
}

export interface PortfolioData {
  brand: {
    fullName: string;
    brandName: string;
    location: string;
    heroLabel: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroIntro: string;
    heroCredibility: string;
    aboutIntro: string;
    portraitImage?: string;
  };
  education: EducationItem[];
  internships: InternshipItem[];
  projects: PracticalProject[];
  skills: SkillCategory[];
  vision: {
    title: string;
    mission: string;
    pillars: {
      title: string;
      description: string;
      points: string[];
    }[];
  };
  social: SocialLinks;
}

export const initialPortfolioData: PortfolioData = {
  brand: {
    fullName: "Bilal Mustafa",
    brandName: "Bilal Agriculture Wala",
    location: "Pakistan",
    heroLabel: "AGRICULTURE × ARTIFICIAL INTELLIGENCE × EDUCATION",
    heroHeadline: "Growing Beyond Boundaries.",
    heroSubheadline: "Connecting Agriculture, AI & a Better Future.",
    heroIntro: "I’m Bilal Mustafa, known as Bilal Agriculture Wala. I’m building my journey through practical experience, AI education, and modern agriculture — with a vision to create meaningful opportunities for Pakistani farmers.",
    heroCredibility: "Practical Learning • Agriculture • AI Education",
    aboutIntro: "I am Bilal Mustafa, known as Bilal Agriculture Wala. I am a practical learner interested in agriculture, artificial intelligence, education, and technology. Through my studies, internships, and hands-on activities, I am building useful skills and exploring how modern technology can create better opportunities for people and farmers in Pakistan.",
    portraitImage: "/assets/aistudio/ChatGPT_Image_Sep_18__2026__11_12_26_PM__1__d730571d.png",
  },
  education: [
    {
      id: "edu-ai",
      institution: "Rehan College",
      qualification: "Four-Year AI Diploma Program",
      studyDuration: "Ongoing Student",
      status: "In Progress",
      notes: "Enrolled in a 4-year diploma focusing on artificial intelligence and modern digital tools. Also completed AI Teacher Training – Level 2 to share technology knowledge effectively.",
      badge: "AI Teacher Training – Level 2",
    },
    {
      id: "edu-agri",
      institution: "Pak German Institute",
      qualification: "Agriculture Studies",
      studyDuration: "Approx. 1 Year and 9 Months",
      status: "Previous Study",
      notes: "Completed foundational coursework and practical field learning in agriculture. Presenting as previous study.",
    },
    {
      id: "edu-matric",
      institution: "Rising Star School",
      qualification: "Matriculation",
      studyDuration: "Completed",
      status: "Secondary Education",
      notes: "Secondary school education laying the groundwork for subsequent technical and scientific learning.",
    },
  ],
  internships: [
    {
      id: "int-cooking",
      title: "Cooking Internship",
      organization: "Culinary & Food Preparation Center",
      duration: "3 months",
      description: "Gained practical experience in cooking and food preparation.",
      highlights: [
        "Hands-on kitchen operations and food safety",
        "Ingredient preparation and meal presentation",
        "Teamwork, cleanliness, and kitchen discipline",
      ],
    },
    {
      id: "int-teaching",
      title: "Facilitator / Junior Teacher Internship",
      organization: "Educational Learning Environment",
      duration: "3 months",
      description: "Gained practical exposure to educational activities and teaching-related work.",
      highlights: [
        "Assisted students with interactive learning sessions",
        "Prepared classroom materials and supported student engagement",
        "Developed communication and educational mentoring skills",
      ],
    },
    {
      id: "int-nursery",
      title: "Nursery Internship",
      organization: "Plant Nursery & Care Center (Editable)",
      duration: "Practical Exposure (Duration Editable)",
      description: "Gained practical exposure to nursery-related activities and plant care.",
      highlights: [
        "Seedling germination, nursery bed management, and potting soil mixtures",
        "Plant propagation, daily watering cycles, and pest observation",
        "Care for ornamental and agricultural saplings",
      ],
      isDurationEditable: true,
    },
    {
      id: "int-gardening",
      title: "Home Gardening Internship",
      organization: "Gardening & Plant Care Initiative (Editable)",
      duration: "Practical Experience (Duration Editable)",
      description: "Gained practical experience in home gardening, plant care, and related gardening activities.",
      highlights: [
        "Soil preparation, organic composting, and pot management",
        "Daily plant health monitoring, pruning, and seasonal care",
        "Practical understanding of moisture levels and sunlight requirements",
      ],
      isDurationEditable: true,
    },
  ],
  projects: [
    {
      id: "proj-home-garden",
      title: "Home Gardening & Plant Maintenance",
      category: "gardening",
      categoryLabel: "Home Gardening and Plant Care",
      description: "Practical gardening activities focusing on container planting, soil nourishment, seasonal plant care, and maintaining healthy green spaces.",
      learnings: [
        "Nutrient management and natural composting for small plots",
        "Water conservation techniques for home pots and garden beds",
        "Pruning and disease prevention in ornamental and potted plants",
      ],
      imageFallbackType: "garden",
    },
    {
      id: "proj-nursery-work",
      title: "Nursery Operations & Sapling Care",
      category: "nursery",
      categoryLabel: "Nursery and Agriculture Activities",
      description: "Hands-on nursery tasks including sapling handling, root protection, seed germination trays, and preparing young plants for transplanting.",
      learnings: [
        "Greenhouse temperature regulation and humidity balance",
        "Handling tender saplings without root shock",
        "Identifying early signs of plant distress and nutrient deficiencies",
      ],
      imageFallbackType: "nursery",
    },
    {
      id: "proj-vegetable-growing",
      title: "Vegetable Growing & Cultivation Basics",
      category: "vegetables",
      categoryLabel: "Vegetable Growing",
      description: "Hands-on vegetable-growing activities exploring growth cycles, pest management, and cultivating common household produce under Pakistani climate conditions.",
      learnings: [
        "Seasonal vegetable crop cycles (Rabi and Kharif considerations)",
        "Organic pest deterrents and companion planting",
        "Harvest timing for peak nutritional value and freshness",
      ],
      imageFallbackType: "vegetable",
    },
    {
      id: "proj-campus-work",
      title: "Educational Environment & Campus Improvement",
      category: "campus",
      categoryLabel: "Educational and School Campus Work",
      description: "Practical activities completed in educational environments, including school campus greening, classroom readiness, and student learning space improvements.",
      learnings: [
        "Participatory campus greening and tree plantation",
        "Organizing learning tools and educational displays for students",
        "Fostering pride in clean, welcoming educational spaces",
      ],
      imageFallbackType: "education",
    },
    {
      id: "proj-ai-content",
      title: "AI Tools & Educational Content Creation",
      category: "ai-content",
      categoryLabel: "AI and Educational Content",
      description: "Learning activities related to artificial intelligence tools, digital lesson aids, and creating accessible educational content as an AI Teacher Training (Level 2) learner.",
      learnings: [
        "Exploring generative AI for simplifying complex educational concepts",
        "Designing visual learning aids and Urdu-friendly explanations",
        "Structuring interactive lessons for peer and community learning",
      ],
      imageFallbackType: "ai",
    },
    {
      id: "proj-ai-agriculture",
      title: "AI for Agriculture (Exploration & Future Concept)",
      category: "ai-agri",
      categoryLabel: "AI for Agriculture",
      description: "An active area of interest and ongoing research into how smartphone AI, weather data, and crop image analysis can assist local Pakistani farmers.",
      learnings: [
        "Studying smartphone-based plant disease detection models",
        "Investigating localized weather and irrigation guidance for farmers",
        "Concept development for voice-assisted agricultural guidance in Urdu",
      ],
      isFutureConcept: true,
      imageFallbackType: "smart-farming",
    },
  ],
  skills: [
    {
      id: "skill-ai-tools",
      title: "Artificial Intelligence Tools",
      level: "Practical Learner",
      description: "Hands-on exploration of generative AI, prompt crafting, and AI-assisted research to accelerate learning and problem-solving.",
      items: ["Generative AI Models", "AI-Assisted Research", "Prompting Techniques", "Digital Workflows"],
    },
    {
      id: "skill-ai-teaching",
      title: "AI Teacher Training & Education",
      level: "Level 2 Completed",
      description: "Certified Level 2 AI Teacher Training graduate focused on breaking down technology concepts for students and community members.",
      items: ["AI Teacher Training (Level 2)", "Educational Facilitation", "Lesson Structure", "Peer Mentorship"],
    },
    {
      id: "skill-agri-learning",
      title: "Agriculture Studies & Field Learning",
      level: "Foundational Study (~1.75 yrs)",
      description: "Previous agricultural coursework at Pak German Institute covering crop fundamentals, soil basics, and farm management practices.",
      items: ["Agricultural Foundations", "Soil Basics", "Crop Lifecycle Overview", "Practical Field Observations"],
    },
    {
      id: "skill-home-gardening",
      title: "Home Gardening & Plant Care",
      level: "Practical Experience",
      description: "Direct hands-on experience caring for plants, container gardens, soil preparation, and daily maintenance.",
      items: ["Container Gardening", "Plant Health Monitoring", "Watering Schedules", "Composting Basics"],
    },
    {
      id: "skill-nursery",
      title: "Nursery-Related Practical Work",
      level: "Practical Exposure",
      description: "Practical nursery routines including seedling germination trays, potting mixes, sapling management, and plant care.",
      items: ["Sapling Handling", "Potting Soil Preparation", "Seedling Management", "Nursery Hygiene"],
    },
    {
      id: "skill-cooking",
      title: "Cooking & Food Preparation",
      level: "3-Month Internship",
      description: "Formal 3-month culinary internship building kitchen discipline, recipe preparation, food handling, and hygiene standards.",
      items: ["Kitchen Operations", "Food Preparation", "Hygiene & Safety Standards", "Time Management"],
    },
    {
      id: "skill-digital-content",
      title: "Digital Content & Tech Exploration",
      level: "Hands-on Exploration",
      description: "Creating accessible educational media, presentation visuals, and exploring software tools for everyday utility.",
      items: ["Visual Content Creation", "Presentation Design", "Digital Communication", "Technology Exploration"],
    },
  ],
  vision: {
    title: "Better Farming. Modern Technology. Stronger Pakistan.",
    mission: "My long-term vision is to help Pakistani farmers explore modern agriculture, artificial intelligence, and mobile technology to improve farming decisions, productivity, and income. I want to learn, experiment, share practical knowledge, and gradually develop solutions that address real agricultural challenges.",
    pillars: [
      {
        title: "Better Farming",
        description: "Promoting healthier soil, optimal water utilization, and proven agricultural practices adapted to local climate conditions.",
        points: [
          "Encourage soil nourishment and sustainable crop rotations",
          "Promote efficient water and resource management",
          "Support hands-on learning from experienced growers",
        ],
      },
      {
        title: "Modern Technology",
        description: "Making artificial intelligence, weather insights, and smartphone tools easy to understand and use for everyday agricultural tasks.",
        points: [
          "Explore accessible mobile AI applications for crop monitoring",
          "Translate technical information into simple, local languages",
          "Demystify digital tools for smallholder farming families",
        ],
      },
      {
        title: "Higher Opportunities for Farmers",
        description: "Helping farming communities reduce crop loss, cut unnecessary input expenses, and earn fair rewards for their hard work.",
        points: [
          "Reduce yield loss through timely pest and climate awareness",
          "Lower cultivation costs with precise input recommendations",
          "Empower rural youth with practical digital and agricultural skills",
        ],
      },
    ],
  },
  social: {
    email: "bilalagriculturewala@gmail.com",
    linkedIn: "https://www.linkedin.com/in/bilal-agriculture-wala",
    facebook: "https://www.facebook.com/bilalagriculturewala",
    whatsApp: "", // Leave blank until user provides preferred WhatsApp number
    youtube: "",
    github: "",
  },
};
