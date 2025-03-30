import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Priceing from "./pages/Priceing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Priceing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
