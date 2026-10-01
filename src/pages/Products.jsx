import {useContext, useState } from "react";
import { ProductContext } from "../context/Productcontext";
import { CartContext } from "../context/CartContext"
import Loader from "../components/Loader";
const Product = () => {
  

      const {cart,addToCart,filterProducts,increase,decrease,catogery,setCatogery,priceSelection,setPriceSelection, minPrice,
                setMinPrice,
                maxPrice,
                setMaxPrice,}=useContext(CartContext)
     const {
    
            loading,
            product
            
            
        } = useContext(ProductContext);
    const uniqueCategories = [...new Set(product.map(e=>e.category))];

  return (
   <section className="py-5">
  <div className="container">

    <div className="row g-4 product-layout">

      {/* Filters */}
      <aside className="col-lg-3 product-filter">
        <div className="card p-3 filter-card">

          {/* Search */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Search
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Category
            </label>

            <select className="form-select" value={catogery} onChange={(e)=>setCatogery(e.target.value)}>
              <option value="all">All Categories</option>
              {
                uniqueCategories.map((e)=>
                  <option value={e}>{e}</option>
                )

              }
            </select>
          </div>

          {/* Sort */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Sort By
            </label>

           <select
    className="form-select"
    value={priceSelection}
    onChange={(e)=>setPriceSelection(e.target.value)}
>
    <option value="">Default</option>

    <option value="low-high">
        Price: Low to High
    </option>

    <option value="high-low">
        Price: High to Low
    </option>
</select>
          </div>

          {/* Price */}
          <div>
            <label className="form-label fw-semibold">
              Price Range
            </label>

            <div className="row g-2">
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e)=>setMinPrice(e.target.value)}
                />
              </div>

              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e)=>setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

        </div>
      </aside>

      {/* Products */}
      <main className="col-lg-9 product-content">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">
            Products
          </h2>

          <span className="text-muted">
            {filterProducts.length} Products
          </span>
        </div>

        {/* Product Grid */}
        <div className="product-grid">

          {loading ? (
            <Loader />
          ) : (
            filterProducts.length > 0 ? (
              filterProducts.map((pro, index) => {

                return (
                  <div
                    className="product-item"
                    key={index}
                  >

                    <div className="product-card">

                      <div className="product-image">
                        <img
                          src={pro.thumbnail}
                          className="product-img"
                          alt={pro.title}
                        />
                      </div>

                      <div className="product-card-body">

                        <h5 className="product-title">
                          {pro.title}
                        </h5>

                       <div className="d-flex justify-content-between">
                          <p className="product-category">
                          {pro.category}
                        </p>
                          <p style={{ color: "red" }}>
  {cart.find((e) => e.id === pro.id)?.qty >= pro.stock &&
    "Limit Exceeded"}
</p>

                        </div>

                        <div className="product-bottom">

                          <span className="product-price">
                            ₹{pro.price}
                          </span>

                          {cart.find((e) => e.id === pro.id) ? (
                            <div>
                              <button
                               
                                className="decrease"
                                style={{ background: "green" }}
                                onClick={() => decrease(pro.id)}
                               
                              >
                                -
                              </button>

                              <span style={{ margin: "0 5px" }}>
                                 { cart.find((e) => e.id === pro.id)?.qty }

                              </span>

                              <button
                                className="increase"
                                style={{ background:cart.find((e) => e.id === pro.id).qty<pro.stock?'green':'gray'  }}
                                onClick={() => increase(pro.id)}
                                 disabled={cart.find((e) => e.id === pro.id).qty>=pro.stock}
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              className="add-cart-btn"
                              onClick={() => addToCart(pro, pro.id)}
                            >
                              Add to Cart
                            </button>
                          )}

                        </div>

                      </div>

                    </div>

                  </div>
                );

              })
            ) : (
              <div className="empty-div">
                <h2 className="fw-bold mb-2">
                  No Products Found
                </h2>
              </div>
            )
          )}

        </div>

      </main>

    </div>
  </div>
</section>

  );
};

export default Product;