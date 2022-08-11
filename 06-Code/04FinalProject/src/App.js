import "./App.css";
import React from "react";
import ProductPage from "./views/ProductPage";
import TopBar from "./components/ComponentsTopBar/TopBar";
import TopBarCrud from "./components/ComponentsTopBarCrud/TopBarCrud";
import Footer from "./components/ComponentsFooter/Footer";
import HomePage from "./views/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login.";
import AddProductsPage from "./views/AddProductsPage";
import UserPage from "./views/UserPage";
import CreditCardCrud from "./views/CreditCardCrud/CreditCardCrud";
import UserCrud from "./views/UserCrud/UserCrud";
import InvoiceCrud from "./views/InvoiceCrud/InvoiceCrud";
import ProductCrud from "./views/ProductCrud/ProductCrud";

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

        <Route
          path="/admin/products"
          element={
            <>
              <TopBarCrud />
              <ProductCrud />
            </>
          }
        />
        <Route
          path="/admin/users"
          element={
            <>
              <TopBarCrud />
              <UserCrud />
            </>
          }
        />
        <Route
          path="/admin/invoices"
          element={
            <>
              <TopBarCrud />
              <InvoiceCrud />
            </>
          }
        />
        <Route
          path="/admin/creditCards"
          element={
            <>
              <TopBarCrud />
              <CreditCardCrud />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
