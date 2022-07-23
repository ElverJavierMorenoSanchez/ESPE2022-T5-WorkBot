import "./App.css";

import ProductPage from "./views/ProductPage";
import TopBar from "./components/ComponentsTopBar/TopBar";
import Footer from "./components/ComponentsFooter/Footer";
import HomePage from "./views/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
