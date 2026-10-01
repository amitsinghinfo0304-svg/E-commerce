import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">

        <div className="row">

          {/* About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="fw-bold text-primary">NovaCart</h4>

            <p className="text-secondary mt-3">
              Shop your favorite products at the best prices.
              Quality products, secure payments and fast delivery.
            </p>

            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm">
                Facebook
              </a>

              <a href="#" className="btn btn-outline-light btn-sm">
                Instagram
              </a>

              <a href="#" className="btn btn-outline-light btn-sm">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold">Quick Links</h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="/" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/products"
                  className="text-secondary text-decoration-none"
                >
                  Products
                </a>
              </li>

              <li className="mb-2">
                <a
                  // href="/categories"
                  className="text-secondary text-decoration-none"
                >
                  Categories
                </a>
              </li>

              <li className="mb-2">
                <a
                  // href="/about"
                  className="text-secondary text-decoration-none"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold">Customer Service</h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a
                  // href="/contact"
                  className="text-secondary text-decoration-none"
                >
                  Contact Us
                </a>
              </li>

              <li className="mb-2">
                <a
                  // href="/shipping"
                  className="text-secondary text-decoration-none"
                >
                  Shipping
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/returns"
                  className="text-secondary text-decoration-none"
                >
                  Returns
                </a>
              </li>

              <li className="mb-2">
                <a
                  // href="/faq"
                  className="text-secondary text-decoration-none"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold">Contact Us</h5>

            <ul className="list-unstyled text-secondary mt-3">
              <li className="mb-2">
                📍 Mumbai, Maharashtra, India
              </li>

              <li className="mb-2">
                📧 support@NovaCart.com
              </li>

              <li className="mb-2">
                📞 +91 98765 43210
              </li>
            </ul>

            {/* Newsletter */}
            <h6 className="mt-4">Subscribe to our newsletter</h6>

            <form className="d-flex mt-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />

              <button className="btn btn-primary ms-2">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom */}
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary mb-0">
              © 2026 NovaCart. All rights reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <a
              href="/privacy"
              className="text-secondary text-decoration-none me-3"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-secondary text-decoration-none"
            >
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;