import React, { useState } from 'react'

export const Card = ({ img, title, description, price, handleAgregar, handleQuitar, handleAumentar, handleDisminuir }) => {

  const [added, setAdded] = useState(false)


  const clickQuitar = () => {
    handleQuitar();
    setAdded(false);
  }

  const clickAgregar = () => {

    handleAgregar();
    setAdded(true);
  }


  return (
    <>
      <div className="card mb-3 w-75">
        <div className="row g-0">
          <div className="col-md-2 position-relative me-5">
            <img src={img} className="img-fluid rounded-start mh-100 position-absolute top-50 start-50 translate-middle" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title  position-relative">{title} - <p>S/ {price}</p></h5>
              <p className="card-text">{description}</p>
              {added ?
                <a className="btn btn-warning flo" onClick={clickQuitar}>Quitar del Carrito</a> :
                <a className="btn btn-primary flo" onClick={clickAgregar}>Agregar al Carrito</a>}


            </div>
          </div>
        </div>
      </div>

    </>
  )
}
