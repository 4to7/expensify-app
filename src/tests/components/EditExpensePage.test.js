import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpenses, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( 
        <EditExpensePage 
        editExpense={editExpense} 
        startRemoveExpenses={startRemoveExpenses} 
        history={history} 
        expense={expenses[2]}
        />);
});

// should render EditExpensePage
// snapshot
test('should render EditExpensePage ', () => {
    expect(wrapper).toMatchSnapshot();
});

// should handle editExpense
// spies
test('should handle editExpense ', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2] );
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
});

// should handle startRemoveExpenses
// spies
test('should handle startRemoveExpenses ', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});