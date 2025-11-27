import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Settings, Wrench, Headphones, Phone, CheckCircle2, Truck, ClipboardCheck, Package } from 'lucide-react';
import { mockProducts } from '@/data/mockProducts';
import { ProductCard } from '@/components/shared/ProductCard';

export default function HomePage() {
  const featuredProducts = mockProducts.filter(p => p.featured);
  const spotlightProduct = mockProducts[0]; // First product as spotlight

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

      {/* Our Current Inventory */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Our Current Inventory
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '2D Systems', image: 'https://images.unsplash.com/photo-1579154204845-0f5d6ade6f01?w=500&q=80', link: '/systems' },
              { title: '3D Systems', image: 'https://images.unsplash.com/photo-1581093458791-9d42e72eb2c7?w=500&q=80', link: '/systems' },
              { title: 'Biopsy Systems', image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=500&q=80', link: '/parts' },
              { title: 'Peripherals', image: 'https://images.unsplash.com/photo-1583912267550-a837c6569ebd?w=500&q=80', link: '/parts' },
            ].map((category) => (
              <Card key={category.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6 pb-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-secondary">{category.title}</h3>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link to={category.link}>See Options</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            What We Offer
          </h2>
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

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Select System', description: 'Browse our extensive selection of systems and parts', icon: Package },
              { step: '2', title: 'Request Pricing', description: 'Fill out a quick form to get detailed pricing', icon: ClipboardCheck },
              { step: '3', title: 'Delivery & Installation', description: 'We handle delivery and professional installation', icon: Truck },
              { step: '4', title: 'Training & Support', description: 'Complete applications training and ongoing support', icon: CheckCircle2 },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-medical-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Spotlight */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-primary">Featured System</Badge>
              <h2 className="text-4xl font-bold mb-4 text-secondary">{spotlightProduct.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {spotlightProduct.manufacturer} • {spotlightProduct.condition === 'new' ? 'New' : 'Refurbished'}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>One-year parts and labor warranty included</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Professional installation and applications training</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Fully tested and quality assured</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to={`/systems/${spotlightProduct.slug}`}>View Details</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="tel:+18553362666">Contact Us</a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={spotlightProduct.mainImage}
                alt={spotlightProduct.title}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="py-16 bg-background">
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

      {/* Featured Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">More Featured Systems</h2>
            <p className="text-lg text-muted-foreground">
              Explore our current inventory of premium mammography equipment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map(product => (
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

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What warranty comes with refurbished systems?
              </AccordionTrigger>
              <AccordionContent>
                Every refurbished mammography system includes a comprehensive one-year parts and labor warranty. 
                We stand behind the quality of our equipment and provide full support throughout the warranty period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Do you provide installation and training?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Professional installation and applications training are included with every system purchase. 
                Our certified technicians will ensure your equipment is properly installed and your staff is fully trained.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How long does delivery and installation take?
              </AccordionTrigger>
              <AccordionContent>
                Typical delivery and installation timelines range from 2-4 weeks depending on your location and 
                site preparation requirements. We'll work with you to schedule installation at your convenience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Can I get financing for equipment purchases?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we work with several financing partners to offer flexible payment options. 
                Contact us to discuss financing solutions tailored to your facility's needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What's included in your service contracts?
              </AccordionTrigger>
              <AccordionContent>
                Our service contracts include preventive maintenance, priority emergency support, all parts and labor, 
                and unlimited service calls. We customize service plans to match your facility's specific requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Contact Info */}
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU4JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-secondary">Contact Information</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Phone:</strong> (855) 336-2666</p>
                      <p><strong>Email:</strong> info@mammosolutions.com</p>
                      <p><strong>Hours:</strong> Mon-Fri 8:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-secondary">Address</h3>
                    <p className="text-muted-foreground">
                      123 Medical Plaza Drive<br />
                      Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
