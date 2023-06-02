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
                    <div className="max-w-xl" key={item.item.id}>
                        <div className="flex justify-between">
                            {/* Image & price */}
                            <div>
                                <div className="flex">
                                    <img className="h-20" src={item.item.img}/>
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

        </>
    )
}

export default Cart