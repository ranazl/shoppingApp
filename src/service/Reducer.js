import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_TYPE
  } from './Type';
  
  const initialState = {
    id: 0,
    items: [],
    selectedItem : [],
    filter: [],
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
          selectedItem: action.payload,
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          items: [],
          selectedItem: []
        };

        case FETCH_TYPE:
       
           
        let filteredData=[]
      
            filteredData=
            state.items.filter(
                item =>  item.type.toUpperCase().includes(action.payload.toUpperCase())
            );
            // console.warn ("gg: " + filteredData)
        return {
            ...state,
            selectedItem : [...filteredData]
        };

        default:
        return state;
    }
  }
  
  export default reducer;  