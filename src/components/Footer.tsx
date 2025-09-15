import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Success Stories", href: "#success" },
    { label: "Blog", href: "#blog" },
  ];

  const resources = [
    { label: "Career Guide", href: "#guide" },
    { label: "Study Materials", href: "#materials" },
    { label: "Scholarships", href: "#scholarships" },
    { label: "Admission Calendar", href: "#calendar" },
  ];

  const support = [
    { label: "Help Center", href: "#help" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logoIcon} alt="Career Setu" className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">
                  Career<span className="text-primary">Setu</span>
                </span>
                <span className="text-xs text-muted-foreground">Government of Jammu & Kashmir</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Official career guidance platform empowering J&K students to make informed 
              decisions about their educational journey through government-backed resources 
              and comprehensive support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@careersetu.jk.gov.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 194 245 0123</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Secretariat, Srinagar, J&K 190001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Support */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates on admissions, scholarships, and career opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button variant="cta" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Support</h4>
              <ul className="space-y-2">
                {support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Government of Jammu & Kashmir. All rights reserved. Made with ❤️ for J&K students.
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;