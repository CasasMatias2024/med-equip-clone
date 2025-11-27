import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full border-4 border-primary flex items-center justify-center">
                <span className="text-primary font-bold text-lg">m</span>
              </div>
              <span className="ml-2 text-lg font-bold">mammo<span className="text-primary">.com</span></span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Your trusted partner for mammography systems, parts, and service solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/systems" className="text-sm hover:text-primary transition-colors">
                  Mammography Systems
                </Link>
              </li>
              <li>
                <Link to="/parts" className="text-sm hover:text-primary transition-colors">
                  Parts
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <a href="tel:+18553362666" className="text-sm hover:text-primary transition-colors">
                  (855) 336-2666
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <a href="mailto:info@mammo.com" className="text-sm hover:text-primary transition-colors">
                  info@mammo.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <span className="text-sm">
                  United States
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Stay updated with our latest systems and offers
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Mammo.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
