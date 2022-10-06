import {createSlice} from "@reduxjs/toolkit";
import { fetchCategory } from "../action/fetchProducts";

const categoriesSlice = createSlice({
    name: "category",
    initialState: {categories: [], isloading: false},
    extraReducers: {
        [fetchCategory.pending]: (state, action)=>{
            state.isloading = true;
        },
        [fetchCategory.fulfilled]: (state, action)=>{
            state.isloading = false;
            state.categories = action.payload
        },
        [fetchCategory.rejected]: (state, action)=>{
            state.isloading = false;
        }
    }
});

export default categoriesSlice.reducer;