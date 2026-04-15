import { Link } from "react-router-dom";

/**
 * Shows the app title and a short description.
 */
function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <Link className="brand-link" to="/">
          Skill Tree Builder
        </Link>
        <p className="site-nav__user">Core feature: create and view skill trees</p>
      </div>
    </header>
  );
}

export default Navbar;
