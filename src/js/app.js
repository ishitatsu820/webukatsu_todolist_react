import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import TodoList from './components/TodoList';
import TodoCreater from './components/TodoCreater';

class TodoApp extends React.Component {

  constructor(){
    super();
    this.state = {
      data: [
        {
          id: this.createId(),
          text: 'sample01'
        },
        {
          id: this.createId(),
          text: 'あああ'
        }
      ]
    }
    this.callBackRemoveTask = this.callBackRemoveTask.bind(this);
    this.callBackAddTask = this.callBackAddTask.bind(this);
    
  }
  createId(digits){
    return Math.random().toString(36).slice(-16);
  }

  callBackRemoveTask(id){
    let data = _.reject(this.state.data, {'id': id});
    this.setState({
      data: data
    });
  }

  callBackAddTask(val){
    let nextData = this.state.data;
    nextData.push({id: this.createId(), text: val});
    this.setState({
      data: nextData
    });
  }
  render() {
    

    return (
      <div>
        <TodoCreater  callBackAddTask={this.callBackAddTask}/>

        <div className="searchBox">
          <i className="far fa-search searchBox__icon" aria-hidden="true" />
          <input type="text" className="searchBox__input js-search" defaultValue="" placeholder="something keyword" />
        </div>

        <TodoList data={this.state.data} callBackRemoveTask={this.callBackRemoveTask}/>

      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
