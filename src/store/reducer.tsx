import * as actionTypes from './actionTypes';

type InitialState = {
  largeImage: string
}

const initialState:InitialState = {
  largeImage: ''
};

const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case actionTypes.SET_LARGE_IMAGE:
      return {
        ...state,
        largeImage: action.image
      };
    case actionTypes.CLEAR_LARGE_IMAGE:
      return {
        ...state,
        largeImage: initialState.largeImage
      };  
    default:
      return state;
  }
};

export default reducer;