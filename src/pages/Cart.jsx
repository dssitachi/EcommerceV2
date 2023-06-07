import { getAxiosClient } from "../utils/fetcher";
import { useUserContext } from "../contexts";

function Cart() {

    const { cart, setCart, accessToken } = useUserContext();
    /**
     * This function handles operation on cart
     */
    async function updateCart(id, qty) {
        var updatedCart = cart.map((x) => {
            if (x.id == id) return { ...x, count: qty };
            return x;
        })
        var response = await getAxiosClient(accessToken).post('/users/updateCart', []);
    }

    return (

        <section className="min-h-screen mt-12 mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">

            {cart.map(function displayCart(item) {
                return (
                    <div className="max-w-xl" key={item.item.id}>
                        <div className="flex justify-between">
                            {/* Image & price */}
                            <div>
                                <div className="flex">
                                    <div>
                                        <img className="h-20" src={item.item.img} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span> {item.item.name} </span>
                                        <label> Quantity:
                                            <select defaultValue={item.count}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                <span>${item.item.price}</span>
                                <button> Remove </button>
                            </div>

                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default Cart