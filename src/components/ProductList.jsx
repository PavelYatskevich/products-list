import React from "react";

import { loadProducts } from "../store/effects/products-effects";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { getProducts } from "../store/selectors/products-selectors";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  React.useEffect(() => {
    if (products.length === 0) {
      dispatch(loadProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div className="product-list">
      {products &&
        products.map((product, index) => (
          <ProductItem {...product} key={index} />
        ))}
    </div>
  );
};

export default ProductList;
