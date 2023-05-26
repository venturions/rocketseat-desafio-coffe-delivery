import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { OrderSummary } from "./pages/OrderSummary";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/summary" element={<OrderSummary />} />
      </Route>
    </Routes>
  );
}
