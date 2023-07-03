import { useProductsContext } from "../contexts";

function SortAndFilter() {
    const { applyFilter, clearFilters, filters } = useProductsContext();
    
    return (
        <div className="hidden sm:flex w-full border-b pb-2 justify-between items-center">
            <div className="flex justify-between cursor-pointer items-baseline sm:w-[160px] lg:w-[200px]">
                <h3 className="font-bold">FILTERS</h3>
                <button className="text-xs font-semibold text-error" onClick={clearFilters}>CLEAR FILTERS</button>
            </div>
            <div className="border px-3 py-1">
                <label htmlFor="sortOptions" className="text-sm mr-2">Sort by:</label>
                <select id="sortOptions"
                value={filters.sortBy}
                onChange={e => applyFilter('sortBy', e.target.value)}
                >
                    <option value="recommended">Recommended</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                </select>
            </div>
        </div>
    )
}

export default SortAndFilter