import React from 'react'

 function ListAndKeys(props) {
    
    const users =[
        {
            fName : "Neeraj",
            passed : true,
        },
        {
            fName :"Neer",
            passed : true,
        },
        {
            fName :"Neeaj",
            passed : false,
        },
        {
            fName :"Neraj",
            passed : true,
        }]
 
    const userList = users.map((user,index)=>(

        <div>
         <b>Name:</b>
         <p>{user.fName}</p>

         <b>passed</b>
         <p>{user.passed.toString()} </p>
        </div>

    ));

    return 
        <div>  {userList} </div>;
    
};

export default ListAndKeys;