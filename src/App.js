import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import StickyBar from "./components/StickyBar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { loader, Product } from "./pages/Product";
import "./styles/App.css";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StickyBar />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />}>
        <Route path="product/:id" element={<Product />} loader={loader} />
      </Route>
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);
export default App;
