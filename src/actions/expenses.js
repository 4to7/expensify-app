import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls actions generator
// action generatos returns object
// component dispated object
// redux store changes

// changing to:

// component calls actions generator
// action generator returns function
// component dipatches function
// function runs + has ability to dispatch other actions and do whatever it wants


//ACTIONS
//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = {
            description, note, amount, createdAt
        };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });

    };
;}

//REMOVE_EXPENSE
export const removeExpense = ({id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// 1. create startRemoveExpenses(id)
// 2. test startRemoveExpenses with "should remove expenses from datanase"
// 3. use startRemoveExpenses in EditExpense instead of removeExpense
// 4. Adjkust EditExpensePage tests

export const startRemoveExpenses = ( {id} = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
                dispatch(removeExpense({id}));  
            }).catch((e) => {
                console.log('This failed:', e)
            });
    };
};



//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpenses = ( id,updates ) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id,updates));  
        }).catch((e) => {
            console.log('This failed:', e)
        });
    };
};




// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
                
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};