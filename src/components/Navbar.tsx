import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Courses", href: "#courses" },
    { name: "Mock Tests", href: "#mock-tests" },
    { name: "MCQs", href: "#mcqs" },
    { name: "Find Tutor", href: "#tutors" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              TechGhar
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-accent rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hover:bg-primary/10">
                Log in
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Sign up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background/98 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-20 px-4 space-y-6">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-accent rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-lg text-foreground/80 hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="space-y-4 pt-6">
            <Button variant="ghost" className="w-full justify-center hover:bg-primary/10">
              Log in
            </Button>
            <Button className="w-full justify-center bg-primary hover:bg-primary/90 text-white">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};