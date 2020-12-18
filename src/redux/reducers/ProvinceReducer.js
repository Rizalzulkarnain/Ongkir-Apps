import { produce } from 'immer';
import * as constant from '../constant';

const provinceState = {
  loading: false,
  prov: [],
  error: null,
};

const ProvinceReducers = produce((draft, action) => {
  switch (action.type) {
    case constant.GET_PROVINCE_REQUEST:
      draft.loading = true;
      draft.prov = [];
      draft.error = null;
      return;

    case constant.GET_PROVINCE_SUCCESS:
      draft.loading = false;
      draft.prov = action.payload;
      draft.error = null;
      return;

    case constant.GET_PROVINCE_ERROR:
      draft.loading = false;
      draft.prov = [];
      draft.error = action.payload;
      return;

    default:
      return;
  }
}, provinceState);

export default ProvinceReducers;
