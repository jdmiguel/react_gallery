import axios, { AxiosError } from 'axios';

import { API_PIXABAY, API_KEY } from '../helpers/constants';

const handleApiError = (error: AxiosError) => {
  if (error.response) {
    const { data, status } = error.response;
    return {
      ...data,
      status,
    };
  }

  if (error.request) {
    return {
      status: 500,
    };
  }
};

export const getImages = async (page = 1): Promise<any> => {
  try {
    const response = await axios(API_PIXABAY, {
      method: 'GET',
      params: {
        key: API_KEY,
        image_type: 'photo',
        per_page: 20,
        orientation: 'horizontal',
        colors: 'grayscale',
        min_width:'600',
        min_height: '400',
        order: 'latest'
      },
    });

    return { data: response.data, status: response.status };
  } catch (error) {
    return handleApiError(error);
  }
};
