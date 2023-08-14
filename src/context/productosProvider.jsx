import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext"


export const ProductosProvider = ({ children }) => {

    const [product, setProduct] = useState([]);


    const fectProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const dataProducts = await response.json();
        setProduct(dataProducts);
    }

    useEffect(() => {
        fectProduct();


    }, [])




    return (
        <ProductosContext.Provider value={{ product }}>
            {children}
        </ProductosContext.Provider>
    )
}
