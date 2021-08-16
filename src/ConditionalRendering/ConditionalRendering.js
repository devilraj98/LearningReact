import React,{useState} from 'react';
import SignInPage from './SignInPage'
import LoginPage from './LoginPage'

function ConditionalRendering(props) {
    
    const [isLogin,setLogin] = useState(false)
    
    return isLogin ? <LoginPage Login = {setLogin} /> : <SignInPage Logout = {setLogin}/>;
}

export default ConditionalRendering;