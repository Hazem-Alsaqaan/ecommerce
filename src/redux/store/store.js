import {configureStore} from "@reduxjs/toolkit"
import allProducts from "../reducers/productsSlice"
import cartSlice from "../reducers/cartSlice";
import favoritesSlice from "../reducers/favoritesSlice";
import category from "../reducers/categoriesSlice"

const store = configureStore({
    reducer: {
        allProducts,
        cartSlice,
        favoritesSlice,
        category,
    }
})

export default store;







