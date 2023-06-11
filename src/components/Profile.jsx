import { useState } from 'react';
import { useUserContext } from '../contexts';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [loggingOut, setLoggingOut] = useState(false);
    const navigate = useNavigate();
    const { logOut } = useUserContext();

    function handleLogOut() {
        setLoggingOut(true);
        setTimeout(() => {
            logOut();
            navigate('/login');
            setLoggingOut(false);
        }, 2000);  
    }

    return (
        <div className="min-h-screen mt-12 mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="p-8 flex flex-col bg-gray-100 gap-4 min-w-md max-w-lg m-auto">
                <div>
                    <h3 className="text-primary-focus font-bold text-2xl">Profile</h3>
                </div>
                <div>
                    <div>
                        <span className="text-sm mr-2">Username:</span>
                        <span className="text-sm font-semibold">Itachi Uchiha</span>
                    </div>
                </div>
                <div>
                    <span className="text-sm mr-2">Email</span>
                    <span className="text-sm font-semibold">test1@gmail.com</span>
                </div>

                <div>
                    <button className="bg-red-500 px-8 py-2 text-xs font-medium text-white rounded-lg"
                        onClick={handleLogOut}
                    > {loggingOut ? 'Logging Out...' : 'Logout'}</button>
                </div>

            </div>
        </div>

    )
}

export default Profile