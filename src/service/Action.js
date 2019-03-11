import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from "./type";
  
  //fetch
  export const fetchProducts = () => {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return (
        fetch("https://10.0.2.2:3000/products")
          // .then(handleErrors)
          .then(res => res.json())
          .then(json => {
            dispatch(fetchProductsSuccess(json));
          })
          .catch(error => dispatch(fetchProductsFailure(error)))
      );
    };
  };
  
  const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  const fetchProductsSuccess = products => {
    return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products
    };
  };
  
  const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  });
  