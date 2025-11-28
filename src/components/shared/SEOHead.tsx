import { Helmet } from 'react-helmet-async';
import { Product } from '@/types';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  productData?: Product;
}

export function SEOHead({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage = '/placeholder.svg',
  productData 
}: SEOHeadProps) {
  const fullTitle = `${title} | Mammo Clone`;
  const baseUrl = window.location.origin;
  const currentUrl = canonicalUrl || window.location.href;

  // Generate Product Schema.org structured data
  const productSchema = productData ? {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productData.title,
    "image": productData.mainImage,
    "description": productData.description.replace(/<[^>]*>/g, '').substring(0, 200),
    "brand": {
      "@type": "Brand",
      "name": productData.manufacturer
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "itemCondition": productData.condition === 'new' 
        ? "https://schema.org/NewCondition" 
        : "https://schema.org/RefurbishedCondition",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    },
    "additionalProperty": productData.specifications.map(spec => ({
      "@type": "PropertyValue",
      "name": spec.label,
      "value": spec.value
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={currentUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={productData ? "product" : "website"} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={productData?.mainImage || `${baseUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={productData?.mainImage || `${baseUrl}${ogImage}`} />
      
      {/* Structured Data - Product Schema */}
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
    </Helmet>
  );
}
