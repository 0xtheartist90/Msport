'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { X } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'shirts', label: 'Apparel' },
    { value: 'headwear', label: 'Headwear' },
    { value: 'bags', label: 'Bags' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'secondhand', label: 'Secondhand Finds' }
  ];

  const sizes = ['S', 'M', 'L', 'XL'];

  const uniqueProducts = useMemo(() => {
    const seenImages = new Set<string>();

    return products.filter(product => {
      if (product.id.startsWith('gen-')) {
        return false;
      }
      const primaryImage = product.images?.[0];
      if (!primaryImage) {
        return false;
      }
      if (seenImages.has(primaryImage)) {
        return false;
      }
      seenImages.add(primaryImage);

      return true;
    });
  }, []);

  const filteredProducts = uniqueProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const sizeMatch = selectedSizes.length === 0 || 
      (product.sizes && product.sizes.some(size => selectedSizes.includes(size)));
    
    return categoryMatch && priceMatch && sizeMatch;
  });

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === cat.value
                  ? 'accent-bg font-semibold'
                  : 'hover:bg-[#706C61]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="20000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <p className="text-sm">Up to ฿{priceRange[1].toLocaleString()}</p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">Size</h3>
        <div className="grid grid-cols-2 gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-4 py-2 rounded-lg border-2 transition-all ${
                selectedSizes.includes(size)
                  ? 'accent-bg accent-border font-semibold'
                  : 'border-[#706C61]/20 hover:border-[#706C61]'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedCategory('all');
          setPriceRange([0, 20000]);
          setSelectedSizes([]);
        }}
        className="w-full px-4 py-2 border border-[#706C61]/30 rounded-lg hover:bg-[#706C61]/10 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );

  return (
    <main className="section-cream min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">THE SHOP</h1>
          <p className="serif-subtext">Lifestyle golf essentials.</p>
        </div>

        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <FilterSidebar />
          </aside>

          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="w-full accent-bg px-6 py-3 rounded-xl font-semibold"
            >
              Filters ({filteredProducts.length} products)
            </button>
          </div>

          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-[#EFE9DC] p-6 overflow-y-auto lg:hidden">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <FilterSidebar />
            </div>
          )}

          <div>
            <div className="mb-6 text-sm opacity-70">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl opacity-60">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 20000]);
                    setSelectedSizes([]);
                  }}
                  className="mt-4 accent-bg px-6 py-3 rounded-xl font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="section-cream min-h-screen flex items-center justify-center">Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
