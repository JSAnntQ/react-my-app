import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.getTodoItem = this.getTodoItem.bind(this)
    this.submitFunc = this.submitFunc.bind(this)
    this.hanleDelItem = this.hanleDelItem.bind(this)
  }

  render(){

    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.submitFunc}>提交</button>
        </div>
        {
          this.getTodoItem()
        }
      </Fragment>
    )

  }
  submitFunc(){
    this.setState((prevState)=>{
      console.log(prevState)
      // if(prevState.inputValue===''){
      //   alert('请输入内容！')
      //   return
      // }
      return {
        inputValue: "",
        list: [prevState.inputValue,...prevState.list]      
      }
    })
  }
  getTodoItem(){
    return this.state.list.map((item, index)=>{
      return (
        <TodoItem content={item} key={'item_'+index} index={index} hanleDelItem={this.hanleDelItem}/>
      )
    })
  }
  hanleDelItem(index){
    this.setState((prevState)=>{
      const {list} = prevState
      list.splice(index,1)
      return {
        list
      }
    })
  }
  handleInputChange(e){
    const value = e.target.value
    this.setState(()=>({
      inputValue: value
    }))
  }

}

export default TodoList