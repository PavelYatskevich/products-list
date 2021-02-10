
import {
    LOAD_PRODUCTS_REQUEST,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    Product, UPDATE_PRODUCT,
} from '../types/products-types';

// Summary
export const LoadProductsRequest = () => ({
    type: LOAD_PRODUCTS_REQUEST,
});

export const LoadProductsSuccess = (products: Product[]) => ({
    type: LOAD_PRODUCTS_SUCCESS,
    payload: products,
});

export const UpdateProduct = (product: Product) => ({
    type: UPDATE_PRODUCT,
    payload: product,
});

export const LoadProductsError = () => ({
    type: LOAD_PRODUCTS_ERROR,
});

