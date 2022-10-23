import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import StickyBar from "./components/StickyBar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Items from "./components/Items";
import "./styles/App.css";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StickyBar />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />}>
        <Route path=":id" element={<Items />} />
      </Route>
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);
export default App;
