import React, { Component } from 'react';

class LifeCycleMethod extends Component {
    
    constructor(props){
    
        super(props)
        this.state ={
            count:0
        }
    
    };
componentDidMount(){

this.counterInterval = setInterval(() =>this.incrementCount(), 1000);


}
componentWillUnmount(){
    clearInterval(this.counterInterval);
}
 
 
 incrementCount() {
        
    this.setState({
        count:this.state.count + 1 
    })
}

 
    render() {

        const {count} = this.state;
        
        return (
            <div>
           {count}
            </div>
        );
    }
}



export default LifeCycleMethod;

