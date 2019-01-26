import React, { Component } from 'react';
import getList from '../action/getListAction';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class Posts extends Component {
  async componentDidMount() {
    // 触发 Action
    this.props.getList()
  }

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.item){
  //     this.props.items.unshift(nextProps.item)
  //   }
  // }

  // shouldComponentUpdate(nextProps){
  //   console.log("shouldComponentUpdate ... ", nextProps)
  //   return true
  // }

  render() {
    const postItems = this.props.items.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  getList: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  items: state.list.items,
  item: state.list.item
})
const mapDispatchToProps = {
  getList: getList
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)  