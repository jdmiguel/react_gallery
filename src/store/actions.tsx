import * as actionTypes from './actionTypes';

export const setLargeImage = (image: string) => ({
  type: actionTypes.SET_LARGE_IMAGE,
  image
});

export const clearLargeImage = () => ({
  type: actionTypes.CLEAR_LARGE_IMAGE
});