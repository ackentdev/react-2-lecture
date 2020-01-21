import React, {Component} from 'react';
import ChildWithProps from './ChildWithProps';
// import FunctionalChild from './FunctionalChild'

export default class ParentWithState extends Component{
    constructor(){
        super()
        this.state = {
            number: 0
        }
    }



    render(){
        console.log(this.state)
    return <div className="parent" style={{backgroundColor: 'blue', padding: '50px'}}>
        This is the Parent
        <ChildWithProps/>
    </div>
    }
}