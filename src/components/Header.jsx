import { useContext, useEffect } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

import Cart from "./Cart";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Header() {
  const { cart, setShowCart, showCart } = useContext(CartContext);

  // Existing search logic
  const { search, setSearch, submitData } =
    useContext(ProductContext);

  const location = useLocation();
  const navigate = useNavigate();

  // ================= SEARCH =================

  const handleSearch = (e) => {
    e.preventDefault();

    // Tumhara existing search function
    submitData();

    // Search ke baad direct Products page
    navigate("/products");
  };

  // ================= CART COUNT =================

  const cartCount = cart.reduce(
    (count, item) => count + item.qty,
    0
  );

  // ================= MOBILE MENU CLOSE =================

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

          {/* ================= MOBILE TOP HEADER ================= */}

          <div className="mobile-header w-100 align-items-center justify-content-between">

            {/* Hamburger */}
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
            </button>

            {/* Logo */}
            <Link
              className="navbar-brand fw-bold fs-3 text-primary m-0"
              to="/"
            >
              NovaCart
            </Link>

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

          {/* ================= DESKTOP LOGO ================= */}

          <Link
            className="navbar-brand fw-bold fs-3 text-primary desktop-logo"
            to="/"
          >
            NovaCart
          </Link>

          {/* ================= NAVBAR CONTENT ================= */}

          <div
            className="collapse navbar-collapse"
            id="navbarContent"
          >

            {/* ================= NAVIGATION LINKS ================= */}

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">

              {/* Home */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {/* Products */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/products"
                >
                  Products
                </Link>
              </li>

              {/* Login - Mobile */}
              <li className="nav-item mobile-menu-item">
                <button
                  type="button"
                  className="nav-link btn btn-link"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </li>

              {/* Signup - Mobile */}
              <li className="nav-item mobile-menu-item">
                <button
                  type="button"
                  className="nav-link btn btn-link"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  Signup
                </button>
              </li>

            </ul>

            {/* ================= DESKTOP SEARCH ================= */}

            <form
              className="d-flex me-lg-3 my-3 my-lg-0 desktop-search"
              onSubmit={handleSearch}
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

            {/* ================= DESKTOP ACTIONS ================= */}

            <div className="d-flex align-items-center gap-2 desktop-actions">

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

          {/* ================= MOBILE SEARCH ================= */}

          <form
            className="mobile-search w-100 mt-2"
            onSubmit={handleSearch}
          >
            <div className="input-group">

              <input
                className="form-control"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
              />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Search
              </button>

            </div>
          </form>

        </div>
      </nav>

      {/* ================= CART ================= */}

      {showCart && <Cart />}

      {/* ================= MODALS ================= */}

      <LoginModal />
      <SignupModal />
    </>
  );
}

export default Header;
