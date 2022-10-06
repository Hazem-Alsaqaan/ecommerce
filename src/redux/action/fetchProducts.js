import {createAsyncThunk} from "@reduxjs/toolkit";



export const fetchProducts = createAsyncThunk("allProducts/fetchProducts", async()=>{
    try{
        const response = await fetch(
            `https://fakestoreapi.com/products`
        )
        const data = response.json();
        return data;
    }catch{
        console.log("rejected product")
    }
});

// category action
export const fetchCategory = createAsyncThunk("category/fetchCategory", async()=>{
    try{
        const response = await fetch(
            `https://fakestoreapi.com/products/categories`
        )
        const data = await response.json();
        return data
    }catch{
        console.log("rejected category")
    }
})