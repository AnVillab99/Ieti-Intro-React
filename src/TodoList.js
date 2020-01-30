import React from 'react';
import { Todo } from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);   
    }   




render(){    
    
        const Tdos =this.props.TodoList;
        const listItems = Tdos.map((Tdo,i) =>
            <li key={"Todo-"+i}>
                <Todo text ={Tdo.text} priority ={Tdo.priority} dueDate = {Tdo.dueDate.toString()} />
            </li>
        )
        return (
            <ul>{listItems}</ul>
        )
    
        return <ul> {listItems}</ul>;
    
}
}