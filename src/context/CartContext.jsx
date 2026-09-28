import { createContext, useState,useEffect} from "react";

export const CartContext = createContext(null);

function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
   const [showCart, setShowCart] = useState(false);

function deleteItem(delId){
    const delItem=cart.filter((e)=>e.id!==delId)
    setCart(delItem)
}

function clearAll(){
 setCart([])
}
function addToCart(pro, proId) {

    setCart((prevCart) => {

        const productExists = prevCart.find(
            (item) => item.id === proId
        );

        if (!productExists) {

           return [
                ...prevCart,
                {
                    ...pro,
                    qty: 1
                }
            ];

        } 

    });

}

function increase(proId){
    
    setCart((prev)=>
       prev.map(e=>e.id===proId?{...e,qty:e.qty+1}:e)
    ) 
}

function decrease(proId) {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === proId
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)
  );
}

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cart,
                setCart,
                increase,
                decrease,
                showCart, 
                setShowCart,
                deleteItem,
                clearAll,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;