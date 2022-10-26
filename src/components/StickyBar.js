import { NavLink, Outlet } from "react-router-dom";
import "../styles/StickyBar.css";

export default function StickyBar() {
  return (
    <>
      <header>
        <div className="nav-header">
          <NavLink to="/">GACHA</NavLink>
        </div>
        <div className="primary-nav">
          <ul>
            <li>
              <NavLink to="shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="#">Roll Gacha</NavLink>
            </li>
          </ul>
        </div>
        <div className="secondary-nav">
          <div className="search-container">
            <img src={require("../assets/magnify.png")} alt="search" />
            <input type="text" />
          </div>
          <div className="nav-cart">
            <div className="current-cart">0</div>
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
