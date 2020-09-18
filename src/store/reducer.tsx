import * as actionTypes from './actionTypes';

import { ImagesData } from '../helpers/types';

export type InitialState = {
  images: ImagesData,
  page: number
}

type AddImagesAction = {
  type: 'ADD_IMAGES';
  images: ImagesData;
}

type SetPageAction = {
  type: 'SET_PAGE';
  page: number;
}

type Actions = 
  | AddImagesAction
  | SetPageAction

const initialState:InitialState = {
  images: [],
  page: 1
};

const reducer = (state = initialState, action:Actions) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGES:
      return {
        ...state,
        images: [...state.images,...action.images]
      };
      case actionTypes.SET_PAGE:
        return {
          ...state,
          page: action.page
        };  
    default:
      return state;
  }
};

export default reducer;