import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  forceSquareOnMobile?: boolean;
}

export default function ProductCard({ product, forceSquareOnMobile }: ProductCardProps) {
  const mediaClasses = `relative w-full overflow-hidden rounded-2xl bg-[#706C61]/10 ${forceSquareOnMobile ? 'aspect-square sm:aspect-auto sm:h-full sm:min-h-[300px]' : 'h-full min-h-[300px]'}`;

  return (
    <Link href={`/product/${product.slug}`} className="group block h-full">
      <div className={mediaClasses}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/80">{product.category}</p>
          <h3 className="text-xl font-bold mt-2">{product.name}</h3>
          <p className="font-semibold text-sm">฿{product.price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}
