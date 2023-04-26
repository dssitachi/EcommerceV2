import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} /> */}
        </Routes>
        {/* <Sidebar /> */}
      </Router>
    </div>
  )
}

export default App
