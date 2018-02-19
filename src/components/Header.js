import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} to="/" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add an Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Need help?
    </NavLink>
  </header>
);

export default Header;