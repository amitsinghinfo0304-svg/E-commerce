
import { useContext } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Link
} from "react-router-dom";

import { ProductContext } from "../context/Productcontext";
import { CartContext } from "../context/CartContext";
const ProductDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const { product } = useContext(ProductContext);
 const { cart,addToCart,increase,decrease } = useContext(CartContext);
  const singleProduct = product.find(
    (item) => item.id === Number(id)
  );

  if (!singleProduct) {
    return (
      <div className="container py-5">
        <h2>Product Not Found</h2>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    );
  }

  // Current page source
  const fromPage =
    location.state?.from ||
    (document.referrer.includes("/products")
      ? "Products"
      : "Home");

  return (
    <section className="py-5">

      <div className="container">

        {/* Breadcrumb */}
        <div className="mb-4">

          <Link
            to="/"
            className="text-decoration-none text-muted"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          {fromPage === "Products" && (
            <>
              <Link
                to="/products"
                className="text-decoration-none text-muted"
              >
                Products
              </Link>

              <span className="mx-2">/</span>
            </>
          )}

          <span className="fw-semibold">
            {singleProduct.title}
          </span>

        </div>

        {/* Back Button */}
        <button
          className="btn btn-outline-secondary mb-4"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Product */}
        <div className="row g-5 align-items-center">

          {/* Product Image */}
          <div className="col-md-6">

            <div
              className="bg-black rounded p-4 text-center"
              style={{ minHeight: "400px" }}
            >

              <img
                src={singleProduct.thumbnail}
                alt={singleProduct.title}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain"
                }}
              />

            </div>

          </div>

          {/* Product Information */}
          <div className="col-md-6">

            <p className="text-muted text-uppercase mb-2">
              {singleProduct.category}
            </p>

            <h1 className="fw-bold">
              {singleProduct.title}
            </h1>

            <div className="mb-3">
              ⭐ {singleProduct.rating}
            </div>

            <h2 className="text-primary fw-bold mb-3">
             
               

    <span class="price">
        ₹{Math.round((singleProduct.price)-((singleProduct.price)/100)*singleProduct.discountPercentage)} 
    </span> &nbsp; 

    <span class="old-price">
        ₹{Math.round(singleProduct.price)} 
    </span>
    &nbsp; &nbsp; 
     <span class="offer-text">
        {singleProduct.discountPercentage} % OFF
    </span>


            </h2>

            <p className="text-muted">
              {singleProduct.description}
            </p>

            <div className="mb-3">

              <p>
                <strong>Brand:</strong>{" "}
                {singleProduct.brand}
              </p>

              <p>
                <strong>Stock:</strong>{" "}
                {singleProduct.stock}
              </p>

              <p>
                <strong>Discount:</strong>{" "}
                {singleProduct.discountPercentage}%
              </p>

            </div>

          {cart.find((e) => e.id === singleProduct.id) ? (
                            <div>
                              <button
                                className="decrease"
                                style={{ background: "green" }}
                                onClick={() => decrease(singleProduct.id)}
                              >
                                -
                              </button>

                              <span style={{ margin: "0 5px" }}>
                                 { cart.find((e) => e.id === singleProduct.id).qty }

                              </span>

                              <button
                                className="increase"
                                style={{ background: "green" }}
                                onClick={() => increase(singleProduct.id)}
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

