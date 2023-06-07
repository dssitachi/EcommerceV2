import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAxiosClient } from "../utils/fetcher";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useProductsContext, useUserContext } from "../contexts";

function ProductDetails() {
    const { id } = useParams();
    const { products } = useProductsContext();
    const [isLoading, setIsLoading] = useState(false);
    const { accessToken, setCart, cart } = useUserContext();
    const navigate = useNavigate();
    const product = products.find(function currProduct(p) {
        return id == p.id;
    })

    async function addToCart() {
        console.log(accessToken)
        if (!accessToken) {
            navigate('/login');
            return;
        }
        
        try {
            setIsLoading(true);
            var response = await getAxiosClient(accessToken).post('/users/updateCart', [{ item: product, count: 1 }]);
            console.log([...cart, { item: product, count: 1 }])
            setCart([...cart, { item: product, count: 1 }])
            toast.success("Product added to Cart", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        } catch(error) {
            toast.error("Error occured while adding product", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && <Loader />}
            <div className="min-h-screen mx-auto py-12 px-4 flex justify-center items-center sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <main className="grid grid-rows-1 sm:grid-cols-2 sm:gap-10">
                    <section className="p-7 flex items-center justify-center rounded-lg bg-black/[0.075] ">
                        <img
                            src={product?.img}
                            alt=""
                            className="w-full object-contain max-w-xs"
                        />
                    </section>
                    <section className="p-7 flex flex-col gap-4">

                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold"> {product?.name} </h1>
                            <p className="text-gray-600 text-sm">
                                {product?.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-semibold"> About Product</h3>
                            <div className="flex gap-2 items-center">
                                <span className="text-gray-500 text-sm">Brand:</span>
                                {product?.brand}
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-gray-500 text-sm">Category:</span>
                                <span>{product?.category}</span>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center pb-10 sm:pb-0">
                           <span className="text-lg font-semibold"> Price: </span> 
                            <span className="ms-1 text-xl sm:text-2xl font-semibold">
                                ₹ {product?.price}
                            </span>
                        </div>

                        <div>
                            <button className="px-4 py-2 bg-primary rounded-md text-white"
                            onClick={addToCart}
                            >Add to Cart</button>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default ProductDetails