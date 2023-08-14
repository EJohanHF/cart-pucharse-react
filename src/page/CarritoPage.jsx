import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext);
  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
  }
  const comprar = () => {
    print();
  }
  return (
    <>
      <div className="table-responsive mt-3">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map(item => (
              <tr className="" key={item.id}>
                <td scope="row">{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button type="button" className="btn btn-outline-primary" onClick={() => disminuirCantidad(item.id)}>-</button>
                  <button type="button" className="btn btn-primary">{item.cantidad}</button>
                  <button type="button" className="btn btn-outline-primary" onClick={() => aumentarCantidad(item.id)}>+</button>

                </td>
                <td><button type="button" className="btn btn-danger" onClick={() => eliminarCompra(item.id)}>Eliminar</button></td>
              </tr>
            ))}
            <tr>
              <th><b>Total</b></th>
              <th></th>
              <th><b>${calcularTotal()}</b></th>
              <th></th>
            </tr>
          </tbody>
        </table>
       
        <button className="btn btn-primary float-end" href="#" role="button" disabled={listaCompras.length < 1} onClick={comprar}>COMPRAR</button>
      </div>

    </>
  )
}
