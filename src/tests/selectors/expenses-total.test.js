import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should give 0 if given no array', () => {
    const result = selectExpensesTotal([]);
    expect(result).toEqual( 0 );
    console.log(result);
});

test('should give sum if given one number', () => {

    const result = selectExpensesTotal( [expenses[0]] );
    expect(result).toEqual(expenses[0].amount);
    console.log(result);
});


test('should give sum if given array', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount );
    console.log(result);
});

