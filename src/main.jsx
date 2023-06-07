import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider, ProductsContextProvider } from './contexts/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductsContextProvider>
        <UserContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </UserContextProvider>
    </ProductsContextProvider>,
)
