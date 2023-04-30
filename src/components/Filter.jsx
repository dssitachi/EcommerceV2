import { useState } from "react";

function Filter() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className="hidden sm:block sm:min-w-[200px]">
                <div className="grid grid-cols-1 gap-4">
                    {/* Categories */}
                    <div className="mt-4 pb-4 border-b">            
                        <h4 className="text-xs font-bold mb-2">CATEGORIES</h4>
                        <ul>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Samsung" />
                                    <span className="ml-2 text-sm">Samsung</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Apple" />
                                    <span className="ml-2 text-sm">Apple</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                        </ul>
                    </div>

                    {/* Brand */}
                    <div className="mt-2 pb-4 border-b">
                        <h4 className="text-xs font-bold mb-2">BRAND</h4>
                        <ul>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Samsung" />
                                    <span className="ml-2 text-sm">Samsung</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Apple" />
                                    <span className="ml-2 text-sm">Apple</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="sm:hidden sm:relative z-20">

                <button className="fixed btn btn-primary bottom-0 z-10 mb-4 left-1/2 transform -translate-x-1/2 shadow-lg"
                    onClick={setIsOpen} > {isOpen ? "Close" : "Open"} </button>

                <div className={`fixed bottom-0 left-0 right-0 bg-base-300 z-50 transition-all duration-500 ${isOpen ? 'h-screen' : 'h-0'
                        }`}>

                    <div className="flex justify-between items-center">
                        <h2>Filters</h2>
                        <h2>Clear Filter</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                    {/* Categories */}
                    <div className="mt-4 pb-4 border-b">            
                        <h4 className="text-xs font-bold mb-2">CATEGORIES</h4>
                        <ul>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Samsung" />
                                    <span className="ml-2 text-sm">Samsung</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Apple" />
                                    <span className="ml-2 text-sm">Apple</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                        </ul>
                    </div>

                    {/* Brand */}
                    <div className="mt-2 pb-4 border-b">
                        <h4 className="text-xs font-bold mb-2">BRAND</h4>
                        <ul>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Samsung" />
                                    <span className="ml-2 text-sm">Samsung</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Apple" />
                                    <span className="ml-2 text-sm">Apple</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                            <li>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="cursor-pointer" name="brand" value="Xiaomi" />
                                    <span className="ml-2 text-sm">Xiaomi</span>
                                </label>
                            </li>
                        </ul>
                    </div>

                </div>
                   
                </div>

            </section>

        </>
    )
}

export default Filter