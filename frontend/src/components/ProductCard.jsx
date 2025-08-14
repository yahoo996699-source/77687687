import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (product.outOfStock) return;
    
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تم إضافة ${product.name} إلى سلة التسوق`,
    });
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "تم الحذف من المفضلة" : "تمت الإضافة للمفضلة",
      description: `${product.name}`,
    });
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist Button */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      >
        <Heart 
          className={`w-4 h-4 transition-colors ${
            isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'
          }`} 
        />
      </button>

      {/* Sale Badge */}
      {product.isOnSale && (
        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
          عرض
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square p-4 flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform group-hover:scale-105"
          onError={(e) => {
            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBWMTMwTTcwIDEwMEgxMzAiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+";
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">
              {product.price.toLocaleString()} د.ع
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()} د.ع
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={product.outOfStock}
          className={`w-full transition-all duration-300 ${
            product.outOfStock
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
              : 'bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105'
          }`}
        >
          {product.outOfStock ? (
            "نفذت الكمية"
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 ml-2" />
              أضف للسلة
            </>
          )}
        </Button>
      </div>

      {/* Hover Overlay Effect */}
      <div className={`absolute inset-0 bg-yellow-500/5 transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};

export default ProductCard;