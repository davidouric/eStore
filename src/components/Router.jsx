import { BrowserRouter, Route, Routes,Outlet} from "react-router-dom";
import Home from "./Home";  
import About from "./About";
import Category from "./Category";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Dropdown from "./Dropdown";
import Megamenu1 from "./Megamenu1";
import Megamenu2 from "./Megamenu2";
import Contact from "./Contact";
 import Music from "./Music";
import ProductTwo from "./ProductTwo";
let Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/music" element={<Music/>}/> 
         <Route path="/category" element={<Category/>} />
         <Route path="/productDetails" element={<ProductDetails/>} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/checkout" element={<Checkout/>} />
         <Route path="/dropdown" element={<Dropdown/>} />
         <Route path="/megamenu1" element={<Megamenu1/>} />
         <Route path="/megamenu2" element={<Megamenu2/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/productTwo" element={<ProductTwo/>} />

      </Routes>
    </BrowserRouter>
  );
};
export default Router;