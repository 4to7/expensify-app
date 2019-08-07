import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal= numeral(expensesTotal/100).format('$0,0.00');

    return ( 
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                Viewing <span> {expensesCount} </span> {expenseWord} totalling <span> {formattedExpensesTotal} </span> </h1>
                <div className="page=header__actions">
                    <Link to="/create" className="button"> Add Expense </Link>
                </div>
                </div>
        </div>);};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesCount: visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);