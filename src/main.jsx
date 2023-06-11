import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider, ProductsContextProvider, AuthContextProvider, CartContextProvider } from './contexts/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ProductsContextProvider>
        <AuthContextProvider>
            <CartContextProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </CartContextProvider>
        </AuthContextProvider>
    </ProductsContextProvider>,
)
