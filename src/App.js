import React, { Component } from 'react';
import './App.css';
import Posts from './component/Posts';
import PostForm from './component/PostForm';
import { Provider } from 'react-redux'
import { store } from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}
export default App;
