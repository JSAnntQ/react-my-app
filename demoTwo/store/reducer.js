const defaultState = {
  list: [],
  inputVal: ""
}

export default (state = defaultState, action)=>{
  switch (action.type){
    case 'change_input_value':
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputVal = action.value
      return newState;
    case 'change_todo_item':
      const newStateA = JSON.parse(JSON.stringify(state))
      newStateA.list.unshift(newStateA.inputVal)
      newStateA.inputVal = ''
      return newStateA;
    case 'del_todo_item':
      const newStateB = JSON.parse(JSON.stringify(state))
      newStateB.list.splice(action.index,1)
      return newStateB
    default:
      return state;
  }
}