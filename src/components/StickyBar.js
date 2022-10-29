import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { totalQty } from "../pages/Cart";
import "../styles/StickyBar.css";

function loader() {
  return totalQty();
}

function StickyBar() {
  const qtyInCart = useLoaderData();
  return (
    <>
      <header>
        <div className="nav-header">
          <NavLink to="/shopping-cart">GACHA</NavLink>
        </div>
        <div className="primary-nav">
          <ul>
            <li>
              <NavLink to="shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="gacha">Roll Gacha</NavLink>
            </li>
          </ul>
        </div>
        <div className="secondary-nav">
          <div className="search-container">
            <img src={require("../assets/magnify.png")} alt="search" />
            <input type="text" />
          </div>
          <div className="nav-cart">
            <div className="current-cart">{qtyInCart}</div>
            <NavLink to="cart">
              <img src={require("../assets/cart-outline.png")} alt="cart" />
            </NavLink>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export { loader, StickyBar };
