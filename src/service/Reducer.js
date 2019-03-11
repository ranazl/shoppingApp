import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from "./type";
  
  const initialState = {
    result : [] ,
    id: 0,
    contacts: [],
    color: false,
    filter: [],
    filteredData: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          contacts: action.payload,
          result: action.payload,
          filteredData:action.payload
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          contacts: [],
          result: []
        };
        default:
        return state;
    }
  }
  
  export default reducer;  