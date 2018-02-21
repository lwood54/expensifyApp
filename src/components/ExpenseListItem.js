import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <li>
      <h3>{description}</h3>
      <p>
        {amount}: {createdAt}
      </p>
    </li>
  </div>
);

export default ExpenseListItem;
