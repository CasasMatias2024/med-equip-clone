import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockProducts } from '@/data/mockProducts';
import { LeadFormModal } from '@/components/shared/LeadFormModal';
import { ProductCard } from '@/components/shared/ProductCard';
import { SEOHead } from '@/components/shared/SEOHead';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = mockProducts.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const categoryLabel = product.category === 'system' ? 'Systems' : 'Parts';
  const categoryPath = product.category === 'system' ? '/systems' : '/parts';
  
  // Generate SEO-friendly description
  const seoDescription = `${product.condition === 'new' ? 'Brand New' : 'Refurbished'} ${product.title} ${product.modality ? `- ${product.modality}` : ''}. Professional medical imaging equipment with warranty, installation, and training included. Request pricing today.`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={product.title}
        description={seoDescription}
        canonicalUrl={`${window.location.origin}${categoryPath}/${product.slug}`}
        productData={product}
      />
      {/* Breadcrumbs */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">&lt; Home</Link>
            <span className="mx-2">/</span>
            <Link to={categoryPath} className="hover:text-primary transition-colors">{categoryLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
              <img 
                src={product.galleryImages[currentImageIndex]}
                alt={`${product.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {product.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.galleryImages.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-secondary">{product.title}</h1>
                {product.partNumber && (
                  <p className="text-muted-foreground mb-2">Part #: {product.partNumber}</p>
                )}
              </div>
              <Badge 
                className={`text-base ${product.condition === 'new' ? 'bg-condition-new' : 'bg-condition-refurbished'}`}
              >
                {product.condition === 'new' ? 'New' : 'Refurbished'}
              </Badge>
            </div>

            <div className="space-y-4 mb-8">
              {product.modality && (
                <div>
                  <span className="font-semibold text-secondary">Modality: </span>
                  <span className="text-foreground">{product.modality}</span>
                </div>
              )}
              <div>
                <span className="font-semibold text-secondary">Manufacturer: </span>
                <span className="text-foreground">{product.manufacturer}</span>
              </div>
              {product.specifications[2] && (
                <div>
                  <span className="font-semibold text-secondary">System: </span>
                  <span className="text-foreground">{product.specifications[2].value}</span>
                </div>
              )}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-lg h-14 mb-4"
              onClick={() => setModalOpen(true)}
            >
              REQUEST PRICING
            </Button>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-secondary">What's Included</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>One-year parts and labor warranty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Professional installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Applications training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Quality assurance testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger 
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Description
            </TabsTrigger>
            <TabsTrigger 
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Specifications
            </TabsTrigger>
            {product.accessories && product.accessories.length > 0 && (
              <TabsTrigger 
                value="accessories"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Included Accessories
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="border-b border-border pb-3">
                  <div className="font-semibold text-secondary">{spec.label}</div>
                  <div className="text-foreground">{spec.value}</div>
                </div>
              ))}
            </div>
          </TabsContent>

          {product.accessories && product.accessories.length > 0 && (
            <TabsContent value="accessories" className="mt-6">
              <ul className="space-y-2">
                {product.accessories.map((accessory, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{accessory}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          )}
        </Tabs>
      </div>

      {/* Our Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🔍', title: 'Inspection', description: 'Thorough evaluation of all components and systems' },
              { icon: '🔧', title: 'Refurbishment', description: 'Expert technicians restore equipment to optimal condition' },
              { icon: '✓', title: 'Testing', description: 'Rigorous quality assurance and performance testing' },
              { icon: '📦', title: 'Delivery', description: 'Professional installation and comprehensive training' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-secondary">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Related Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
          </div>
        </div>
      </section>

      <LeadFormModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        productTitle={product.title}
      />
    </div>
  );
}
