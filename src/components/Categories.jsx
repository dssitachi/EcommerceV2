import headphone from '../assets/images/wireless-02.png';
import earbuds from '../assets/images/earbuds.jpg';
import smwatch from '../assets/images/smartwatch.png';

function Categories() {
    return (
        <div className="mt-8 text-center">
            <h3 className="text-4xl font-semibold">Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                    <img className="h-60" src={headphone} />
                </div>
                <div className="flex justify-center items-center">
                    <img className="h-60" src={earbuds} />
                </div>
                <div className="flex justify-center items-center">
                    <img className="h-60" src={smwatch} />
                </div>
            </div>
        </div>
    )
}

export default Categories