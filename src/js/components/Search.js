import React from 'react';

export default class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      val: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      val: e.target.value
    });
    this.props.callBackSearch(e.target.value);
  }
  render(){
    return (
      <div className="searchBox">
        <i className="far fa-search searchBox__icon" aria-hidden="true" />
        <input type="text" className="searchBox__input js-search" value={this.state.val} onChange={this.handleChange} placeholder="something keyword" />
      </div>
    );
  }
} 