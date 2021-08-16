import React from 'react';

function SignInPage(props) {

    const {Logout} = props;

    return (
        <div>
        The user is Logged out

        <button onClick ={()=>Logout(true)}>Log In</button>
        </div>
    );
}

export default SignInPage;