import React from 'react';

function LoginPage(props) {

    const {Login} = props;
         
    return (
        <div>
            The user is Logged in 
            Plse use Logged OUt
            <button onClick ={()=>Login(false)}>Log Out</button>
        </div>
    );
}

export default LoginPage;