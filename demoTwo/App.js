import React, { Component, Fragment } from 'react'
import Store from './store'
import { Input,Button, List } from 'antd'
import 'antd/dist/antd.css'; 

class App extends Component {
  constructor(props){
    super(props)
    this.state = Store.getState()
    this.handleInputVal = this.handleInputVal.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.submitTodoItem = this.submitTodoItem.bind(this)

    Store.subscribe(this.handleStateChange)
  }
  render(){
    return (
      <Fragment>
        <div style={{margin: '20px'}}>
          <Input 
            placeholder="请输入内容" 
            style={{width: '300px',marginRight: '20px'}} 
            value={this.state.inputVal}
            onChange={this.handleInputVal}
          />
          <Button type="primary" onClick={this.submitTodoItem}>提交</Button>
        </div>
        <List 
          style={{margin: '20px',width: '400px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item onClick={this.handleDelItem.bind(this,index)}>{item}</List.Item>)}
        />
      </Fragment>
    )
  }

  handleInputVal(e){
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    Store.dispatch(action)
  }

  handleStateChange(){
    this.setState(Store.getState())
  }

  submitTodoItem(){
    const action = {
      type: 'change_todo_item',
    }
    Store.dispatch(action)
  }

  handleDelItem(index){
    const action = {
      type: 'del_todo_item',
      index
    }
    Store.dispatch(action)
  }
}

export default App