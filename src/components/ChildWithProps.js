import React from 'react'

export default class ChildWithProps extends React.Component{
    render(){
        return <div className='child' style={{backgroundColor: 'yellow', padding: '50px'}}>
            This is Child
            <h1>Number</h1>
            <div>Render props here</div>
            <button>Add</button>
        </div>
    }

}