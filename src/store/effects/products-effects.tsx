import { ThunkAction } from "redux-thunk";

import { Product } from "../types/products-types";

import {
  LoadProductsError,
  LoadProductsRequest,
  LoadProductsSuccess,
} from "../actions/products-actions";

import { ProductsService } from "../../services/products-service";

interface ApplicationState {
  loading: {
    products: boolean;
  };
  products: Product[];
}

type Effect = ThunkAction<any, ApplicationState, any, any>;

export const loadProducts = (): Effect => (dispatch) => {
  dispatch(LoadProductsRequest());

  return ProductsService.getProducts()
    .then((products) => {

      return dispatch(LoadProductsSuccess(products.data.productList));
    })
    .catch(() => dispatch(LoadProductsError()));
};
