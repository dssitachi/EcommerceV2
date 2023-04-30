import productImg from '../assets/images/arm-chair-01.jpg'
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function Product() {

  const navigate = useNavigate();
  
  function routeToProductDetail(id) {
    navigate(`/product/${id}`);
  }

  return (
    <div className="border border-base-200">
      
      <div className="max-w-sm mx-auto mb-2 cursor-pointer" onClick={() => { routeToProductDetail(1) }}>
        <img src={productImg} alt="aa" className="block" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center gap-2 pb-1">
          <h3 className="text-sm font-bold">Roadster</h3>
          <AiOutlineHeart className="text-2xl cursor-pointer" />
        </div>
        <p className="text-xs text-slate-500">Men's Solid Cotton T-shirt</p>
        <span className="text-xs font-bold">$231</span>
      </div>

    </div>
  )
}

export default Product