import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;