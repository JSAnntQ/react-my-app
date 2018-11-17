import React, { Component, Fragment } from 'react'
import store from './store'
import { getAddTodoItem,getDelTodoItem,getChangeInputVal,getDelTodoItemDone} from './store/actionCreator'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

class TodoList extends Component {
  constructor(props){
    
    super(props)
    this.state = store.getState()

    this.submitItemFunc = this.submitItemFunc.bind(this)
    this.handleInputVal =  this.handleInputVal.bind(this)
    this.handleStoreState = this.handleStoreState.bind(this)
    store.subscribe(this.handleStoreState)
  }

  render(){
    return (
      <Fragment>
        <div style={{margin: '40px', display: 'flex',flexFlow: 'row wrap',justifyContent: 'space-between'}}>
          <div style={{marginBottom: '40px',width: '500px', padding: '20px',backgroundColor: '#fff',borderRadius: '10px',boxShadow: '2px 2px 40px #bfbfbf', display: 'block'}}>
            <h1 style={{textAlign: 'center',marginBottom: '30px'}}>JSAnntQ TodoList (新增)</h1>
            <div>
              <Input value={this.state.inputVal} size="large" style={{width: '300px',marginRight: '20px'}} placeholder="todo item" onChange={this.handleInputVal}/>
              <Button size="large" type="primary" onClick={this.submitItemFunc}>提交</Button>
            </div>        
            <List
              style={{marginTop: '20px',width: '460px'}}
              bordered
              dataSource={this.state.list}
              renderItem={(item,index) => (<List.Item onClick={this.handleDelItemDone.bind(this, index)}>{item}   <div style={{color: 'blue'}}>(待完成)</div></List.Item>)}
            />
          </div>

          <div style={{marginBottom: '40px',width: '500px', padding: '20px',backgroundColor: '#fff',borderRadius: '10px',boxShadow: '2px 2px 40px #bfbfbf', display: 'block'}}>
            <h1 style={{textAlign: 'center',marginBottom: '30px'}}>JSAnntQ TodoList (已完成)</h1>     
            <List
              style={{marginTop: '20px',width: '460px'}}
              bordered
              dataSource={this.state.listDone}
              renderItem={(item,index) => (<List.Item onClick={this.handleDelItem.bind(this, index)}>{item} <div style={{color: 'green'}}>(已完成)</div></List.Item>)}
            />
          </div>

          <div style={{marginBottom: '40px',width: '500px', padding: '20px',backgroundColor: '#fff',borderRadius: '10px',boxShadow: '2px 2px 40px #bfbfbf', display: 'block'}}>
            <h1 style={{textAlign: 'center',marginBottom: '30px'}}>JSAnntQ TodoList (已删除)</h1>     
            <List
              style={{marginTop: '20px',width: '460px'}}
              bordered
              dataSource={this.state.listDel}
              renderItem={(item) => (<List.Item>{item} <div style={{color: 'red'}}>(已删除)</div></List.Item>)}
            />
          </div>
        </div>
        
    
      </Fragment>
    )
  }

  submitItemFunc(){
    const action = getAddTodoItem()
    store.dispatch(action)
  }

  handleInputVal(e){
    const action = getChangeInputVal(e.target.value)
    store.dispatch(action)
  }

  handleDelItem(index){
    const action = getDelTodoItem(index)
    store.dispatch(action)
  }

  handleDelItemDone(index){
    const action = getDelTodoItemDone(index)
    store.dispatch(action)
  }

  handleStoreState(){
    this.setState(store.getState())
  }

}

export default TodoList