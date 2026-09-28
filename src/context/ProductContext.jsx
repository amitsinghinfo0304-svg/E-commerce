import { createContext, useState, useEffect, useRef } from "react";

export const ProductContext = createContext(null);

function ProductProvider({ children }) {

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [sub, setSubmit] = useState("");
    const [loading, setLoading] = useState(false);

    const productSectionRef = useRef(null);

    function submitData() {
        setSubmit(search);

        setTimeout(() => {
            productSectionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    }

    function addToCart(pro, proId) {
        console.log("PRODUCT:", pro);
        console.log("PRODUCT ID:", proId);
    }

    useEffect(() => {

        async function getProducts() {

            try {

                setLoading(true);

                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                const data = await response.json();

                setProduct(data.products);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        }

        getProducts();

    }, []);

    const filterProducts = product.filter((p) =>
        p.title.toLowerCase().includes(sub.toLowerCase())
    );
   
    return (
        <ProductContext.Provider
            value={{
                addToCart: addToCart,
                product,
                setProduct,
                search,
                setSearch,
                sub,
                setSubmit,
                submitData,
                loading,
                setLoading,
                filterProducts,
                productSectionRef,
               
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;