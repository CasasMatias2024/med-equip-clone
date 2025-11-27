import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const detailPath = `/${product.category === 'system' ? 'systems' : 'parts'}/${product.slug}`;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={detailPath}>
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={product.mainImage} 
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <Link to={detailPath}>
            <h3 className="font-bold text-lg hover:text-primary transition-colors">
              {product.title}
            </h3>
          </Link>
          <Badge 
            variant={product.condition === 'new' ? 'default' : 'secondary'}
            className={product.condition === 'new' ? 'bg-condition-new' : 'bg-condition-refurbished'}
          >
            {product.condition === 'new' ? 'New' : 'Refurbished'}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{product.manufacturer}</p>
        {product.modality && (
          <p className="text-sm text-muted-foreground">{product.modality}</p>
        )}
        {product.partNumber && (
          <p className="text-sm text-muted-foreground">Part #: {product.partNumber}</p>
        )}
      </CardHeader>
      
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link to={detailPath}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
