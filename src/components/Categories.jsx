import headphone from '../assets/images/wireless-02.png';
import earbuds from '../assets/images/earbuds.webp';
import smwatch from '../assets/images/smartwatch.png';
import { useProductsContext } from '../contexts';
import { useNavigate } from 'react-router-dom';

function Categories() {
    const { applyFilter } = useProductsContext(); 
    const navigate = useNavigate();

    function filterAndNavigate(type) {
        applyFilter('categories', [type]);
        navigate('/products');
    }
    
    return (
        <div className="mt-8 text-center">
            <h3 className="text-4xl font-semibold my-2">Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                { }
                <div className="flex flex-col justify-center items-center cursor-pointer transition-transform hover:scale-[1.1]"
                    onClick={() => { filterAndNavigate('Headphones')}}
                >
                    <img className="h-60" src={headphone} />
                    <span className="font-semibold text-lg">Headphones</span>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-[1.1]"
                    onClick={() => { filterAndNavigate('Earbuds')}}
                >
                    <img className="h-60" src={earbuds} />
                    <span className="font-semibold text-lg">Earbuds</span>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-[1.1]"
                    onClick={() => { filterAndNavigate('Speakers')}}
                >
                    <img className="h-60" src={smwatch} />
                    <span className="font-semibold text-lg">Speakers</span>
                </div>
            </div>
        </div>
    )
}

export default Categories