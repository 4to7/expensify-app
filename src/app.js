import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';

import {addExpense} from './actions/expenses';
import {setTextfilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 4500,createdAt:1100}));
store.dispatch(addExpense({ description: 'gas bill', createdAt:1000}));
store.dispatch(addExpense({ description: 'rent', amount: 109550,createdAt:800}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses , state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>  
);

ReactDOM.render(jsx, document.getElementById('app'));