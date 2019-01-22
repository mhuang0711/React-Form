import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initData = {
      name: '',
      age: ''
    }

    this.state = this.initData;
  }
  handleSubmit = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initData)
  }
  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value
    })
  }
  render() {
    const { name, age } = this.state
    return (
      <form>
        <input type="text" name="name" value={name} onChange={this.handleChange}></input>
        <input type="text" name="age" value={age} onChange={this.handleChange}></input>
        <input type="button" value="submit" onClick={this.handleSubmit}></input>
      </form>
    )
  }
}

export default Form;