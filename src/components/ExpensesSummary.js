import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = props => (
  <div>
    <h4>There are {props.expenses.length} expenses.</h4>
    <h5>
      Total of displayed expenses:{' '}
      {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </h5>
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
  expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);
