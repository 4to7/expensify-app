import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import Header from './../components/Header';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />    
        <ExpenseList /> 
    </div>
 
);

export default ExpenseDashboardPage;