import { ADD_TODO_ITEM, DEL_TODO_ITEM, CHANGE_INPUT_VALUE, DEL_TODO_ITEM_DONE } from './actionTypes'
const defaultState = {
  inputVal: '',
  list: ['学习react', '学习vue', '学习nodejs'],
  listDone: [],
  listDel: [],
}
function getNewState(state){
  return JSON.parse(JSON.stringify(state))
}

export default (state = defaultState, action)=>{
  switch ( action.type ){
    case ADD_TODO_ITEM :
      const newStateA = getNewState(state)
      if(state.inputVal.length > 0){
        newStateA.list.unshift(newStateA.inputVal)
        newStateA.inputVal = ''
      }
      return newStateA
    case DEL_TODO_ITEM_DONE :
      const index = action.index
      const newStateB = getNewState(state)
      newStateB.listDone.unshift(newStateB.list[index])
      newStateB.list.splice(index,1)
      return newStateB
    case CHANGE_INPUT_VALUE: 
      const newStateC = getNewState(state)
      newStateC.inputVal = action.value
      return newStateC
    case DEL_TODO_ITEM :
      const indexD = action.index
      const newStateD = getNewState(state)
      newStateD.listDel.unshift(newStateD.listDone[indexD])
      newStateD.listDone.splice(indexD,1)
      return newStateD
    default: 
      return state  
  }
}