import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_LIST_BEGIN,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
    FETCH_TYPE,
    SEARCH_ITEM,
    SET_CHANGE_COLOR,
    SET_ITEM,
    SET_REMOVE,
    SET_ID,
    ADD_TODO,
    DELETE_TODO
  } from './Type';
  
  const initialState = {
    id: 0,
    todoData: [],
    items: [],
    selectedItem : [],
    filter: [],
    color: false,
    SelectionId:[],
    addArray:[]
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null,
          selectedItem:[]
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
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
//List
        case FETCH_LIST_BEGIN:
        
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_LIST_SUCCESS:
      
        return {
          ...state,
          loading: false,
          items: action.payload,
          todoData: action.payload,
        };
  
      case FETCH_LIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          items: [],
          todoData: []
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

        //changeColor
        case SET_CHANGE_COLOR:
            let itemIndex = state.selectedItem.findIndex((p => p.id === action.payload));
            let item = state.selectedItem[itemIndex];
            
        return{
          ...state,
          
          selectedItem: [
            ...state.selectedItem.slice(0, itemIndex),
            {
              ...item,
              "selected": !item.selected
            },
            ...state.selectedItem.slice(itemIndex + 1),
        ]

        }

        //item
        case SET_ITEM:
        return{
          ...state,
          id : state.id + 1,
          addArray: [...state.addArray,{"text" : action.payload , "id" : state.id}]
        }

        //remove
        case SET_ID:
        return {
          ...state,
          id: state.id + 1
        };

        case SET_REMOVE:
        return{
          ...state,
          addArray:[
            ...state.addArray.slice(0,action.payload),
            {...state,selected:true},
            ...state.addArray.slice(action.payload+1),
          ]
        }


        default:
        return state;
    }
  }
  
  export default reducer;  