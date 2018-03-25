import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = props => {
  const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
  const isVare = props.expenses.length === 1 ? 'is' : 'are';
  return (
    <div>
      <h4>
        There {isVare} {props.expenses.length} {expenseWord}.
      </h4>
      <h5>
        Total {expenseWord}:{' '}
        {numeral(props.expensesTotal / 100).format('$0,0.00')}
      </h5>
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
  expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);
