import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
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

        //changeColor
        case SET_CHANGE_COLOR:
        return{
          ...state,
          SelectionId :[...state.selectionId , action.payload ]

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
            ...state.addArray.slice(action.payload+1),
          ]
        }

        case ADD_TODO: {
          return {
              ...state,
              todoData: [...state.todoData, action.payload]
          }
      }
      case DELETE_TODO : {
          let itemIndex = state.todoData.findIndex((p => p.id === action.payload));
          return {
              ...state,
              todoData: [
                  ...state.todoData.slice(0, itemIndex),
                  ...state.todoData.slice(itemIndex + 1),
              ]
          }
      }

        default:
        return state;
    }
  }
  
  export default reducer;  