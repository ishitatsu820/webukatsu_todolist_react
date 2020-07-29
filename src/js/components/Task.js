import React from 'react';
import classNames from 'classnames';

export default class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      text: this.props.text,
      isDone: false,
      editMode: false
    };
    this.handleClickToggleDone = this.handleClickToggleDone.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
    this.handleClickShowEdit = this.handleClickShowEdit.bind(this);
    this.handleKeyUpCloseEdit = this.handleKeyUpCloseEdit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }
  handleChangeText(e){
    this.setState({
      text: e.target.value
    });
  }

  handleClickToggleDone(){
    this.setState (prevState => ({
      isDone: !prevState.isDone
    }));
  }
  handleClickRemove(e){
    this.props.onRemove(this.state.id);
  }
  handleClickShowEdit(){
    this.setState({
      editMode: true
    });
  }
  handleKeyUpCloseEdit(e){
    if(e.KeyCode === 13 && e.shiftKey === true)
    this.setState({
      editmode: false,
      text: e.currentTarget.value
    });
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  render(){
    const classNameLi = classNames({
      'list__item': true,
      'list__item--done': this.state.isDone
    });
    const classNameIcon = classNames({
      'far': true,
      'fa-circle': !this.state.isDone,
      'fa-check-circle': this.state.isDone,
      'icon-check': true
    });
    const input = (this.state.editMode) ?
      <input type="text" className="edittext" value={this.state.text} onChange={this.handleChangeText}
        onKeyUp={this.handleKeyUpCloseEdit} /> :
      <span onChange={this.handleClickShowEdit} >{this.state.text}</span>;

    return (
      <li className={classNameLi}>
        <i className={classNameIcon} onClick={this.handleClickToggleDone} aria-hidden="true" />
        {input}
        <i className="far fa-trash-alt icon-trash" onClick={this.handleClickRemove} aria-hidden="true" />
      </li>
    );
  }
}