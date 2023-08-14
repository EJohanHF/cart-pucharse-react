import React, { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  const { product } = useContext(ProductosContext);
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    console.log('hola');
    agregarCompra(compra);

  };
  const handleQuitar = (id) => { eliminarCompra(id) };
  const handleAumentar = (id) => { };
  const handleDisminuir = (id) => { };
  return (
    <>
      <div className="m-0 row justify-content-center ">
        {product.map((item) => (
          <Card
            key={item.id}
            img={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            handleAgregar={() => handleAgregar(item)}
            handleQuitar={() => handleQuitar(item.id)}
          // handleAumentar={handleAumentar}
          // handleDisminuir={handleDisminuir}
          />
        ))}
      </div>
    </>
  );
};
