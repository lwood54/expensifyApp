import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenListFilters />
    <ExpenseList />
    <ExpensesSummary />
  </div>
);

export default ExpenseDashboardPage;
