import React from 'react'


const details = (name)=>{
    return `${name.firstName} ${name.lastName}`
}


const name = {
    firstName:"Neeraj",
    lastName: "Raj"
}



function Jsx(props) {
    return (
        <div>
            Hello {details(name)}
        </div>
    )
}

export default Jsx;
