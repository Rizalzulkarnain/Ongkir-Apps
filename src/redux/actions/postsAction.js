import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import * as constant from '../constant';

export const postAction = (posts) => async (dispatch) => {
  try {
    dispatch({
      type: constant.POSTS_DATA_REQUEST,
    });

    const { data } = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        posts,
      }
    );
    console.log(data);
    dispatch({
      type: constant.POSTS_DATA_SUCCESS,
      payload: {
        posts: data,
      },
    });
  } catch (error) {
    dispatch({
      type: constant.POSTS_DATA_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toastr.error(error.message);
  }
};
