import React from 'react';

export class Todo extends React.Component {


    constructor(props) {
        super(props);   
    }   

    render() {
        return (  
        <div>
            <h1>{props.text}</h1>
            <h1>{props.priority}</h1>
            <h1>{props.dueDate}</h1>
        </div>
        );
    }

}