import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Master Your Computer Engineering License Exam
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive study materials, practice tests, and expert guidance to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Learning
            </Button>
            <Button size="lg" variant="outline">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Structured Courses",
                description: "Well-organized study materials covering all exam topics",
              },
              {
                icon: Brain,
                title: "Practice MCQs",
                description: "Thousands of questions with detailed explanations",
              },
              {
                icon: Award,
                title: "Mock Tests",
                description: "Simulate real exam conditions with timed tests",
              },
              {
                icon: Users,
                title: "Expert Tutors",
                description: "Connect with experienced professionals",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-background/80 backdrop-blur-sm border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful engineers who trusted TechGhar for their exam preparation.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Create Free Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;