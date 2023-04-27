import { useState } from "react";



function Filter() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className="hidden sm:block sm:min-w-sm">
                <div className="flex justify-between items-center">
                    <h2>Filters</h2>
                    <span>Clear Filter</span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">

                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Brand</h2>
                        <ul>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" name="brand" value="Samsung" />
                                    <span className="ml-2">Samsung</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" name="brand" value="Apple" />
                                    <span className="ml-2">Apple</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" name="brand" value="Xiaomi" />
                                    <span className="ml-2">Xiaomi</span>
                                </label>
                            </li>

                        </ul>
                    </div>

                    {/* Slider */}
                    <div className="bg-white p-4 rounded-lg shadow">

                    </div>

                </div>


            </section>

            <section className="sm:hidden sm:relative z-20">

                <button className="btn btn-primary  bottom-0 z-10 absolute left-1/2 transform -translate-x-1/2"
                    onClick={toggleOpen} > {isOpen ? "Close" : "Open"} </button>

                <div className={`fixed bottom-0 bg-base-200 left-0 w-full h-screen ${isOpen ? "block" : "hidden"} transition-all duration-3000 ease-in-out overflow-auto`}>

                    <div className="flex justify-between items-center">
                        <h2>Filters</h2>
                        <h2>Clear Filter</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 rounded-lg shadow">

                        </div>
                        <div className="p-4 rounded-lg shadow">
                            <h2 className="text-lg font-semibold mb-4">Brand</h2>
                            <ul>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="brand" value="Samsung" />
                                        <span className="ml-2">Samsung</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="brand" value="Apple" />
                                        <span className="ml-2">Apple</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" name="brand" value="Xiaomi" />
                                        <span className="ml-2">Xiaomi</span>
                                    </label>
                                </li>

                            </ul>
                        </div>

                        {/* Slider */}
                        <div className="p-4 rounded-lg shadow">

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Filter