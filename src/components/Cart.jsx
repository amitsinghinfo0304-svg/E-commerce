import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
function Cart() {
  const { cart, setShowCart, decrease, increase,deleteItem,clearAll } = useContext(CartContext);
const totalDiscount =(
  cart.reduce(
    (total, item) =>
      total +
      ((item.qty * item.price) / 100) * item.discountPercentage,
    0
  )
).toFixed(2);



  return (
    <div className="cart-overlay" onClick={() => setShowCart(false)}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h4>🛒 My Cart</h4>
         {cart.length > 0 && (
  <button
    className="clear-all-btn"
    onClick={clearAll}
  >
    Clear All
  </button>
)}
          <button
            className="btn-close"
            onClick={() => setShowCart(false)}
          ></button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <h5>Your cart is empty</h5>
              <p className="text-muted">Add some products to your cart.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />

                <div className="cart-info">
                  <h6>{item.title}</h6>
                  <br />
                  <div className="d-flex justify-content-between flex-item-incenter">
                     <div className="price flex-item-incenter">₹{((item.qty * item.price)-((item.qty * item.price)/100)*item.discountPercentage).toFixed(2)}</div>
                     <div class="old-price">₹{(item.qty * item.price).toFixed(2)}</div>
                  
                  {/* <span>Qty: {item.qty || 1}</span> */}

                  </div>
                 
                </div>

                <div className="cart-increment-btn">
                  <div>                
                    <button
                      className="decrease"
                      style={{ background: "green" }}
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </button>
                    <span> {cart.find((e) => e.id === item.id).qty} </span>
                    <button
                      className="increase"
                      onClick={() => increase(item.id)}
                      style={{ background:cart.find((e) => e.id === item.id).qty<item.stock?'green':'gray'  }}
                      disabled={cart.find((e) => e.id === item.id).qty>=item.stock}
                    >
                      +
                    </button>  
                    </div>                            
                </div>


                <div className="cart-increment-btn">                                  
                    <button className="del-btn" onClick={()=>deleteItem(item.id)}>
                      <FaTrash size={12}  />
                    </button>                
                </div>


              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          {/* {totalDiscount} */}
          <h5>
            Total: ₹
          
            {cart.reduce(
              (total, item) =>(total + ((item.price * (item.qty || 1))-((item.qty * item.price)/100)*item.discountPercentage)),
              0,
            ).toFixed(2)}
           
          </h5>
          <button className="btn btn-primary w-100">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
