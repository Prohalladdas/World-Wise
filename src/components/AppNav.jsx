import { NavLink } from "react-router-dom";
import stytles from "./AppNav.module.css";

export default function AppNav() {
  return (
    <nav className={stytles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}
