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
  ADD_TODO
} from "./Type";

export const add = name => ({
  type: ADD_TODO,
  payload: name
});

//fetchProducts

export const fetchProducts = (listId) => {
  return dispatch => {
    let dataTask = `http://10.0.2.2:3000/products?listId=${listId}`;
    dispatch(fetchProductsBegin());
    fetch(dataTask, { method: "GET" })
      .then(response => response.json())
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

//fetchList
export const fetchList = () => {
  return dispatch => {
    let dataTask = `http://10.0.2.2:3000/List`;
    dispatch(fetchListBegin());
    fetch(dataTask)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchListSuccess(data));
      })
      .catch(error => {
        dispatch(fetchListFailure(error));
      });
  };
};

const fetchListBegin = () => ({
  type: FETCH_LIST_BEGIN
});

const fetchListSuccess = List => {
  
  return {
    type: FETCH_LIST_SUCCESS,
    payload: List
  };
};

const fetchListFailure = error => ({
  type: FETCH_LIST_FAILURE,
  payload: error
});

//setType
const setTypeAction = type => {
  return {
    type: FETCH_TYPE,
    payload: type
  };
};
export const setType = type => {
  return setTypeAction(type);
};

//search
const setSearchAction = text => {
  return {
    type: SEARCH_ITEM,
    payload: text
  };
};

export const setSearch = text => {
  return setSearchAction(text);
};

//changeColor
const setChangeAction = (id ) => {
  return {
    type: SET_CHANGE_COLOR,
    payload: id
  };
};


//item
const setItemAction = input => {
  return {
    type: SET_ITEM,
    payload: input
  };
};

export const setItems = input => {
  return setItemAction(input);
};

//remove
export const setItemsID = () => {
  return {
    type: SET_ID
  };
};
export const setID = () => {
  return setItemsID();
};

export const setRemoveAction = index => {
  return {
    type: SET_REMOVE,
    payload: index
  };
};

// export const setRemove = index => {
//   return setRemoveAction(index);
// }

//update
export const failed = id => ({
  type: FAILED,
  payload: id
});

export const update = (item) => {
  
  return dispatch => {
    let check = !item.selected;
    let data = {
      selected: !item.selected
    };
    const url = "http://10.0.2.2:3000/products/";
    fetch(`${url}${item.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      // .then(response => response.json())
      .then(data => {
        dispatch(setChangeAction(item.id));
      });
  };
};
