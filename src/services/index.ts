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

export const getImages = async (page: number, amount: number): Promise<any> => {
  try {
    const response = await axios(API_PIXABAY, {
      method: 'GET',
      params: {
        key: API_KEY,
        page: page,
        per_page: amount,
        image_type: 'photo',
        orientation: 'horizontal',
        order: 'popular'
      },
    });

    return { data: response.data, status: response.status };
  } catch (error) {
    return handleApiError(error);
  }
};
