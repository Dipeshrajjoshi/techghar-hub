import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Brain, Users, Award, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Calculate days until next exam (example date)
  const examDate = new Date('2024-12-31');
  const today = new Date();
  const daysUntilExam = Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const faqs = [
    {
      question: "How do I prepare for the Computer Engineering License Exam?",
      answer: "Start with our structured courses, practice with MCQs daily, take mock tests regularly, and connect with our expert tutors for guidance."
    },
    {
      question: "What topics are covered in the exam?",
      answer: "The exam covers computer architecture, networking, programming, database management, software engineering, and other core computer engineering concepts."
    },
    {
      question: "How long should I prepare for the exam?",
      answer: "We recommend at least 3-6 months of dedicated preparation, depending on your current knowledge level and experience."
    }
  ];

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

      {/* Footer */}
      <footer className="bg-accent/50 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Calendar Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Exam Calendar</h3>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md"
                />
              </div>
            </div>

            {/* Day Counter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Next Exam</h3>
              <div className="bg-background rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {daysUntilExam}
                </div>
                <div className="text-muted-foreground">Days Remaining</div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="bg-background rounded-lg shadow-sm">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Secondary Footer */}
          <div className="border-t border-border pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Social Media Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Advertise */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Advertise</h4>
                <Button variant="link" className="text-muted-foreground hover:text-primary p-0">
                  Advertise with us
                </Button>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Quick Links</h4>
                <div className="space-y-2">
                  <Button variant="link" className="text-muted-foreground hover:text-primary p-0">
                    Terms of Service
                  </Button>
                  <br />
                  <Button variant="link" className="text-muted-foreground hover:text-primary p-0">
                    Privacy Policy
                  </Button>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Contact</h4>
                <p className="text-sm text-muted-foreground">
                  support@techghar.com
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-border pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} TechGhar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
