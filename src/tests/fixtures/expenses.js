import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    amount: 195,
    createdAt: 0,
    note: 'first note'
}, {
    id: '2',
    description: 'Rent',
    amount: 109500,
    createdAt: moment(0).subtract(4,'days').valueOf(),
    note: 'second note'
}, {
    id: '3',
    description: 'Credit Card',
    amount: 4500,
    createdAt: moment(0).add(4,'days').valueOf(),
    note: 'third note'
}
]