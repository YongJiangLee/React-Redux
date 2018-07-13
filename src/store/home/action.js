import * as home from './action-type';

export const increment = () => {
  return {
    type: home.INCREMENT,
  }
}

export const decrement= () => {
  return {
    type: home.DECREMENT,
  }
}

