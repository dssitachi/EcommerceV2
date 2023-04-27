import productImg from '../assets/images/arm-chair-01.jpg'
import { AiOutlineHeart } from 'react-icons/ai';

function Product() {
  return (
    <div>
        <div className="max-w-sm mx-auto mb-2">
            <img src={productImg} alt="aa" className="block"/>
        </div>
        <p className="uppercase font-bold text-xs text-slate-500">Appliances</p>
        <div className="flex justify-between items-center gap-2">
        <h3 className="text-lg font-bold">Chair</h3>
            <AiOutlineHeart className="text-2xl cursor-pointer" />
        </div>
        <div>
            <span>$231</span>
        </div>
        
    </div>
  )
}

export default Product