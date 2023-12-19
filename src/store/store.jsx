import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { getcartReducer } from "./slices/cartSlice";
import { getfavoriteReducer } from "./slices/favoriteSlices";


export const store = configureStore
    // eslint-disable-next-line no-unexpected-multiline
    ({
        reducer: {
            cart: getcartReducer,
            products: productReducer,
            favorite: getfavoriteReducer
        }
    })