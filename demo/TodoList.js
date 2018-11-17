import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputVal: "111"
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.getTodoItem = this.getTodoItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelItem = this.handleDelItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputVal} onChange={this.handleChangeInput} />
        <button onClick={this.handleSubmit}>提交</button>
        {this.getTodoItem()}
      </Fragment>
    );
  }

  handleChangeInput(e) {
    let value = e.target.value;
    this.setState(() => ({
      inputVal: value
    }));
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={"item" + index}
          content={item}
          index={index}
          handleDelItem={this.handleDelItem}
        />
      );
    });
  }

  handleSubmit() {
    this.setState(prevState => {
      return {
        list: [prevState.inputVal, ...prevState.list],
        inputVal: ""
      };
    });
  }

  handleDelItem(index) {
    this.setState(prevState => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      };
    });
  }
}

export default TodoList;
