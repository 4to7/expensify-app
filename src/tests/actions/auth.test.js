import { login, logout} from '../../actions/auth';

test('should gnerate login action', () => {
    const uid = 'abc123';
    const action = login( uid );
    expect(action).toEqual({
        type: 'LOGIN',
        uid
        });
});

test('should gnerate logout action', () => {
    const action = logout(  );
    expect(action).toEqual({
        type: 'LOGOUT'
        });
});