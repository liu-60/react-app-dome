import { init } from 'src/services/init';

export const initAction = (params, callback = () => {}) => async dispatch => {
  let response = await init(params);
  dispatch({
    type: 'INIT',
    payload: response.data
  });
  callback(response);
};
