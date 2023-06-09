
function CartTotal({ cart }) {

	var total = 0;
	cart.forEach(e => {
		total += e.count * e.item.price;
	})

	return (
		<div className="flex flex-col bg-slate-100 p-2">
			<h2 className="text-xl font-semibold">Summary</h2>
			<div className="flex flex-col gap-4 my-2 max-w-xl border-b-2 border-gray-400">
				{
					cart.map(function displayItemTotal(cartItem) {
						return (
							<div className="flex justify-between mt-1">
								<span className="text-md">{cartItem.item.name} {`( ${cartItem.count} )`}</span>
								<span className="font-semibold">$ {cartItem.count * cartItem.item.price} </span>
							</div>
						)
					})
				}
			</div>

			<div className="flex justify-between">
				<span className="text-lg font-semibold">Total</span>
				<span className="font-semibold">$ {total} </span>
			</div>

			<div className="mt-2">
				<button className="px-4 py-2 bg-primary rounded-md text-white transition-transform hover:scale-[1.1]"		
				>Proceed to Checkout</button>
			</div>

		</div>
	)
}

export default CartTotal