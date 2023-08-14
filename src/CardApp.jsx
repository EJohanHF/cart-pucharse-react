import React from 'react'
import { NavBar } from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ComprasPage } from './page/ComprasPage'
import { CarritoPage } from './page/CarritoPage'
import { ProductosProvider } from './context/productosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const CardApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ComprasPage />}></Route>
                        <Route path='/carrito' element={<CarritoPage />}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>

                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
