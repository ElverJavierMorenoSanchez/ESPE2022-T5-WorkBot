import "./App.css";
import React from "react";
import ProductPage from "./views/ProductPage";
import TopBar from "./components/ComponentsTopBar/TopBar";
import Footer from "./components/ComponentsFooter/Footer";
import HomePage from "./views/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login.";
import AddProductsPage from "./views/AddProductsPage";
import UserPage from "./views/UserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<UserPage />} />

        <Route
          path="/products"
          element={
            <>
              <TopBar />
              <ProductPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <TopBar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route path="/addProduct" element={<AddProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
