import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} /> */}
        </Routes>
        {/* <Sidebar /> */}
      </Router>
    </div>
  )
}

export default App
