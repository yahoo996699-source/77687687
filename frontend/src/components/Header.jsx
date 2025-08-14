import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "كل المنتجات", href: "/products" },
    { name: "فحص ومساند", href: "#" },
    { name: "مسامير لحام", href: "#" },
    { name: "قبضات", href: "#" },
    { name: "حبل وتنظيف", href: "#" },
    { name: "تيدل كابلات", href: "#" },
    { name: "مكروسكوب", href: "#" },
    { name: "مايكروسكوب", href: "#" }
  ];

  const subNavItems = [
    { name: "مبرجات", href: "#" },
    { name: "نظارات", href: "#" },
    { name: "كابلات", href: "#" },
    { name: "كومبيوتر", href: "#" },
    { name: "أدوات رقم", href: "#" },
    { name: "لوأجع", href: "#" }
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Header */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span>خيارات الدفع والتوصيل</span>
          </div>
          <div className="flex items-center gap-4">
            <User className="w-4 h-4" />
            <Search className="w-4 h-4" />
            <ShoppingCart className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">3X</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-yellow-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Sub Navigation */}
        <div className="hidden lg:flex justify-center border-t py-3">
          <nav className="flex items-center space-x-8 space-x-reverse">
            {subNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-yellow-500 transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-yellow-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <hr className="my-4" />
            {subNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-yellow-500 transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;