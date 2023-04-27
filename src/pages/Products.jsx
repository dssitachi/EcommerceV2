import Filter from "../components/Filter"
import Product from "../components/Product"

function Products() {
    var a = [1, 2, 3, 1, 2, 23, 23, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

    return (
        // Container
        <main className="mx-auto min-h-screen flex sm:gap-4 max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

            {/* Filter */}
            <Filter />

            {/* Products */}
            <section className="grid grid-cols-1 gap-y-10 gap-x-6 mx-auto sm:grid-cols-2 sm:flex-[3_0_0%] lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {a.map(x => {
                    return <Product />
                })}
            </section>

        </main>
    )
}

export default Products