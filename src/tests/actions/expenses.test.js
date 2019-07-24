import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense( {id: '123abc'} );
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const action = editExpense( '123abc',  {note: 'Note123abc' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'Note123abc'}
    });
});


// description = '',
// note = '',
// amount = 0,
// createdAt = 0


test('should set up add expense action object w/ provided values', () => {
    const expenseData = {
        description: '123abc',
        amount: '12000',
        createdAt: '1000',
        note: 'note123'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)}
    });
});

test('should set up add expense action object w/ default values', () => {
    const action = addExpense();
    expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {     
                description: '',
                note: '',
                amount: 0,
                createdAt: 0,
                id: expect.any(String)
            }
    });
});