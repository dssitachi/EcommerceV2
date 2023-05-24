import Filter from "../components/Filter"
import Product from "../components/Product"
import useSWR from 'swr';
import fetcher from "../utils/fetcher";
import Loader from "../components/Loader";

function Products() {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21, 22, 23, 24]
    
    const { data, error, isLoading } = useSWR(`http://localhost:3000/products`, fetcher);

    if (error) return <PageNotFound />;
    if (isLoading) return <Loader />;

    return (
        <main className="mx-auto mt-16 min-h-screen sm:gap-4 py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="w-full border-b pb-2 flex justify-between items-center">
                <div className="flex justify-between cursor-pointer items-baseline sm:w-[160px] lg:w-[200px]">
                    <h3 className="font-bold">FILTERS</h3>
                    <button className="text-xs font-semibold text-error">CLEAR FILTERS</button>
                </div>
                <div className="border px-3 py-1">
                    <label htmlFor="sortOptions" className="text-sm mr-2">Sort by:</label>
                    <select id="sortOptions">
                        <option label="Recommended">Recommended</option>
                        <option label="Price: Low to High">Price: Low to High</option>
                        <option label="Price: High to Low">Price: High to Low</option>
                        
                    </select>
                </div>
            </div>

            <div className="w-full flex">
                <Filter />

                {/* Products */}

                <section className="grid grid-cols-1 gap-y-10 gap-x-6 p-4 mx-auto sm:grid-cols-2 sm:flex-[3_0_0%] lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {data.map((x) => {
                        return <Product key={x.id} product={x}/>
                    })}
                </section>

            </div>

        </main>
    )
}

export default Products