import { createContext, useState,useEffect,useContext} from "react";
import { ProductContext } from "./ProductContext";
export const CartContext = createContext(null);

function CartProvider({ children }) {
    const [priceSelection,setPriceSelection]=useState('')
    const [catogery,setCatogery]=useState("all")
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const {product,sub}=useContext(ProductContext)

    const filterProducts = product.filter((p) =>{
       
        const search_filter=p.title.toLowerCase().includes(sub.toLowerCase());
        const catogery_filter=catogery==='all' ||  p.category.toLowerCase() === catogery.toLowerCase();
        
        return search_filter && catogery_filter
    }
    ).sort((a,b)=>priceSelection==="low-high"?a.price-b.price:priceSelection==="high-low"?b.price-a.price:0).filter((e) => {
    if (minPrice === "" && maxPrice === "") {
        return true;
    }

    if (minPrice === "") {
        return e.price <= Number(maxPrice);
    }

    if (maxPrice === "") {
        return e.price >= Number(minPrice);
    }

    return (
        e.price >= Number(minPrice) &&
        e.price <= Number(maxPrice)
    );
});

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
                filterProducts,
                catogery,
                setCatogery,
                priceSelection,
                setPriceSelection,
                minPrice,
                setMinPrice,
                maxPrice,
                setMaxPrice,
               
                

            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;