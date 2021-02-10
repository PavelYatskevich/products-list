interface Image {
    url: String;
    name: String;
}
export interface Product {
    name: String;
    number: String;
    description: String;
    images: Image[];
}


export const LOAD_PRODUCTS_REQUEST = 'loadProductsRequest';
export const LOAD_PRODUCTS_SUCCESS = 'loadProductsSuccess';
export const LOAD_PRODUCTS_ERROR = 'loadProductsError';
export const UPDATE_PRODUCT = 'updateProduct';
// Summary
interface LoadSummaryRequest {
    type: typeof LOAD_PRODUCTS_REQUEST;
}

interface LoadSummarySuccess {
    type: typeof LOAD_PRODUCTS_SUCCESS;
    payload: Product[];
}

interface LoadSummaryError {
    type: typeof LOAD_PRODUCTS_ERROR;
}

interface UpdateProduct {
    type: typeof UPDATE_PRODUCT;
    payload: Product;
}

export type ProductsActionTypes =
    | LoadSummaryRequest
    | LoadSummarySuccess
    | LoadSummaryError
    | UpdateProduct;
