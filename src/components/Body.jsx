import { Route, Routes } from "react-router-dom";
import NavbarComponents from "./Navbar";
import Product from "./Product";
import Cart from "./Cart";

const Body = () => {
  return (
    <div>
      <NavbarComponents />
      <div className="container">
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Body;
