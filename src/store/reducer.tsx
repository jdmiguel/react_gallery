import * as actionTypes from './actionTypes';

import { ImageData } from '../helpers/types'; 

type InitialState = {
  images: ImageData[]
}

const initialState:InitialState = {
  images: []
};

const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGES:
      return {
        ...state,
        images: [...state.images,...action.images]
      };
    default:
      return state;
  }
};

export default reducer;