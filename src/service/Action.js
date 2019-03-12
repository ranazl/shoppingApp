import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_TYPE,
    SEARCH_ITEM
  } from './Type';

  //fetch
  export const fetchProducts = () => {
    return dispatch => {
         
      dispatch(fetchProductsBegin());
      fetch("http://10.0.2.2:3000/products")
        .then(data =>  data.json())
        .then(data => {
          dispatch(fetchProductsSuccess(data));
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
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

  //setType
  const setTypeAction = type => {
  
    return {
      type :FETCH_TYPE,
      payload : type
    }
  }
  export const setType = type => {
    
      return setTypeAction(type);
  };

  //search
  const setSearchAction = text => {

    return{
      type: SEARCH_ITEM,
      payload: text
    }
  }
  export const setSearch = text => {
    return setSearchAction(text);
  };
