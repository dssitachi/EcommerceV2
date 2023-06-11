import { useCartContext } from "../contexts";
import { useNavigate } from "react-router-dom";
import emptyCartImg from '../assets/images/emptyCart.png';
import CartItemCard from "../components/CartItemCard";
import CartTotal from "../components/CartTotal";

function Cart() {

    const navigate = useNavigate();
    const { cart } = useCartContext();
    /**
     * This function handles operation on cart
     */


    return (
        <section className="min-h-screen mt-12 mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="py-2 ">
                {cart.length > 0 && (
                    <h1 className="text-2xl font-bold p-3 ">Cart({cart.length})</h1>
                )}
                {cart.length ? (
                    <div className="grid md:grid-cols-3 gap-5">
                        <section className="md:col-span-2 flex flex-col gap-4">
                            {cart.map((product) => (
                                <CartItemCard product={product} key={product.item.id} />
                            ))}
                        </section>
                        <CartTotal cart={cart} />
                    </div>
                ) : (
                    <div className="h-[60vh] w-full flex flex-col items-center justify-center  gap-3 ">
                        <img
                            src={emptyCartImg}
                            alt="empty Cart"
                            className="h-60 mt-5"
                        />
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">Hey, it feels so light!</h2>
                            <p className="text-sm text-gray-400">
                                There's nothing in your bag. Let's add some items.
                            </p>
                        </div>

                        <button className="px-4 py-2 bg-primary rounded-md text-white transition-transform hover:scale-[1.1]"
                            onClick={() => navigate("/products")}
                            >Explore</button>
                    </div>
                )}
            </div>

        </section>
    )
}

export default Cart