import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Trophy,
  Target,
  School,
  MapPin,
  TrendingUp,
  DollarSign,
  CheckCircle,
  RotateCcw,
  Download,
  Share2
} from "lucide-react";
import { CareerPath } from "@/lib/quizData";

interface QuizResultsProps {
  results: {
    topCareer: CareerPath;
    secondaryCareer: CareerPath;
    scores: { career: CareerPath; score: number; percentage: number }[];
    recommendations: string[];
  };
  onRestart: () => void;
}

const QuizResults = ({ results, onRestart }: QuizResultsProps) => {
  const { topCareer, secondaryCareer, scores, recommendations } = results;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
          <Trophy className="h-8 w-8 text-success" />
        </div>
        <h2 className="text-3xl font-bold">Your Career Assessment Results</h2>
        <p className="text-muted-foreground">
          Based on your responses, we've identified the career paths that align best with your interests and strengths.
        </p>
      </div>

      {/* Top Career Match */}
      <Card className="border-success/20 bg-success/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge className="bg-success/10 text-success border-success/20">
              Best Match
            </Badge>
            <div className="text-2xl font-bold text-success">
              {scores[0]?.percentage}% Match
            </div>
          </div>
          <CardTitle className="text-2xl text-success">{topCareer?.title}</CardTitle>
          <CardDescription className="text-base">
            {topCareer?.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Key Skills Required
              </h4>
              <ul className="space-y-1">
                {topCareer?.requiredSkills.map((skill, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="h-3 w-3 mr-2 text-success" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Opportunities in J&K
              </h4>
              <ul className="space-y-1">
                {topCareer?.jkOpportunities.slice(0, 3).map((opportunity, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {opportunity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <DollarSign className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
              <div className="text-sm text-muted-foreground">Salary Range</div>
              <div className="font-semibold">{topCareer?.salaryRange}</div>
            </div>
            <div>
              <TrendingUp className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
              <div className="text-sm text-muted-foreground">Growth Outlook</div>
              <div className="font-semibold text-xs">{topCareer?.growth}</div>
            </div>
            <div>
              <School className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
              <div className="text-sm text-muted-foreground">Top Colleges</div>
              <div className="font-semibold text-xs">{topCareer?.colleges[0]}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Secondary Match */}
      {secondaryCareer && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">
                Secondary Match
              </Badge>
              <div className="text-xl font-semibold">
                {scores[1]?.percentage}% Match
              </div>
            </div>
            <CardTitle>{secondaryCareer.title}</CardTitle>
            <CardDescription>{secondaryCareer.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              Consider combining elements of both career paths for unique opportunities in the evolving job market.
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Scores */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Career Compatibility</CardTitle>
          <CardDescription>
            See how you scored across all career categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scores.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.career?.title}</span>
                  <span>{item.percentage}%</span>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Personalized Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Personalized Action Plan</CardTitle>
          <CardDescription>
            Next steps to advance your career in your chosen field
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 text-success flex-shrink-0" />
                <span className="text-sm">{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Recommended Colleges */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Colleges in J&K</CardTitle>
          <CardDescription>
            Top institutions for your preferred career path
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {topCareer?.colleges.map((college, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="font-semibold">{college}</div>
                <div className="text-sm text-muted-foreground">
                  Strong programs in {topCareer.title}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button onClick={onRestart} variant="outline">
          <RotateCcw className="h-4 w-4 mr-2" />
          Retake Assessment
        </Button>
        <Button variant="default">
          <Download className="h-4 w-4 mr-2" />
          Download Results
        </Button>
        <Button variant="outline">
          <Share2 className="h-4 w-4 mr-2" />
          Share Results
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;