import { useState } from "react";
import { useProductsContext } from "../contexts";

function Filter() {

    const [isOpen, setIsOpen] = useState(false);
    const { filters, applyFilter, clearFilters, brands, categories } = useProductsContext();

    function handleFilter(checked, item, type) {
        if(checked) {
            applyFilter(type, [...filters[type], item]);
        } else {
            let curr = filters[type].filter(x => x != item);    
            applyFilter(type, curr)
        }
    }

    // function applyFilter() {
    //     // setIsOpen(false);
    // }

    return (
        <>
            <section className="hidden sticky sm:block sm:min-w-[160px] lg:min-w-[200px]">
                <div className="grid grid-cols-1 gap-4">
                    {/* Categories */}
                    <div className="mt-4 pb-4 border-b">
                        <h4 className="text-xs font-bold mb-2">CATEGORIES</h4>
                        <ul>
                            {
                                categories.map(function displayCategory(category) {
                                    return (
                                        <li key={category}>
                                            <label className="inline-flex items-center">
                                                <input type="checkbox" className="cursor-pointer" checked={filters.categories.includes(category)}
                                                    onChange={function filter(e) { handleFilter(e.target.checked, category, 'categories') }} />
                                                <span className="ml-2 text-sm">{category}</span>
                                            </label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Brand */}
                    <div className="mt-2 pb-4 border-b">
                        <h4 className="text-xs font-bold mb-2">BRAND</h4>
                        <ul>
                            {
                                brands.map(function displayBrand(brand) {
                                    return (
                                        <li key={brand}>
                                            <label className="inline-flex items-center">
                                                <input type="checkbox" className="cursor-pointer" checked={filters.brands.includes(brand)}
                                                    onChange={function filter(e) { handleFilter(e.target.checked, brand, 'brands') }} />
                                                <span className="ml-2 text-sm">{brand}</span>
                                            </label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section className="sm:hidden">

                <button className={`fixed btn btn-primary bottom-0 z-10 mb-4 left-1/2 transform -translate-x-1/2 shadow-lg
                    ${isOpen ? 'hidden' : ''}
                `}
                    onClick={() => setIsOpen(true)} > Filters </button>

                <div className={`fixed bottom-0 left-0 right-0 bg-base-300 transition-all duration-500 
                ${isOpen ? 'h-screen' : 'h-0'}`}>

                    <div className="grid grid-cols-1 gap-4 mt-16 p-4">
                        {/* Categories */}
                        <div className="mt-4 pb-4 border-b">
                            <h4 className="text-xs font-bold mb-2">CATEGORIES</h4>
                            <ul>
                                {
                                    categories.map(function displayCategory(category) {
                                        return (
                                            <li key={category}>
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="cursor-pointer" checked={filters.categories.includes(category)}
                                                        onChange={function filter(e) { handleFilter() }} />
                                                    <span className="ml-2 text-sm">{category}</span>
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        {/* Brand */}
                        <div className="mt-2 pb-4 border-b">
                            <h4 className="text-xs font-bold mb-2">BRAND</h4>
                            <ul>
                                {
                                    brands.map(function displayBrand(brand) {
                                        return (
                                            <li key={brand}>
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="cursor-pointer" checked={filters.brands.includes(brand)}
                                                        onChange={function filter(e) { handleFilter() }} />
                                                    <span className="ml-2 text-sm">{brand}</span>
                                                </label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className={`fixed bottom-0 flex justify-around w-full mb-4 ${!isOpen ? 'hidden' : ''}`}>
                        <button className="btn btn-secondary w-2/5" onClick={clearFilters}>Clear Filter</button>
                        <button className="btn btn-primary w-2/5" onClick={applyFilter}> See Results</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Filter