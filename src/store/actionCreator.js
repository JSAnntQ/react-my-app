import { ADD_TODO_ITEM, DEL_TODO_ITEM, CHANGE_INPUT_VALUE, DEL_TODO_ITEM_DONE} from './actionTypes'

const getAddTodoItem = ()=>({
  type: ADD_TODO_ITEM
})

const getDelTodoItemDone = (index)=>({
  type: DEL_TODO_ITEM_DONE,
  index 
})

const getDelTodoItem = (index)=>({
  type: DEL_TODO_ITEM,
  index 
})

const getChangeInputVal = (value)=>({
  type: CHANGE_INPUT_VALUE,
  value
})

export {
  getAddTodoItem,
  getDelTodoItem,
  getChangeInputVal,
  getDelTodoItemDone
}
