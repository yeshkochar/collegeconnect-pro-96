import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import QuizSection from "@/components/QuizSection";
import CollegeDirectory from "@/components/CollegeDirectory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <QuizSection />
        <CollegeDirectory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
