import { produce } from 'immer';
import * as constant from '../constant';

const postsState = {
  loading: false,
  posts: [],
  error: null,
};

const postReducers = produce((draft, action) => {
  switch (action.type) {
    case constant.POSTS_DATA_REQUEST:
      draft.loading = true;
      draft.posts = [];
      draft.error = null;
      return;

    case constant.POSTS_DATA_SUCCESS:
      draft.loading = false;
      draft.posts = action.payload;
      draft.error = null;
      return;

    case constant.POSTS_DATA_ERROR:
      draft.loading = false;
      draft.posts = [];
      draft.error = action.payload;
      return;

    default:
      return;
  }
}, postsState);

export default postReducers;
