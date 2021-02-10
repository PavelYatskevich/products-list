import React from "react";
import { useHistory } from "react-router-dom";
const ProductItem = (props) => {
  const { name } = props;
  const { push } = useHistory();
  const handleClick = () => {
    push(`/productDetails/${name}`);
  };

  return (
    <div className="product-item">
      <div className="product-name" onClick={handleClick}>
        {name}
      </div>
    </div>
  );
};

export default ProductItem;
