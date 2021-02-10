import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProduct } from "../store/actions/products-actions";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { params } = useRouteMatch();
  const [number, setNumber] = React.useState(undefined);
  const [description, setDescription] = React.useState(undefined);
  const handleBackClick = () => {
    push("/");
  };

  const productItem = useSelector((state) =>
    state.basicReducer.products.find(({ name }) => name === params.productName)
  );

  React.useEffect(() => {
    if (!!productItem) {
      setDescription(productItem.description);
      setNumber(productItem.number);
    }
  }, [productItem]);

  const handleNumberChange = ({ target: { value } }) => setNumber(value);
  const handleDescriptionChange = ({ target: { value } }) =>
    setDescription(value);

  const handleSave = (e) => {
      e.preventDefault()
      console.info('handleSave', productItem)
    dispatch(UpdateProduct({
        ...productItem,
        number,
        description
    }));
  };
  return (
    <>
      <div>Products details</div>
      {!!productItem && (
        <form className="form">
          <div>
            <label>
              Number:
              <div>
                <input
                  type="text"
                  name="number"
                  onChange={handleNumberChange}
                  value={number}
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              Description:
              <div>
                <textarea
                  name="description"
                  rows="5"
                  cols="33"
                  onChange={handleDescriptionChange}
                  defaultValue={description}
                >
                  {description}
                </textarea>
              </div>
            </label>
          </div>
          <div>
            <input type="submit" value="Save" onClick={handleSave} />
          </div>
        </form>
      )}

      <button onClick={handleBackClick} type="button" className="back-button">
        Products List
      </button>
    </>
  );
};

export default ProductDetails;
