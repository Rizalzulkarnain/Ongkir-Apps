import { toastr } from 'react-redux-toastr';
import * as API from '../../API/API';
import * as constant from '../constant';

export const provinceAction = () => async (dispatch) => {
  try {
    dispatch({
      type: constant.GET_PROVINCE_REQUEST,
    });

    const { data } = await API.getProvince();
    dispatch({
      type: constant.GET_PROVINCE_SUCCESS,
      payload: {
        prov: data.rajaongkir.results,
      },
    });
  } catch (error) {
    dispatch({
      type: constant.GET_PROVINCE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toastr.error(error.message);
  }
};
