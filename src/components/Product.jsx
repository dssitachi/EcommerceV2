import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function Product({product}) {
  const navigate = useNavigate();
  
  function routeToProductDetail(id) {
    navigate(`/product/${id}`);
  }

  return (
    <div className="border border-base-200 transition-transform hover:scale-[1.02] shadow-lg rounded-lg">
      
      <div className="max-w-sm mx-auto mb-2 cursor-pointer" onClick={() => { routeToProductDetail(product.id) }}>
        <img src={product.img} alt="aa" className="block" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center gap-2 pb-1">
          <h3 className="text-sm font-bold cursor-pointer" onClick={() => { routeToProductDetail(product.id) }}>{product.name}</h3>
          <AiOutlineHeart className="text-2xl cursor-pointer" />
        </div>
        <p className="text-xs text-slate-500">{product.category}</p>
        <span className="text-xs font-bold">${product.price}</span>
      </div>

    </div>
  )
}

export default Product