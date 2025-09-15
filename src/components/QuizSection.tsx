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
import { useQuiz } from "@/hooks/useQuiz";
import QuizResults from "@/components/QuizResults";

const QuizSection = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const { currentQuestion, state, answerQuestion, getResults, resetQuiz, saveProgress } = useQuiz();

  const benefits = [
    { icon: Brain, text: "AI-powered personalized career recommendations" },
    { icon: Award, text: "Detailed strength & aptitude analysis" },
    { icon: Users, text: "Compare with J&K student peer data" },
    { icon: CheckCircle, text: "Actionable next steps & college guidance" }
  ];

  // Show results if quiz is complete
  if (showQuiz && state.isComplete) {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-accent-light to-secondary/30">
        <div className="container max-w-4xl">
          <QuizResults 
            results={getResults()} 
            onRestart={() => {
              resetQuiz();
              setShowQuiz(false);
            }} 
          />
        </div>
      </section>
    );
  }

  // Show quiz interface
  if (showQuiz && currentQuestion) {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-accent-light to-secondary/30">
        <div className="container max-w-4xl">
          <Card className="shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="mb-2">
                  Question {state.answers.length + 1} of 8 (Adaptive)
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  Est. 2 mins remaining
                </div>
              </div>
              <CardTitle className="text-2xl">{currentQuestion.category.charAt(0).toUpperCase() + currentQuestion.category.slice(1)} Assessment</CardTitle>
              <CardDescription className="text-base">
                Answer honestly - there are no right or wrong answers
              </CardDescription>
              <Progress value={state.progress} className="mt-4" />
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-4 px-6 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => {
                        answerQuestion(currentQuestion.id, option.value);
                      }}
                    >
                      <span className="mr-3 font-medium">{String.fromCharCode(65 + index)}.</span>
                      {option.text}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between pt-6">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    saveProgress();
                    setShowQuiz(false);
                  }}
                >
                  Save & Continue Later
                </Button>
                <div className="text-sm text-muted-foreground">
                  {state.answers.length} answers recorded
                </div>
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

          {/* Smart Assessment Preview */}
          <div className="space-y-4">
            <Card className="hover:shadow-md transition-shadow border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold">Adaptive Intelligence</h3>
                    <p className="text-sm text-muted-foreground">Questions adapt based on your previous answers for more accurate results</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow border-success/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-sm font-medium text-success">
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold">J&K Focused Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Get personalized career paths with specific opportunities in Jammu & Kashmir</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium text-accent">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold">Progress Tracking</h3>
                    <p className="text-sm text-muted-foreground">Save your progress and get detailed analysis with actionable steps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                Takes 5-8 minutes • Completely Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;