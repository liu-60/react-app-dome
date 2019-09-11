import Fetch from 'common/fetch';

export const init = () => {
  return Fetch('/init', {
    method: 'get'
  });
};
