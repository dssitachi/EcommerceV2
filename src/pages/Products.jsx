import Filter from "../components/Filter"
import Product from "../components/Product"

function Products() {
    var a = [1, 2, 3, 1, 2, 23, 23, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

    return (
        <main className="mx-auto mt-16 min-h-screen sm:gap-4 py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="w-full border-b pb-2 flex justify-between items-center">
                <h3 className="font-bold">FILTERS</h3>
                <div className="border px-3 py-1">
                    <label htmlFor="sortOptions" className="text-sm mr-2">Sort by:</label>
                    <select id="sortOptions">
                        <option label="Volvo">Volvo (Latin for "I roll")</option>
                        <option label="Saab">Saab (Swedish Aeroplane AB)</option>
                        <option label="Mercedes">Mercedes (Mercedes-Benz)</option>
                        <option label="Audi">Audi (Auto Union Deutschland Ingolstadt)</option>
                    </select>
                </div>
            </div>

            <div className="w-full flex">
                <Filter />

                {/* Products */}

                <section className="grid grid-cols-1 gap-y-10 gap-x-6 p-4 mx-auto sm:grid-cols-2 sm:flex-[3_0_0%] lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {a.map(x => {
                        return <Product />
                    })}
                </section>

            </div>

        </main>
    )
}

export default Products