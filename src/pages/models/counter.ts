export default {
  namespace: 'counter',
  state: 0,
  reducers: {
    add(state: any, payload: any) {
      const { delta } = payload;
      return state + delta;
    },
    minus(state: any, payload: any) {
      const { delta } = payload;
      return state - delta;
    },
  },
};
