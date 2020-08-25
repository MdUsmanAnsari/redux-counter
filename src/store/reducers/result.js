import * as actionTypes from "../action";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      const updateArray = state.results.filter(
        (el) => el.id !== action.resultElId
      );
      return {
        ...state,
        results: updateArray,
      };
    default :
     return state;
  }

 
};

export default reducer;
