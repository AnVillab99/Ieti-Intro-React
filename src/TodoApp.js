import React from "react";
import { TodoList } from "./TodoList";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date() },
    {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
    {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], text: "",priority:"",dueDate:"" };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeD = this.handleChangeD.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todoT"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
          id="new-todoP"
          onChange={this.handleChangeP}
          value={this.state.priority}
          />
          <input type= "Date"
            id="new-todoDD"
            onChange={this.handleChangeD}
            value={this.state.dueDate}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleChangeP(e) {
    this.setState({ priority: e.target.value });
  }
  handleChangeD(e) {
    this.setState({ dueDate: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    if (!this.state.priority.length) {
      return;
    }
    if (!this.state.dueDate.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: new Date(this.state.dueDate).toDateString(),
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: "",
      priority: "",
      dueDate: ""
    }));
  }
}
