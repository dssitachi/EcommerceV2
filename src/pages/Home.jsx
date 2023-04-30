import { useEffect, useState } from "react"


function Home() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    // useEffect(() => {
    //     getLocale()
    //     .then(i => console.log(i));
    // }, []);

    return (
        <main className="min-h-screen mt-12 mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">

            {/* Carousel */}
            <div className="relative">
                <button className=" bg-blue-500 text-white py-3" onClick={toggleVisibility}>
                    Show Section
                </button>
                <div
                    className={`fixed bottom-0 left-0 right-0 bg-primary z-50 transition-all duration-500 ${isVisible ? 'h-screen' : 'h-0'
                        }`}
                >
                    {/* Section content goes here */}
                </div>
            </div>
        </main>
    )
}

export default Home