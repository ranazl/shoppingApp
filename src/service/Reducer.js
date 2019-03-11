import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_TYPE
  } from "./type";
  
  const initialState = {
    result : [] ,
    id: 0,
    items: [],
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
          items: action.payload,
          result: action.payload,
          filteredData:action.payload
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          items: [],
          result: []
        };

        case FETCH_TYPE:
           
        let filteredData=[]
        if(!action.payload.toUpperCase().include('ALL')){
            filteredData=
            state.items.filter(
                item =>  item.type.toUpperCase().includes(action.payload.toUpperCase())
            );
        }
        else {
            filteredData = state.items
        }
        return {
            ...state,
            selectedItem : [...filteredData]
        };

        default:
        return state;
    }
  }
  
  export default reducer;  