import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_TYPE,
    SEARCH_ITEM
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
        return {
            ...state,
            selectedItem : [...filteredData]
        };

        //search
        case SEARCH_ITEM:

        let filteredDatas = 
        state.selectedItem.filter(item => 
            item.text.toUpperCase().includes(action.payload.toUpperCase())
        );
    return {
        ...state,
        selectedItem : [...filteredDatas]
        };

        default:
        return state;
    }
  }
  
  export default reducer;  