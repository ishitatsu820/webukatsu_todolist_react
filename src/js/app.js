import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import TodoList from './components/TodoList';
import TodoCreater from './components/TodoCreater';
import Search from './components/Search';

class TodoApp extends React.Component {

  constructor(){
    super();
    this.state = {
      data: [
        {
          id: this.createId(),
          text: 'aaa'
        },
        {
          id: this.createId(),
          text: 'aab'
        },
        {
          id: this.createId(),
          text: 'as'
        },
        {
          id: this.createId(),
          text: 'aaaaah'
        },
        {
          id: this.createId(),
          text: 'sample01'
        },
        {
          id: this.createId(),
          text: 'asssss'
        }
      ],
      searchText: ''
    }
    this.callBackRemoveTask = this.callBackRemoveTask.bind(this);
    this.callBackAddTask = this.callBackAddTask.bind(this);
    this.callBackSearch = this.callBackSearch.bind(this);
    this.fillterCollection = this.fillterCollection.bind(this);
    
  }
  createId(){
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

  callBackSearch(val){
    this.setState({
      searchText: val
    });
  }
  fillterCollection(elm){
    const regexp = new RegExp('^' + this.state.searchText, 'i');
    return (elm.text.match(regexp));
  }
  render() {
    
    const data = (this.state.searchText) ? this.state.data.filter(this.fillterCollection) : this.state.data;
    return (
      <div>
        <TodoCreater  callBackAddTask={this.callBackAddTask}/>

        <Search callBackSearch={this.callBackSearch} />

        <TodoList data={data} callBackRemoveTask={this.callBackRemoveTask}/>

      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
