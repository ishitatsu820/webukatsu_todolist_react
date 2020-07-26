import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './components/TodoList'

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <div className="inputArea">
            <input type="text" className="inputText js-get-val" value="" placeholder="something todo task" />
            <span className="error js-toggle-error">入力が空ですよ！！！</span>
          </div>
        </form>

        <div className="searchBox">
          <i className="far fa-search searchBox__icon" aria-hidden="true" />
          <input type="text" className="searchBox__input js-search" value="" placeholder="something keyword" />
        </div>

        <TodoList />

      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
