import { useNavigate } from "react-router-dom"
import productImg from '../assets/images/banner-img.png';

function Banner() {

    const navigate = useNavigate();

    return (
        <section className="bg-gray-900 text-white p-20 rounded-xl">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-6 md:flex-row items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl md:text-6xl font-bold mb-6">Unleash the Power of Pure Sound</h1>
                        <p className="text-lg mb-8">Experience Seamless Sound with our Headphones, Earbuds, and Speakers.</p>
                        <button className="bg-white text-gray-900 cursor-pointer py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:scale-[1.1] transition duration-300"
                            onClick={() => { navigate('/products') }}
                        >Shop Now</button>
                    </div>
                    <div className="flex items-center justify-center h-60 w-60">
                        <img src={productImg} alt="Hero" className="object-fit w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner