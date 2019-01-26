import React, { Component } from 'react'
import { connect } from 'react-redux';
import addContent from '../action/addItemAction';
import PropTypes from 'prop-types'
class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    console.log('onChange', e)
    console.log([e.target.name])
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    console.log('onSubmit', e)
    e.preventDefault();
    const postData = {
      title: this.state.title,
      body: this.state.body
    }
    let res = this.props.addContent(postData);
    console.log(res)
  }
  render() {
    return (
      <div>
        <h1>Add content</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>title</label>
            <br />
            <input type='text' name='title' onChange={this.onChange} value={this.state.title}></input>
          </div>
          <div>
            <br />
            <label>body</label>
            <br />
            <textarea name='body' onChange={this.onChange} value={this.state.body}></textarea>
            <div>
              <button type='submit'>add</button>
            </div>
          </div>
        </form>
      </div >
    )
  }
}
PostForm.propTypes = {
  addContent: PropTypes.func.isRequired,
}


export default connect(null, { addContent })(PostForm)  