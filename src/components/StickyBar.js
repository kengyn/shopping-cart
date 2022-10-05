import { NavLink, Outlet } from "react-router-dom";
export default function StickyBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Store</NavLink>
          </li>
          <li>
            <NavLink to="shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
