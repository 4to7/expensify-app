// higher order component (HOC) - a component that renders another (regular) component
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const  withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is super secret, don't share</p>}
            
            <WrappedComponent {...props} />
        </div>
    );
};

const  requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? 
                (<WrappedComponent {...props} />
            ) : (
                <p>Login!</p>
            )}
        </div>
    );
};

// requireAuthentication

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render( <AdminInfo isAdmin={false} info="This is the detail" />,document.getElementById('app'));
ReactDOM.render( <AuthInfo isAuth={false} info="This is the detail" />,document.getElementById('app'));