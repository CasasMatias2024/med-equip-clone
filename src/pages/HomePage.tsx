import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Wrench, Headphones, Phone, CheckCircle2 } from 'lucide-react';
import { mockProducts } from '@/data/mockProducts';
import { ProductCard } from '@/components/shared/ProductCard';

export default function HomePage() {
  const featuredProducts = mockProducts.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent via-background to-medical-blue-light py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-secondary">
                Your <span className="text-primary">Mammography</span><br />
                Solutions Partner
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Leading provider of refurbished mammography systems, parts, and comprehensive service. 
                Every system includes warranty and applications training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                  <Link to="/systems">Browse Equipment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg border-2">
                  <a href="tel:+18553362666">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9d42e72eb2c7?w=800&q=80" 
                alt="Mammography Equipment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-medical-blue-light rounded-full flex items-center justify-center mb-6">
                  <Settings className="h-8 w-8 text-medical-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Every refurbished system we sell, deliver, and install comes with a one-year parts and labor warranty as well as applications training.
                </p>
                <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Link to="/systems">Browse Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-medical-blue-light rounded-full flex items-center justify-center mb-6">
                  <Wrench className="h-8 w-8 text-medical-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">Parts</h3>
                <p className="text-muted-foreground mb-6">
                  Thousands of new and tested parts ready to ship today, including Hologic detectors, tubes, & more.
                </p>
                <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Link to="/parts">View Parts</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-medical-blue-light rounded-full flex items-center justify-center mb-6">
                  <Headphones className="h-8 w-8 text-medical-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">Service</h3>
                <p className="text-muted-foreground mb-6">
                  Maximize up-time without compromising quality. We provide comprehensive service for your mammography systems.
                </p>
                <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Link to="/services">Service Options</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Proud Independent Provider Of
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Hologic', 'Fujifilm', 'GE Healthcare', 'Siemens'].map(brand => (
              <div key={brand} className="text-2xl font-bold text-muted-foreground opacity-60 hover:opacity-100 transition-opacity">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Featured Systems</h2>
            <p className="text-lg text-muted-foreground">
              Explore our current inventory of premium mammography equipment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link to="/systems">View All Systems</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Browse Inventory', description: 'Explore our extensive selection of systems and parts' },
              { step: '2', title: 'Request Pricing', description: 'Fill out a quick form to get detailed pricing' },
              { step: '3', title: 'Consultation', description: 'Speak with our experts about your needs' },
              { step: '4', title: 'Installation & Training', description: 'We handle delivery, installation, and staff training' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-secondary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Facility?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for personalized recommendations and pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/systems">Browse Systems</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg">
              <a href="tel:+18553362666">Call (855) 336-2666</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
