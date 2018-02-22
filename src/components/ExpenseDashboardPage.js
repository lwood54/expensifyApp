import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
