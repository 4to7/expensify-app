import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList}  from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('shuld render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('shuld render expense list with empty messag', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
