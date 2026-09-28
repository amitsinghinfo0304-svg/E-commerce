import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
function Cart() {
  const { cart, setShowCart, decrease, increase,deleteItem,clearAll } = useContext(CartContext);
  return (
    <div className="cart-overlay" onClick={() => setShowCart(false)}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h4>🛒 My Cart</h4>
          <button className="clear-all-btn" onClick={clearAll}>clear all</button>
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
                  <p>₹{Math.round(item.qty * item.price)}</p>
                  <span>Qty: {item.qty || 1}</span>
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
                      style={{ background: "green" }}
                      onClick={() => increase(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <button className="del-btn" onClick={()=>deleteItem(item.id)}>
                      <FaTrash size={12}  />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <h5>
            Total: ₹
            {cart.reduce(
              (total, item) => Math.round(total + item.price * (item.qty || 1)),
              0,
            )}
          </h5>
          <button className="btn btn-primary w-100">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
