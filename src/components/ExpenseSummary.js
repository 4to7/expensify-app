import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal= numeral(expensesTotal/100).format('$0,0.00');

    return ( <div>
    {
        <p>Viewing  {expensesCount} {expenseWord} totalling {formattedExpensesTotal} </p>
    }
        
        </div>);};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesCount: visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);