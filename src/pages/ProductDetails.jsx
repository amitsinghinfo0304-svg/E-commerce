import { useContext } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";

import { ProductContext } from "../context/Productcontext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { product } = useContext(ProductContext);
  const { cart, addToCart, increase, decrease } = useContext(CartContext);

  const singleProduct = product.find((item) => item.id === Number(id));

  if (!singleProduct) {
    return (
      <div className="container py-5">
        <h2>Product Not Found</h2>

        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    );
  }

  const fromPage =
    location.state?.from ||
    (document.referrer.includes("/products") ? "Products" : "Home");

  const finalPrice = (
    singleProduct.price -
    (singleProduct.price / 100) * singleProduct.discountPercentage
  ).toFixed(2);

  const cartItem = cart.find((e) => e.id === singleProduct.id);

  return (
    <section className="py-5 product-details">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-4 product-breadcrumb">
          <Link to="/" className="text-decoration-none text-muted">
            Home
          </Link>

          <span className="mx-2">/</span>

          {fromPage === "Products" && (
            <>
              <Link to="/products" className="text-decoration-none text-muted">
                Products
              </Link>

              <span className="mx-2">/</span>
            </>
          )}

          <span className="fw-semibold">{singleProduct.title}</span>
        </div>

        {/* Back Button */}
        <button
          className="btn btn-outline-secondary mb-4"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Product */}
        <div className="row g-4 g-md-5 align-items-center">
          {/* Product Image */}
          <div className="col-12 col-md-6">
            <div className="product-image-box">
              <img
                src={singleProduct.thumbnail}
                alt={singleProduct.title}
                className="img-fluid product-detail-image"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="col-12 col-md-6">
            <p className="text-muted text-uppercase mb-2">
              {singleProduct.category}
            </p>

            <h1 className="fw-bold product-title">{singleProduct.title}</h1>

            <div className="mb-3">
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="star"
                    style={{
                      background: `linear-gradient(90deg, #ffc107 ${
                        Math.min(
                          Math.max(singleProduct.rating - star + 1, 0),
                          1,
                        ) * 100
                      }%, #ddd 0%)`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="product-price-box mb-3">
              <span className="price">₹{finalPrice}</span>
              &nbsp; &nbsp;
              <span className="old-price">
                ₹{singleProduct.price.toFixed(2)}
              </span>
              &nbsp; &nbsp;
              <span className="offer-text">
                {singleProduct.discountPercentage.toFixed(2)}% OFF
              </span>
            </div>

            <p className="text-muted product-description">
              {singleProduct.description}
            </p>

            <div className="mb-3">
              <p>
                <strong>Brand:</strong> {singleProduct.brand}
              </p>

              <p>
                <strong>Stock:</strong> {singleProduct.stock}
              </p>
              <p style={{ color: "red" }}>
                {cart.find((e) => e.id === singleProduct.id)?.qty >=
                  singleProduct.stock && "Limit Exceeded"}
              </p>
            </div>

            {/* Cart */}
            {cartItem ? (
              <div className="quantity-box">
                <button
                  className="decrease"
                  style={{ background: "green", marginRight: "10px" }}
                  onClick={() => decrease(singleProduct.id)}
                >
                  -
                </button>

                <span>{cartItem.qty}</span>

                <button
                  className="increase"
                  style={{
                    background:
                      cart.find((e) => e.id === cartItem.id).qty <
                      cartItem.stock
                        ? "green"
                        : "gray",
                    marginLeft: "10px",
                  }}
                  onClick={() => increase(singleProduct.id)}
                  disabled={
                    cart.find((e) => e.id === cartItem.id)?.qty >=
                    cartItem.stock
                  }
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="add-cart-btn"
                onClick={() => addToCart(singleProduct, singleProduct.id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
