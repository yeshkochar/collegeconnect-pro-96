import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, BookOpen, Compass, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Courses", icon: BookOpen, href: "#courses" },
    { label: "Quiz", icon: Compass, href: "#quiz" },
    { label: "Colleges", icon: MapPin, href: "#colleges" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logoIcon} alt="Career Setu" className="h-8 w-8" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              Career<span className="text-primary">Setu</span>
            </span>
            <span className="text-xs text-muted-foreground leading-tight">Government of Jammu & Kashmir</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button variant="cta" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button variant="cta" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;