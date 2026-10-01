import { useContext, useEffect } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const { cart, setShowCart, showCart } = useContext(CartContext);
  const { search, setSearch, submitData } = useContext(ProductContext);

  const location = useLocation();

  const cartCount = cart.reduce((count, item) => count + item.qty, 0);

  // Page change hone par mobile navbar close
  useEffect(() => {
    const navbar = document.getElementById("navbarContent");

    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container">

          {/* Logo */}
          <Link
            className="navbar-brand fw-bold fs-3 text-primary"
            to="/"
          >
            NovaCart
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
             {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarContent"
          >

            {/* Menu */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

            </ul>

            {/* Search */}
            <form
              className="d-flex me-lg-3 my-3 my-lg-0"
              onSubmit={(e) => {
                e.preventDefault();
                submitData();
              }}
            >
              <input
                className="form-control"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
              />

              <button
                type="submit"
                className="btn btn-primary ms-2"
              >
                Search
              </button>
            </form>

            {/* Right Side */}
            <div className="d-flex align-items-center gap-2">

              {/* Login */}
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>

              {/* Signup */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Signup
              </button>

              {/* Cart */}
              <button
                type="button"
                className="btn btn-primary position-relative"
                onClick={() => setShowCart(true)}
              >
                🛒 Cart

                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </button>

            </div>

          </div>
        </div>
      </nav>

      {showCart && <Cart />}

      {/* Modals */}
      <LoginModal />
      <SignupModal />
    </>
  );
}

export default Header;
