import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
  const text = 'some text';
  const action = { type: 'SET_TEXT_FILTER', text: text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

// should set startDate filter
test('should set start date filter', () => {
  const time = moment().startOf('month');
  const action = {
    type: 'SET_START_DATE',
    startDate: time
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(time);
});

// should set endDate filter
test('should set end date filter', () => {
  const time = moment().endOf('month');
  const action = {
    type: 'SET_END_DATE',
    endDate: time
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(time);
});
