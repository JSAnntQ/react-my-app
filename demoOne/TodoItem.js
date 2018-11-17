import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.delItemFunc = this.delItemFunc.bind(this)
  }
  render(){
    const {content,contentA} = this.props 
    return (
      <Fragment>
        <div onClick={this.delItemFunc}>{contentA}--{content}</div>
      </Fragment>
    )

  }

  delItemFunc(){
    const {hanleDelItem,index} = this.props
    hanleDelItem(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
}

TodoItem.defaultProps = {
  contentA: 'jsanntq'
}
export default TodoItem