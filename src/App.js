import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import { loader as stickyLoader, StickyBar } from "./components/StickyBar";
import Shop from "./pages/Shop";
import { Cart } from "./pages/Cart";
import {
  loader as productLoader,
  action as productAction,
  Product,
} from "./pages/Product";
import "./styles/App.css";
import Gacha from "./pages/Gacha";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/shopping-cart" element={<StickyBar />} loader={stickyLoader}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />}>
        <Route
          path="product/:id"
          element={<Product />}
          loader={productLoader}
          action={productAction}
        />
      </Route>
      <Route path="gacha" element={<Gacha />} />
      <Route path="cart" element={<Cart />}>
        <Route
          path="product/:id"
          element={<Product />}
          loader={productLoader}
          action={productAction}
        />
      </Route>
    </Route>
  )
);
export default App;
