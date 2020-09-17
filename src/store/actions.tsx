import * as actionTypes from './actionTypes';

import { ImageData } from '../helpers/types'; 

export const addImages = (images: ImageData[]) => ({
  type: actionTypes.ADD_IMAGES,
  images
});