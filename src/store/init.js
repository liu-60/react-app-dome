const init = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INIT':
      return payload;
    default:
      return state;
  }
};

export default {
  init
};
