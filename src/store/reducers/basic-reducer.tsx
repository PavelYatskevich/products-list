import produce, { Draft } from "immer";
import { ProductsActionTypes } from "../types/products-types";
import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  UPDATE_PRODUCT,
  Product,
} from "../types/products-types";

export interface BasicState {
  products: Product[];
  loading: boolean;
}

export const initialState: BasicState = {
  products: [],
  loading: false,
};

const basicReducer = (state = initialState, action: ProductsActionTypes) => {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST: {
      return produce(state, (draft: Draft<BasicState>) => {
        draft.loading = true;
      });
    }
    case LOAD_PRODUCTS_SUCCESS: {
      return produce(state, (draft: Draft<BasicState>) => {
        draft.loading = false;
        draft.products = action.payload;
      });
    }
    case LOAD_PRODUCTS_ERROR: {
      return produce(state, (draft: Draft<BasicState>) => {
        draft.products = [];
        draft.loading = false;
      });
    }

    case UPDATE_PRODUCT: {
      return produce(state, (draft: Draft<BasicState>) => {
        console.info("action.payload", action.payload);
        console.info("state", state);
        draft.products = state.products.map((product) =>
          product.name === action.payload.name ? { ...action.payload } : product
        );
      });
    }

    default:
      return { ...state };
  }
};

// eslint-disable-next-line import/no-default-export
export default basicReducer;
