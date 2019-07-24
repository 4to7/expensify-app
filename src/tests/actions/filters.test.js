import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextfilter } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
        });
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"        
        });
});

test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({ type:'SORT_BY_DATE' });
});

test('should generate set text filter action object w/ data', () => {
    const text = 'test';
    const action = setTextfilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text        
        });
});

test('should generate set text filter action object w/ default', () => {
    const action = setTextfilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''        
        });
});