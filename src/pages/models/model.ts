export default {
  namespace: 'counter',
  state: 0,
  reducers: {
    add(state: any) {
      return state + 1;
    },
    minus(state?: any) {
      return state - 1;
    },
  },
};
