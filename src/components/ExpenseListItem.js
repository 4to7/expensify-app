// export stateless functional component
// description, amount, createdat
import React from 'react';
import { Link } from 'react-router-dom';
import momnent from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'gb', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: '£'
    }
});

numeral.locale('gb');

const ExpenseListItem = ( { id, description, amount, createdAt} ) => (
    
    <div> 
        <Link to={`/edit/${id}`}>
            <h3> {description}</h3>
        </Link>
        <p>
        {
            numeral(amount/100).format('$0,0.00')} 
        - 
        {momnent(createdAt).format('do MMM YYYY')} 
        </p>
    </div>
);

export default ExpenseListItem;


