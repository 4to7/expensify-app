import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';



test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0],expenses[2] ]);
});

test('should NOT remove expense by incorrect ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: undefined
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0],expenses[1],expenses[2] ]);
});

//add expense
test('should add expense', () => {
    const expense = {
        id: '102',
        description: 'New EXP',
        amount: 100000,
        createdAt: 0
    }
    
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses,expense ]);
});

//should edit expense
test('should edit expense', () => {
    const description = 'New Description';
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toBe('New Description');
});

//should Not edit expense
test('should not edit expense if ID not found', () => {
    const description = 'New Description';
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});