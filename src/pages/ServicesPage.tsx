import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Wrench, Clock, Shield, Phone } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Service & Support</h1>
          <p className="text-lg opacity-90">
            Comprehensive service solutions to keep your systems running at peak performance
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Preventive Maintenance</h3>
              <p className="text-muted-foreground">
                Regular scheduled maintenance to prevent downtime and extend system life. Our certified technicians follow manufacturer protocols.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Emergency Repair</h3>
              <p className="text-muted-foreground">
                24/7 emergency support for critical system failures. Rapid response times to minimize facility downtime and impact on patient care.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Service Contracts</h3>
              <p className="text-muted-foreground">
                Flexible service contract options tailored to your facility's needs. Includes parts, labor, and preventive maintenance visits.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondary">Why Choose Our Service?</h2>
            <ul className="space-y-4">
              {[
                'Factory-trained and certified technicians',
                'Extensive parts inventory for same-day repairs',
                'Comprehensive documentation and reporting',
                'Compliance with all regulatory standards',
                'Flexible scheduling to minimize disruption',
                'Remote diagnostics and troubleshooting',
              ].map(item => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-medical-blue-light to-accent p-8 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80" 
              alt="Service Technician"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Service Support?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our service team is ready to help. Contact us for immediate assistance or to schedule maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              Request Service
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg"
            >
              <a href="tel:+18553362666">
                <Phone className="mr-2 h-5 w-5" />
                Call (855) 336-2666
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
