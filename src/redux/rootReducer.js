import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import postReducers from './reducers/potsReducers';
import ProvinceReducers from './reducers/ProvinceReducer';

const rootReducers = combineReducers({
  posts: postReducers,
  province: ProvinceReducers,
  toastr: toastrReducer,
});

export default rootReducers;
