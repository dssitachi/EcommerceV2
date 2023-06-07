import productImg from '../assets/images/banner-img.png';
import headphone from '../assets/images/wireless-02.png';
import earbuds from '../assets/images/earbuds.jpg';
import smwatch from '../assets/images/smartwatch.png';
import phone from '../assets/images/phone-05.jpg';
import { useNavigate } from 'react-router-dom';
import Categories from '../components/Categories';
function Home() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen mt-12 mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">

            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center md:justify-between">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to our Online Store</h1>
                            <p className="text-lg mb-8">Experience Seamless Sound and Smart Style with our Headphones, Earbuds, and Smartwatches.</p>
                            <button className="bg-white text-gray-900 py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
                            onClick={() => {navigate('/products')}}
                            >Shop Now</button>
                        </div>
                        <div className="md:w-1/2 flex items-center justify-center">
                            <img src={productImg} alt="Hero" className="rounded-lg shadow-md h-[28rem]" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-4">
                <h3 className="text-2xl mb-2">Explore Categories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="">
                        <img className="h-60" src={phone} />
                    </div>
                    <div className="">
                        <img className="h-60" src={headphone} />
                    </div>
                    <div className="">
                        <img className="h-60" src={earbuds} />
                    </div>
                    <div className="">
                        <img className="h-60" src={smwatch} />
                    </div>
                </div>
            </div>
            <Categories />
        </main>
    )
}

export default Home