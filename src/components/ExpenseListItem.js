// export stateless functional component
// description, amount, createdat
import React from 'react';
import { Link } from 'react-router-dom';
import momnent from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ( { id, description, amount, createdAt} ) => (
    <div> 
        <Link to={`/edit/${id}`}>
            <h3> {description}</h3>
        </Link>
        <p>
        {numeral(amount).format('£0,0.00')} 
        - 
        {momnent(createdAt).format('do MMM YYYY')} 
        </p>
    </div>
);

export default ExpenseListItem;


