import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('should render 1 expense with its total', () => {
  const wrapper = shallow(
    <ExpensesSummary expenses={[expenses[1]]} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render 2 expenses with their total', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenses={[expenses[1], expenses[2]]}
      expensesTotal={450}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
