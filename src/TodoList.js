import React from 'react';
import { Todo } from './Todo'

class lista extends React.Component {

    valores(props) {
    const Tdos =props.TodoList;
        

    const listItems = Tdos.map((Tdo) =>
        <ul key={Tdo.text.toString()}>
        <li >
            {Tdo.text}
        </li>
        <li >
            {Tdo.priority}
        </li>
        <li >
            {Tdo.dueDate}
        </li>

        </ul>
    )
    return (
        <ul>{listItems}</ul>
    )
}

render(){    
        <ul> {this.valores}</ul>
    
}
}