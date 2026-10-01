import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import {images} from "../components/Banner"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Home() {

  const navigate = useNavigate();

  const { filterProducts } = useContext(CartContext);

  return (
    <>
      {/* ================= HERO ================= */}

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {
            images.map((img,index)=><div className={`carousel-item ${index===1&& "active"}`}>
            <img
              src={img}
              className="d-block w-100"
              alt="banner"
            />
          </div>)

          }

          
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* ================= PRODUCTS ================= */}

      <section className="py-5 bg-light">
        <div className="container">
          {/* Heading */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">Featured Products</h2>

              <p className="text-muted mb-0">Check out our latest products</p>
            </div>
          </div>

          {/* ================= SWIPER ================= */}

          <div className="position-relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              slidesPerView={4}
              slidesPerGroup={1}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },

                576: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },

                992: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                },
              }}
              className="productSwiper"
            >
              {filterProducts?.map((product) => (
                <SwiperSlide key={product.id}>
                  <div
                    className="card border-0 h-100 slider-card mt-4 mb-4"
                    onClick={() => navigate(`/product/${product.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Image */}
                    <div
                      className="bg-black d-flex align-items-center justify-content-center"
                      style={{
                        height: "190px",
                      }}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    {/* Body */}
                    <div className="card-body d-flex justify-content-between">
                      <h5
                        className="card-title fw-semibold text-truncate"
                        title={product.title}
                      >
                        {product.title}
                      </h5>

                     
                    </div>
                      <div className="card-body d-flex justify-content-between flex-item-incenter">
                     
                     <div class="price">
        ₹{((product.price)-((product.price)/100)*product.discountPercentage).toFixed(0)} 
    </div> &nbsp; 

    <div class="old-price flex-item-incenter">
        ₹{(product.price).toFixed(0)} 
    </div>
    &nbsp; &nbsp; 
     <div class="offer-text flex-item-incenter">
        {product.discountPercentage} % OFF
    </div> 
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
