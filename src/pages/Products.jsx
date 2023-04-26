import Product from "../components/Product"

function Products() {
    var a = [1, 2, 3, 1, 2, 23, 23, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

    return (
        // Container
        <main className="mx-auto min-h-screen flex gap-4 max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

            {/* Filter */}
            <section className="hidden sm:block min-w-60">
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
                    <div className="bg-white p-4 rounded-lg shadow">

                    </div>
                </div>

            </section>

            {/* Products */}
            <section className="flex-[3_0_0%] grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {a.map(x => {
                    return <Product />
                })}
            </section>

        </main>
    )
}

export default Products