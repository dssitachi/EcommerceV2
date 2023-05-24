import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShopping, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Navbar() {

    const { isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    
    function navigateToCart() {
        if(isLoggedIn) {
            navigate('/cart');
        } else {
            navigate('/login');
        }
    }

    return (
        <nav className="fixed top-0 z-50 w-full bg-base-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <h3 className="text-2xl text-primary-content font-bold tracking-wide h-8 w-auto"> WorkSpace Essentials </h3>
                        </Link>
                    </div>

                    <div className="flex items-center">

                        <div className="cursor-pointer mx-2">
                            <AiOutlineUser className="h-6 w-6" />
                        </div>

                        <div className="cursor-pointer mx-2">
                            <AiOutlineHeart className="h-6 w-6" />
                        </div>

                        <div className="relative cursor-pointer mx-2" onClick={navigateToCart}>
                            <AiOutlineShopping className="h-6 w-6" />
                            {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                0
                            </span> */}
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;