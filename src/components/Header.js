import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact> Home </NavLink>
        <NavLink activeClassName="is-active" to="/create"> Create </NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispathToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispathToProps)(Header);