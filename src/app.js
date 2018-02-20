// install --> import --> use
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// addExpense --> water bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 7500 }));

// addExpense --> Gas bill
store.dispatch(addExpense({ description: 'Gas Bill', amount: 3500 }));
console.log('current expenses: ', store.getState().expenses);

// setTextFilter --> bill (2 items) --> water (1 item)
store.dispatch(setTextFilter('water'));
// getVisibleExpenses --> print visibles ones to screen

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('filtered expenses: ', visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
