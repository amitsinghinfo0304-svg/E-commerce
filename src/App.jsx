
import { useContext } from "react"

import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './App.css'
import { ProductContext } from "./context/Productcontext"
import { CartContext } from "./context/CartContext"
function App() {

  const {addToCart,cart,increase,decrease}=useContext(CartContext)
  

 const {

        loading,
        filterProducts,
        productSectionRef,
        
    } = useContext(ProductContext);
  
  return (
    <>
      <Header
       
      />

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://www.pupzysnacks.com/assets/img/banner/banner-01.webp"
              className="d-block w-100"
              alt="banner"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://www.pupzysnacks.com/assets/img/banner/banner-02.webp"
              className="d-block w-100"
              alt="banner"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://www.pupzysnacks.com/assets/img/banner/banner-03.webp"
              className="d-block w-100"
              alt="banner"
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">
            Previous
          </span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          />
          <span className="visually-hidden">
            Next
          </span>
        </button>
      </div>


      {/* PRODUCT SECTION */}

      <div
        ref={productSectionRef}
        className="container text-center pt-5 pb-5 product-section"
      >

        <div className="row g-4">

          <h2 className="product-heading">Products For You</h2>

          {
            loading ? (
              <Loader />
            ) : (
              filterProducts.length>0?filterProducts.map((pro, index) => {

                return (
                  <div
                    className="col-12 col-md-6 col-lg-3 mb-4"
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

                        <p className="product-category">
                          {pro.category}
                        </p>

                        <div className="product-bottom">

                          <span className="product-price">
                            ₹{pro.price}
                          </span>

                          { cart.find((e)=>e.id===pro.id)?<div>
                            <button  className="decrease" style={{background:'green'}} onClick={()=>decrease(pro.id)}>
                           -
                          </button>
                          <span> {cart.find(e=>e.id===pro.id).qty} </span>
                           <button  className="increase" style={{background:'green'}} onClick={()=>increase(pro.id)} >
                            +
                          </button>
                          </div>:
                            <button className="add-cart-btn" onClick={()=>addToCart(pro,pro.id)}>
                            Add to Cart
                          </button>
                          }

                        </div>

                      </div>

                    </div>

                  </div>
                )

              }):<div className="row g-4 empty-div">
  <div className="col-12 text-center py-5">
    <h2 className="fw-bold mb-2">No Products Found</h2>
    <p className="text-muted mb-0">
      Sorry, we couldn't find any products matching your search.
    </p>
  </div>
</div>
            )
          }

        </div>

      </div>

      <Footer />

    </>
  )
}

export default App