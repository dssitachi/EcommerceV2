import Filter from "../components/Filter"
import Product from "../components/Product"
import Loader from "../components/Loader";
import { useProductsContext } from "../contexts";
import SortAndFilter from "../components/SortAndFilter";
import { useFilter } from "../hooks/useFilter";

function Products() {
    
    const { error, isLoading } = useProductsContext();
    const products = useFilter();

    if (error) return <PageNotFound />;
    if (isLoading) return <Loader />;

    return (
        <main className="mx-auto mt-16 min-h-screen sm:gap-4 py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <SortAndFilter />
            <div className="w-full flex">
                <Filter />
                {/* Products */}
                <section className="grid grid-cols-1 gap-y-10 gap-x-6 p-4 mx-auto sm:grid-cols-2 sm:flex-[3_0_0%] lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((x) => {
                        return <Product key={x.id} product={x}/>
                    })}
                </section>
            </div>
        </main>
    )
}

export default Products