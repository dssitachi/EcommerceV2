import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCartContext } from '../contexts';

function CartItemCard({ product }) {

	const { updateCart, disableCart } = useCartContext();

	function myUpdateCart(addFlag) {
		updateCart(product, addFlag ? product.count + 1 : product.count - 1)
	}

	function removeFromCart() {
		updateCart(product, 0);
	}

	return (
		<div className="flex gap-4 p-2 bg-slate-100 rounded-lg max-w-xl">

			<div className="h-20 w-20">
				<img src={product.item.img} alt="Product Image" className="object-fit w-full" />
			</div>

			<div className="flex flex-col gap-2 grow">
				<h2 className="text-md font-semibold">{product.item.name}</h2>

				<div className="flex justify-between">
					<div className="flex gap-2 w-full">
						<span className="text-gray-700 text-sm">Quantity: </span>
						<button
							className="p-1 rounded-md text-xs disabled:cursor-not-allowed bg-slate-200 text-red-500"
							disabled={disableCart}
							onClick={() => myUpdateCart(false)}
						>
							<AiOutlineMinus />
						</button>
						<span className="w-10 bg-black/[0.075]  rounded-sm flex items-center justify-center">
							{product.count}
						</span>
						<button
							className="p-1 rounded-md text-xs disabled:cursor-not-allowed bg-slate-200 text-green-900"
							disabled={disableCart}
							onClick={() => myUpdateCart(true)}
						>
							<AiOutlinePlus />
						</button>

					</div>
					<div>
						<span className="font-semibold">${product.item.price}</span>
					</div>
				</div>

				<div>
					<button
						onClick={removeFromCart}
						className="font-semibold text-xs border-red-300 border-b-2 text-red-300">
						Remove
					</button>
				</div>

			</div>
			
		</div>
	)
}

export default CartItemCard