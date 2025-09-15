import { useState, useEffect } from 'react';
import { QuizQuestion, CareerPath, careerPaths, quizQuestions, getAdaptiveQuestion, CAREER_CATEGORIES } from '@/lib/quizData';

interface QuizAnswer {
  questionId: string;
  selectedOption: string;
  scores: { [key: string]: number };
}

interface QuizState {
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  totalScores: { [key: string]: number };
  isComplete: boolean;
  progress: number;
}

const STORAGE_KEY = 'jk_career_quiz_progress';

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
    totalScores: Object.values(CAREER_CATEGORIES).reduce((acc, category) => {
      acc[category] = 0;
      return acc;
    }, {} as { [key: string]: number }),
    isComplete: false,
    progress: 0
  });

  // Load saved progress on mount
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setState(parsed);
      } catch (error) {
        console.error('Error loading quiz progress:', error);
      }
    }
  }, []);

  // Save progress whenever state changes
  useEffect(() => {
    if (state.answers.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const getCurrentQuestion = (): QuizQuestion | null => {
    const answeredQuestionIds = state.answers.map(a => a.questionId);
    
    // Use adaptive questioning to get the next best question
    return getAdaptiveQuestion(answeredQuestionIds, state.totalScores);
  };

  const answerQuestion = (questionId: string, selectedOptionValue: string) => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (!question) return;

    const selectedOption = question.options.find(o => o.value === selectedOptionValue);
    if (!selectedOption) return;

    const weightedScores: { [key: string]: number } = {};
    Object.keys(selectedOption.scores).forEach(category => {
      weightedScores[category] = selectedOption.scores[category] * question.weight;
    });

    const newAnswer: QuizAnswer = {
      questionId,
      selectedOption: selectedOptionValue,
      scores: weightedScores
    };

    setState(prevState => {
      const newAnswers = [...prevState.answers, newAnswer];
      const newTotalScores = { ...prevState.totalScores };
      
      // Add weighted scores
      Object.keys(weightedScores).forEach(category => {
        newTotalScores[category] += weightedScores[category];
      });

      const totalQuestions = Math.min(quizQuestions.length, 8); // Adaptive quiz with max 8 questions
      const progress = (newAnswers.length / totalQuestions) * 100;
      const isComplete = newAnswers.length >= totalQuestions || getCurrentQuestion() === null;

      return {
        currentQuestionIndex: newAnswers.length,
        answers: newAnswers,
        totalScores: newTotalScores,
        isComplete,
        progress
      };
    });
  };

  const getResults = (): {
    topCareer: CareerPath;
    secondaryCareer: CareerPath;
    scores: { career: CareerPath; score: number; percentage: number }[];
    recommendations: string[];
  } => {
    const sortedScores = Object.keys(state.totalScores)
      .map(category => ({
        career: careerPaths[category],
        score: state.totalScores[category],
        percentage: 0
      }))
      .sort((a, b) => b.score - a.score);

    // Calculate percentages
    const maxScore = sortedScores[0]?.score || 1;
    sortedScores.forEach(item => {
      item.percentage = Math.round((item.score / maxScore) * 100);
    });

    const topCareer = sortedScores[0]?.career;
    const secondaryCareer = sortedScores[1]?.career;

    // Generate personalized recommendations
    const recommendations = generateRecommendations(state.answers, topCareer, secondaryCareer);

    return {
      topCareer,
      secondaryCareer,
      scores: sortedScores,
      recommendations
    };
  };

  const resetQuiz = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      currentQuestionIndex: 0,
      answers: [],
      totalScores: Object.values(CAREER_CATEGORIES).reduce((acc, category) => {
        acc[category] = 0;
        return acc;
      }, {} as { [key: string]: number }),
      isComplete: false,
      progress: 0
    });
  };

  const saveProgress = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  };

  return {
    currentQuestion: getCurrentQuestion(),
    state,
    answerQuestion,
    getResults,
    resetQuiz,
    saveProgress
  };
};

const generateRecommendations = (
  answers: QuizAnswer[],
  topCareer: CareerPath,
  secondaryCareer: CareerPath
): string[] => {
  const recommendations: string[] = [];

  if (topCareer) {
    recommendations.push(`Focus on ${topCareer.title} - your responses show strong alignment with this field`);
    
    if (topCareer.id === CAREER_CATEGORIES.STEM) {
      recommendations.push('Consider joining science clubs and participating in research projects');
      recommendations.push('Look into internships at NIT Srinagar or local research institutions');
    } else if (topCareer.id === CAREER_CATEGORIES.TECHNICAL) {
      recommendations.push('Start building a portfolio of coding projects on GitHub');
      recommendations.push('Join local tech meetups and online coding communities');
    } else if (topCareer.id === CAREER_CATEGORIES.BUSINESS) {
      recommendations.push('Develop leadership skills through student government or entrepreneurship clubs');
      recommendations.push('Consider internships with local businesses or startups in J&K');
    } else if (topCareer.id === CAREER_CATEGORIES.CREATIVE) {
      recommendations.push('Build a portfolio showcasing your creative work');
      recommendations.push('Explore opportunities in Kashmir\'s rich cultural and artistic heritage');
    } else if (topCareer.id === CAREER_CATEGORIES.SOCIAL) {
      recommendations.push('Volunteer with local NGOs or community organizations');
      recommendations.push('Develop understanding of social issues specific to J&K region');
    } else if (topCareer.id === CAREER_CATEGORIES.HEALTHCARE) {
      recommendations.push('Focus on science subjects and consider medical entrance exam preparation');
      recommendations.push('Volunteer at local hospitals or health centers to gain experience');
    }
  }

  if (secondaryCareer && secondaryCareer.id !== topCareer?.id) {
    recommendations.push(`Consider combining ${topCareer?.title} with ${secondaryCareer.title} for unique career opportunities`);
  }

  recommendations.push('Connect with alumni from your target colleges through LinkedIn');
  recommendations.push('Research scholarship opportunities specific to J&K students');

  return recommendations;
};