import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.handleDelItem = this.handleDelItem.bind(this)   
  }
  render(){
    const { content } = this.props
    return (
      <div onClick={this.handleDelItem}>
        {content}
      </div>
    )
  }

  handleDelItem(){
    const { handleDelItem, index } = this.props
    handleDelItem(index)
  }

}

export default TodoItem