import React, { useState, useEffect } from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import SortFilter from "./SortFilter";
import ProductGrid from "./ProductGrid";
import WhatsAppWidget from "./WhatsAppWidget";
import { Toaster } from "./ui/toaster";
import { mockProducts } from "../data/mockData";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("mostOrdered");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading products
    setLoading(true);
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
    setLoading(true);
    
    setTimeout(() => {
      let sortedProducts = [...products];
      
      switch(option) {
        case "mostOrdered":
          sortedProducts.sort((a, b) => b.orders - a.orders);
          break;
        case "newest":
          sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          break;
        case "oldest":
          sortedProducts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
          break;
        case "priceHighToLow":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case "priceLowToHigh":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
      
      setProducts(sortedProducts);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4">
            <SortFilter 
              sortOption={sortOption} 
              onSortChange={handleSortChange}
            />
          </div>
          <div className="lg:w-3/4">
            <ProductGrid products={products} loading={loading} />
          </div>
        </div>
      </div>
      <WhatsAppWidget />
      <Toaster />
    </div>
  );
};

export default ProductsPage;