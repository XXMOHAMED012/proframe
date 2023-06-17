import "./App.css";
import { BrowserRouter, Routes, Route, Link, Form } from "react-router-dom";
import {
  OrderPage,
  Products,
  Exhibitions,
  Films,
  Home,
  Workshops,
  Weddings,
  Event,
} from "./pages";
import { Navbar, Footer } from "./components";
import "./assets/all.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/proframe" />
          <Route element={<Weddings />} path="/weddings" />
          <Route element={<Exhibitions />} path="/exhibitions" />
          <Route element={<Films />} path="/films" />
          <Route element={<Workshops />} path="/workshops" />
          <Route element={<Products />} path="/products" />
          <Route element={<OrderPage />} path="/order" />
          <Route element={<Event />} path="/:id" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
