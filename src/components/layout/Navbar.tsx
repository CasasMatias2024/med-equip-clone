import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center">
              <span className="text-primary font-bold text-xl">m</span>
            </div>
            <span className="ml-2 text-xl font-bold text-secondary">mammo<span className="text-primary">.com</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Mammography Systems
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="space-y-2">
                        <Link to="/systems" className="block p-3 rounded-md hover:bg-accent transition-colors">
                          <div className="font-semibold text-secondary">All Systems</div>
                          <div className="text-sm text-muted-foreground">Browse our complete inventory</div>
                        </Link>
                        <Link to="/systems" className="block p-3 rounded-md hover:bg-accent transition-colors">
                          <div className="font-semibold text-secondary">3D Mammography</div>
                          <div className="text-sm text-muted-foreground">Tomosynthesis systems</div>
                        </Link>
                        <Link to="/systems" className="block p-3 rounded-md hover:bg-accent transition-colors">
                          <div className="font-semibold text-secondary">2D Digital</div>
                          <div className="text-sm text-muted-foreground">Traditional digital mammography</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/parts" className="text-foreground hover:text-primary transition-colors font-medium">
              Parts
            </Link>
            
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <a href="tel:+18553362666" className="flex items-center text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">(855) 336-2666</span>
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/systems" 
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mammography Systems
            </Link>
            <Link 
              to="/parts" 
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Parts
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <div className="pt-4 space-y-3">
              <a href="tel:+18553362666" className="flex items-center text-foreground font-semibold">
                <Phone className="h-4 w-4 mr-2" />
                (855) 336-2666
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
