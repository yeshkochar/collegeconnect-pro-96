export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    value: string;
    scores: {
      [key: string]: number;
    };
  }[];
  category: string;
  weight: number;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  jkOpportunities: string[];
  colleges: string[];
  salaryRange: string;
  growth: string;
}

export const CAREER_CATEGORIES = {
  STEM: 'stem',
  CREATIVE: 'creative',
  BUSINESS: 'business',
  SOCIAL: 'social',
  TECHNICAL: 'technical',
  HEALTHCARE: 'healthcare'
};

export const quizQuestions: QuizQuestion[] = [
  // Personal Interests
  {
    id: 'interests_1',
    question: 'Which of these activities do you find most engaging?',
    category: 'interests',
    weight: 1.5,
    options: [
      {
        text: 'Solving mathematical problems and analyzing data',
        value: 'math_analysis',
        scores: { [CAREER_CATEGORIES.STEM]: 3, [CAREER_CATEGORIES.TECHNICAL]: 2 }
      },
      {
        text: 'Creating art, writing stories, or designing graphics',
        value: 'creative_arts',
        scores: { [CAREER_CATEGORIES.CREATIVE]: 3, [CAREER_CATEGORIES.BUSINESS]: 1 }
      },
      {
        text: 'Leading group projects and organizing events',
        value: 'leadership',
        scores: { [CAREER_CATEGORIES.BUSINESS]: 3, [CAREER_CATEGORIES.SOCIAL]: 2 }
      },
      {
        text: 'Helping others solve their problems',
        value: 'helping_others',
        scores: { [CAREER_CATEGORIES.SOCIAL]: 3, [CAREER_CATEGORIES.HEALTHCARE]: 2 }
      }
    ]
  },
  {
    id: 'interests_2',
    question: 'What type of environment motivates you most?',
    category: 'interests',
    weight: 1.2,
    options: [
      {
        text: 'Quiet spaces where I can focus deeply on complex problems',
        value: 'quiet_complex',
        scores: { [CAREER_CATEGORIES.STEM]: 2, [CAREER_CATEGORIES.TECHNICAL]: 3 }
      },
      {
        text: 'Dynamic spaces with constant interaction and collaboration',
        value: 'dynamic_social',
        scores: { [CAREER_CATEGORIES.BUSINESS]: 3, [CAREER_CATEGORIES.SOCIAL]: 2 }
      },
      {
        text: 'Creative studios with freedom to experiment and innovate',
        value: 'creative_freedom',
        scores: { [CAREER_CATEGORIES.CREATIVE]: 3, [CAREER_CATEGORIES.TECHNICAL]: 1 }
      },
      {
        text: 'Structured environments where I can help and care for others',
        value: 'structured_caring',
        scores: { [CAREER_CATEGORIES.HEALTHCARE]: 3, [CAREER_CATEGORIES.SOCIAL]: 2 }
      }
    ]
  },
  
  // Skills Assessment
  {
    id: 'skills_1',
    question: 'Which skill comes most naturally to you?',
    category: 'skills',
    weight: 2.0,
    options: [
      {
        text: 'Breaking down complex problems into logical steps',
        value: 'logical_thinking',
        scores: { [CAREER_CATEGORIES.STEM]: 3, [CAREER_CATEGORIES.TECHNICAL]: 2 }
      },
      {
        text: 'Understanding and connecting with people\'s emotions',
        value: 'emotional_intelligence',
        scores: { [CAREER_CATEGORIES.SOCIAL]: 3, [CAREER_CATEGORIES.HEALTHCARE]: 2 }
      },
      {
        text: 'Seeing patterns and creating innovative solutions',
        value: 'pattern_innovation',
        scores: { [CAREER_CATEGORIES.CREATIVE]: 3, [CAREER_CATEGORIES.BUSINESS]: 2 }
      },
      {
        text: 'Learning and mastering technical tools quickly',
        value: 'technical_mastery',
        scores: { [CAREER_CATEGORIES.TECHNICAL]: 3, [CAREER_CATEGORIES.STEM]: 2 }
      }
    ]
  },
  {
    id: 'skills_2',
    question: 'How do you prefer to learn new concepts?',
    category: 'skills',
    weight: 1.3,
    options: [
      {
        text: 'Through hands-on experiments and practical application',
        value: 'hands_on',
        scores: { [CAREER_CATEGORIES.TECHNICAL]: 3, [CAREER_CATEGORIES.STEM]: 2 }
      },
      {
        text: 'By discussing ideas with others and getting feedback',
        value: 'collaborative',
        scores: { [CAREER_CATEGORIES.SOCIAL]: 3, [CAREER_CATEGORIES.BUSINESS]: 2 }
      },
      {
        text: 'Through visual examples and creative exploration',
        value: 'visual_creative',
        scores: { [CAREER_CATEGORIES.CREATIVE]: 3, [CAREER_CATEGORIES.TECHNICAL]: 1 }
      },
      {
        text: 'By studying theory and understanding underlying principles',
        value: 'theoretical',
        scores: { [CAREER_CATEGORIES.STEM]: 3, [CAREER_CATEGORIES.HEALTHCARE]: 1 }
      }
    ]
  },

  // Career Preferences  
  {
    id: 'career_1',
    question: 'What kind of impact do you want to make in your career?',
    category: 'career',
    weight: 1.8,
    options: [
      {
        text: 'Advance scientific knowledge and technological innovation',
        value: 'scientific_advancement',
        scores: { [CAREER_CATEGORIES.STEM]: 3, [CAREER_CATEGORIES.TECHNICAL]: 2 }
      },
      {
        text: 'Improve people\'s health and quality of life',
        value: 'health_improvement',
        scores: { [CAREER_CATEGORIES.HEALTHCARE]: 3, [CAREER_CATEGORIES.SOCIAL]: 2 }
      },
      {
        text: 'Create beautiful, meaningful content that inspires others',
        value: 'creative_inspiration',
        scores: { [CAREER_CATEGORIES.CREATIVE]: 3, [CAREER_CATEGORIES.SOCIAL]: 1 }
      },
      {
        text: 'Build successful organizations and drive economic growth',
        value: 'business_growth',
        scores: { [CAREER_CATEGORIES.BUSINESS]: 3, [CAREER_CATEGORIES.TECHNICAL]: 1 }
      }
    ]
  },

  // Learning Style
  {
    id: 'learning_1',
    question: 'Which learning approach helps you retain information best?',
    category: 'learning',
    weight: 1.0,
    options: [
      {
        text: 'Step-by-step tutorials and structured practice',
        value: 'structured_practice',
        scores: { [CAREER_CATEGORIES.TECHNICAL]: 2, [CAREER_CATEGORIES.HEALTHCARE]: 2 }
      },
      {
        text: 'Group discussions and peer learning',
        value: 'peer_learning',
        scores: { [CAREER_CATEGORIES.SOCIAL]: 2, [CAREER_CATEGORIES.BUSINESS]: 3 }
      },
      {
        text: 'Visual demonstrations and interactive examples',
        value: 'visual_interactive',
        scores: { [CAREER_CATEGORIES.CREATIVE]: 2, [CAREER_CATEGORIES.TECHNICAL]: 2 }
      },
      {
        text: 'Research-based study and analytical thinking',
        value: 'research_analytical',
        scores: { [CAREER_CATEGORIES.STEM]: 3, [CAREER_CATEGORIES.HEALTHCARE]: 1 }
      }
    ]
  }
];

export const careerPaths: { [key: string]: CareerPath } = {
  [CAREER_CATEGORIES.STEM]: {
    id: CAREER_CATEGORIES.STEM,
    title: 'Science, Technology, Engineering & Mathematics',
    description: 'Leverage analytical thinking and scientific methods to solve complex problems and drive innovation.',
    requiredSkills: ['Analytical thinking', 'Problem-solving', 'Mathematical proficiency', 'Research skills'],
    jkOpportunities: [
      'NIT Srinagar Research Programs',
      'J&K Science & Technology Department',
      'Renewable Energy Projects in Kashmir',
      'Agricultural Technology Innovation Centers'
    ],
    colleges: ['NIT Srinagar', 'University of Kashmir', 'IIIM Jammu', 'Central University of Jammu'],
    salaryRange: '₹4-25 LPA',
    growth: 'High demand in emerging technologies and research sectors'
  },
  [CAREER_CATEGORIES.TECHNICAL]: {
    id: CAREER_CATEGORIES.TECHNICAL,
    title: 'Information Technology & Engineering',
    description: 'Build and maintain technological solutions that power the modern world.',
    requiredSkills: ['Programming', 'System design', 'Technical problem-solving', 'Continuous learning'],
    jkOpportunities: [
      'Software Development Centers in Jammu',
      'Government Digital India Initiatives',
      'Tech Startups in Srinagar',
      'E-governance Projects'
    ],
    colleges: ['NIT Srinagar', 'IIIT Jammu', 'University of Jammu', 'Islamic University S&T'],
    salaryRange: '₹3-30 LPA',
    growth: 'Exponential growth with digitalization and startup ecosystem'
  },
  [CAREER_CATEGORIES.BUSINESS]: {
    id: CAREER_CATEGORIES.BUSINESS,
    title: 'Business & Entrepreneurship',
    description: 'Lead organizations, drive growth, and create economic value through strategic thinking.',
    requiredSkills: ['Leadership', 'Strategic planning', 'Communication', 'Financial analysis'],
    jkOpportunities: [
      'Kashmir Handicrafts Export Business',
      'Tourism Industry Management',
      'Agricultural Product Marketing',
      'J&K Bank Corporate Roles'
    ],
    colleges: ['University of Kashmir', 'Central University Jammu', 'SKUAST Kashmir', 'Jammu University'],
    salaryRange: '₹3-20 LPA',
    growth: 'Growing opportunities in regional business development and startups'
  },
  [CAREER_CATEGORIES.CREATIVE]: {
    id: CAREER_CATEGORIES.CREATIVE,
    title: 'Creative Arts & Design',
    description: 'Express creativity and cultural heritage while building innovative content and designs.',
    requiredSkills: ['Artistic vision', 'Creative thinking', 'Technical design skills', 'Cultural understanding'],
    jkOpportunities: [
      'Kashmir Cultural Documentation Projects',
      'Film Industry in J&K',
      'Digital Marketing Agencies',
      'Traditional Craft Modernization'
    ],
    colleges: ['University of Kashmir Fine Arts', 'Central University Jammu', 'Cluster University Srinagar'],
    salaryRange: '₹2-15 LPA',
    growth: 'Emerging opportunities in digital content and cultural preservation'
  },
  [CAREER_CATEGORIES.SOCIAL]: {
    id: CAREER_CATEGORIES.SOCIAL,
    title: 'Social Work & Community Development',
    description: 'Make a positive impact on society and help communities thrive and develop.',
    requiredSkills: ['Empathy', 'Communication', 'Community organizing', 'Policy understanding'],
    jkOpportunities: [
      'NGOs working in Kashmir Valley',
      'Government Social Welfare Schemes',
      'Community Development Projects',
      'Conflict Resolution and Peace Building'
    ],
    colleges: ['University of Kashmir Social Sciences', 'Central University Jammu', 'Jammu University'],
    salaryRange: '₹2-12 LPA',
    growth: 'Consistent demand for social development and community programs'
  },
  [CAREER_CATEGORIES.HEALTHCARE]: {
    id: CAREER_CATEGORIES.HEALTHCARE,
    title: 'Healthcare & Life Sciences',
    description: 'Dedicate your career to improving health outcomes and saving lives.',
    requiredSkills: ['Medical knowledge', 'Compassion', 'Attention to detail', 'Continuous learning'],
    jkOpportunities: [
      'SKIMS Hospital Srinagar',
      'Government Medical Colleges',
      'Rural Healthcare Initiatives',
      'Medical Research Programs'
    ],
    colleges: ['SKIMS Srinagar', 'Government Medical College Jammu', 'Government Medical College Srinagar'],
    salaryRange: '₹4-25 LPA',
    growth: 'High demand with expanding healthcare infrastructure in J&K'
  }
};

export const getAdaptiveQuestion = (
  answeredQuestions: string[],
  currentScores: { [key: string]: number }
): QuizQuestion | null => {
  // Filter out already answered questions
  const availableQuestions = quizQuestions.filter(q => !answeredQuestions.includes(q.id));
  
  if (availableQuestions.length === 0) return null;

  // Find the category with the highest score so far
  const topCategory = Object.keys(currentScores).reduce((a, b) => 
    currentScores[a] > currentScores[b] ? a : b
  );

  // Try to find a question that can help differentiate between top categories
  const strategicQuestion = availableQuestions.find(q => {
    return q.options.some(option => 
      option.scores[topCategory] && Object.keys(option.scores).length > 1
    );
  });

  return strategicQuestion || availableQuestions[0];
};