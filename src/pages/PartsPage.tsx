import { mockProducts } from '@/data/mockProducts';
import { ProductCard } from '@/components/shared/ProductCard';
import { FilterSidebar } from '@/components/shared/FilterSidebar';

export default function PartsPage() {
  const parts = mockProducts.filter(p => p.category === 'part');

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mammography Parts</h1>
          <p className="text-lg opacity-90">
            Thousands of new and tested parts ready to ship today
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <aside>
            <FilterSidebar />
          </aside>

          <div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {parts.length} {parts.length === 1 ? 'part' : 'parts'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {parts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
