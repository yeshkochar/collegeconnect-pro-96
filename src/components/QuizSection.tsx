import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  Play
} from "lucide-react";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  const quizSteps = [
    {
      title: "Personal Interests",
      description: "Tell us what subjects and activities you enjoy most",
      questions: 5,
      time: "3 mins"
    },
    {
      title: "Skills Assessment",
      description: "Evaluate your current strengths and abilities",
      questions: 8,
      time: "5 mins"
    },
    {
      title: "Career Preferences",
      description: "Understand your ideal work environment and goals",
      questions: 6,
      time: "4 mins"
    },
    {
      title: "Learning Style",
      description: "Discover how you learn and process information best",
      questions: 4,
      time: "2 mins"
    }
  ];

  const sampleQuestion = {
    question: "Which of these activities do you find most engaging?",
    options: [
      "Solving mathematical problems and puzzles",
      "Writing stories or articles",
      "Conducting science experiments",
      "Creating art or design projects"
    ]
  };

  const benefits = [
    { icon: Brain, text: "Personalized career recommendations" },
    { icon: Award, text: "Detailed strength analysis" },
    { icon: Users, text: "Compare with peer data" },
    { icon: CheckCircle, text: "Actionable next steps" }
  ];

  if (showQuiz) {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-accent-light to-secondary/30">
        <div className="container max-w-4xl">
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="mb-2">
                  Step {currentStep + 1} of {quizSteps.length}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {quizSteps[currentStep].time}
                </div>
              </div>
              <CardTitle className="text-2xl">{quizSteps[currentStep].title}</CardTitle>
              <CardDescription className="text-base">
                {quizSteps[currentStep].description}
              </CardDescription>
              <Progress value={(currentStep + 1) * 25} className="mt-4" />
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">{sampleQuestion.question}</h3>
                <div className="space-y-3">
                  {sampleQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => {
                        if (currentStep < quizSteps.length - 1) {
                          setCurrentStep(currentStep + 1);
                        } else {
                          // Quiz completed
                          setShowQuiz(false);
                          setCurrentStep(0);
                        }
                      }}
                    >
                      <span className="mr-3 font-medium">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between pt-6">
                <Button 
                  variant="ghost" 
                  onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                <Button variant="outline" onClick={() => setShowQuiz(false)}>
                  Save & Continue Later
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-accent-light to-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Government Certified Assessment
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Discover Opportunities in
                <span className="block text-primary">Jammu & Kashmir</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Take our government-backed comprehensive assessment designed specifically 
                for J&K students to get personalized recommendations for local and national opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                    <benefit.icon className="h-4 w-4 text-success" />
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => setShowQuiz(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Quiz Preview */}
          <div className="space-y-4">
            {quizSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{step.questions} questions</span>
                        <span>•</span>
                        <span>{step.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;