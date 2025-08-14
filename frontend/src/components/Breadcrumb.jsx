import React from "react";
import { ChevronLeft } from "lucide-react";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-yellow-500 transition-colors">
        الرئيسية
      </a>
      <ChevronLeft className="w-4 h-4 mx-2 rotate-180" />
      <span className="text-gray-900 font-medium">كل المنتجات</span>
    </nav>
  );
};

export default Breadcrumb;