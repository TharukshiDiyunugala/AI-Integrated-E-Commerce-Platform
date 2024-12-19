// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Homepage from 'E:/AI-Integrated-E-Commerce-Platform/frontend/src/Components/Homepage';
// import ProductPage from 'E:/AI-Integrated-E-Commerce-Platform/frontend/src/Components/ProductPage';
// import CartPage from 'E:/AI-Integrated-E-Commerce-Platform/frontend/src/Components/CartPage.js';
// import CheckoutPage from 'E:/AI-Integrated-E-Commerce-Platform/frontend/src/Components/CheckOutPage';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/product" element={<ProductPage />} />
    //     <Route path="/cart" element={<CartPage />} />
    //     <Route path="/checkout" element={<CheckoutPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
