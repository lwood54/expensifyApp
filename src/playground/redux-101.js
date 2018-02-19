import { createStore } from 'redux';

// Action generators - return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// REDUCER KEY ATTRIBUTES:
// 1. Reducers are pure functions
//    - output is only determined by the input
//    - it doesn't take anything outside the function scope
//    - it doesn't change anything outside the function scope
// 2. Never change state or action directly
//    - don't reassign or mutate
//    - just return object that represents the new state

// Setting up Reducer
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer); // NOTE: We don't activate it with(), we just call its variable.

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// Reset the count
store.dispatch(resetCount());

// Decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 15 }));

store.dispatch(setCount({ count: 105 }));
