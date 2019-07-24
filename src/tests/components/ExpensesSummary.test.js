import React from 'react';
import numeral from 'numeral';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with many expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23523245}/>);
    expect(wrapper).toMatchSnapshot();
});