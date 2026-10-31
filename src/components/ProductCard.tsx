'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProductType {
  name: string;
  slug?: string;
  description: string;
  application?: string;
  category?: string;
  image?: string;
}

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-surface-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full group">
      {/* Product Image Box */}
      <div className="relative h-56 bg-white flex items-center justify-center p-4 border-b border-surface-100 overflow-hidden">
        {product.image && !hasImageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className="product-image-placeholder w-full h-full flex flex-col items-center justify-center bg-surface-50 rounded-lg">
            <svg
              className="w-14 h-14 text-steel-400 group-hover:scale-110 transition-transform duration-500 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-xs font-semibold text-steel-600 uppercase tracking-wider">Precision Engineered</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-steel-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
          {product.description}
        </p>

        {product.application && (
          <div className="text-xs text-navy-800 bg-surface-50 p-2.5 rounded-lg border border-surface-200 mb-6">
            <span className="font-semibold text-steel-700">Application:</span> {product.application}
          </div>
        )}

        <Link
          href={`/contact/?product=${encodeURIComponent(product.name)}`}
          className="text-accent font-semibold text-sm hover:text-accent-hover transition-colors inline-flex items-center mt-auto group/btn"
        >
          Send Enquiry
          <svg
            className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
