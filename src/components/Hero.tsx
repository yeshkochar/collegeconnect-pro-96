import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const stats = [
    { icon: Users, value: "25,000+", label: "J&K Students Served" },
    { icon: Award, value: "150+", label: "J&K Colleges Listed" },
    { icon: Star, value: "95%", label: "Success Rate" },
    { icon: TrendingUp, value: "80%", label: "Better Placements" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent-light py-20 lg:py-28">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Government of Jammu & Kashmir Initiative
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Shape Your Future in
                <span className="block text-primary">Jammu & Kashmir</span>
                <span className="block text-accent">Start Your Journey</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Official career guidance platform for J&K students. Discover personalized 
                pathways, explore government colleges across the Union Territory, 
                and access exclusive opportunities designed for your success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Take Free Quiz
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Serving students across Jammu & Kashmir</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <stat.icon className="h-6 w-6 text-primary mx-auto" />
                    <div className="font-bold text-lg">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <Card className="overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Students studying together"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </Card>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              ✨ Free Platform
            </div>
            <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              🎯 Personalized Guidance
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      </div>
    </section>
  );
};

export default Hero;