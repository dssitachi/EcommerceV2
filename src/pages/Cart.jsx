import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { getAxiosClient } from "../utils/fetcher";

function Cart() {

    const { cart, setCart, accessToken } = useContext(UserContext);

    /**
     * This function handles operation on cart
     */
    async function updateCart(id, qty) {
        var updatedCart = cart.map((x) => {
            if(x.id == id) return { ...x, count : qty};
            return x;
        })
        var response = await getAxiosClient(accessToken).post('/users/updateCart', []);
    }
    
    return (
        <>
            <div className="my-9">Cart is here</div>

            { cart.map(function displayCart(item) {
                return (
                    <div>
                        <div>
                            {/* Image & price */}
                            <div>
                                <div>
                                    <img src={item.img}/>
                                    <div className="flex flex-col">
                                        <span> {item.name} </span>
                                        <select defaultValue={item.count}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <span>${item.price}</span>
                                    <button> Remove </button>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default Cart