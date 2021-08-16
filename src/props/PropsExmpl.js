import React from 'react';



 function PropsExmpl(props) {
    
    const firstName = "Neeraj";
    const lastName  = "Raj";

    
    return (
        <div>
            <PropsChild firstName={firstName} lastName ={lastName}/>
        </div>
    )
}

function PropsChild(props){

   const firstName = props.firstName;
    const lastName = props.lastName;


    return(

        <div>
        
         <h1>Hello {firstName} {lastName} </h1>
        
        </div>
    )
}

export default PropsExmpl;