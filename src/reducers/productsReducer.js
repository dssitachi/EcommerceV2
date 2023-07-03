import { actionTypes } from "../utils/reducerAction";

export function productsReducer(state, action) {
    switch (action.type) {
        case actionTypes.APPLY_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.filterType]: action.payload.filterValue,
                },
            };

        case actionTypes.CLEAR_FILTERS:
            return {
                ...state,
                filters: {
                    brands: [],
                    categories: [],
                    sortBy: "recommended",
                },
            };

        case actionTypes.INIT_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            };

        default:
            return state;
    }
}

export const productInitState = {
    allProducts: [],
    categoryList: ["Headphones", "Speakers", "Earbuds"],
    brandList: ["Boat", "Seinheisser", "Bose", "Sony"],
    filters: {
        brands: [],
        categories: [],
        sortBy: "recommended",
    },
};
