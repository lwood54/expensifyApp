import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <li>
      <h3>{description}</h3>
      <p>
        {amount}: {createdAt}
      </p>
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </li>
  </div>
);

// const ExpenseListItem = props => (
//   <div>
//     <li>
//       <h3>{props.description}</h3>
//       <p>
//         {props.amount}: {props.createdAt}
//       </p>
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id: props.id }));
//         }}
//       >
//         Remove
//       </button>
//     </li>
//   </div>
// );

export default connect()(ExpenseListItem);
