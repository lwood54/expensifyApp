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
import 'react-dates/lib/css/_datepicker.css';

// NOTE: For running tests: yarn test -- --watch (this tells it to watch the test instead of
//      watching yarn.)

const store = configureStore();

// addExpense --> water bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 7500 }));

// addExpense --> Gas bill
store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 3500, createdAt: 1000 })
);

// addExpense --> Rent bill
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
