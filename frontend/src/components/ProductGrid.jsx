import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border p-4 animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 w-1/2"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      
      {/* Loading indicator */}
      {products.length > 0 && (
        <div className="col-span-full flex justify-center py-8">
          <div className="text-gray-500">جاري التحميل</div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;