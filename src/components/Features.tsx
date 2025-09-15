import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Trophy,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Aptitude & Interest Quiz",
      description: "Discover your strengths and interests through our comprehensive assessment",
      features: ["Personality Analysis", "Skill Assessment", "Interest Mapping", "Career Suggestions"],
      color: "primary"
    },
    {
      icon: GraduationCap,
      title: "Course-to-Career Mapping",
      description: "Explore how different courses connect to real career opportunities",
      features: ["Career Pathways", "Government Jobs", "Higher Education", "Skill Requirements"],
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Government Colleges Directory",
      description: "Find and compare government colleges in your area with detailed information",
      features: ["College Search", "Eligibility Criteria", "Facilities Info", "Location Mapping"],
      color: "success"
    }
  ];

  const additionalFeatures = [
    {
      icon: Calendar,
      title: "Timeline & Notifications",
      description: "Never miss important admission dates and deadlines"
    },
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "Access free e-books and skill development content"
    },
    {
      icon: Trophy,
      title: "Scholarships",
      description: "Discover scholarship opportunities that match your profile"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Comprehensive Support for
            <span className="block text-primary">J&K Students</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Government-backed platform providing all the tools and information you need 
            to excel in Jammu & Kashmir's educational landscape and beyond.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => {
                    const isQuizFeature = feature.title === "Aptitude & Interest Quiz" || feature.title === "Course-to-Career Mapping";
                    if (isQuizFeature) {
                      window.history.pushState(null, "", "#quiz-start");
                      document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.hash = "#colleges";
                    }
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;