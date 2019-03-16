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
    ADD_TODO
  } from './Type';

  export const add = (name) => ({
    type: ADD_TODO,
    payload: name
});

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

  //changeColor
  const setChangeAction = id => {

    return{
      type: SET_CHANGE_COLOR,
      payload: id
    }
  }

  export const setChange = id => {
    return setChangeAction(id);
  };

  //item
  const setItemAction = input => {

    return{
      type:SET_ITEM,
      payload:input
    }
  }

  export const setItems = input => {
    return setItemAction(input);
  }

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
    return{
      type:SET_REMOVE,
      payload:index
    }
  }

  // export const setRemove = index => {
  //   return setRemoveAction(index);
  // }

  //update
  export const failed = (id) => ({
    type: FAILED,
    payload: id
  });

  export const update = (id) => {
    return dispatch => {
        let data = {
            "selected": false
        };
        const url = "http://10.0.2.2:3000/products";
        fetch(`${url}${id}/?selected=${selected}`,
            {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        )
            .then(response => response.json())
            .then(data => {
                dispatch(failed(id))
            })
    }
};
