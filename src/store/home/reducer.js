let defaultState = {
  count: 0, 
}
export default function countReducer(state = defaultState, action) {
  switch (action.type) {
  case 'INCREMENT':
    state.count += 1;
    return state;
  case 'DECREMENT':
    state.count -= 1;
    return state;
  default:
    return state;
  }
}