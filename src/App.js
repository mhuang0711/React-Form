import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import TableList from './TableList.json'
import Form from './Form'

class App extends Component {
  state = {
    tableData: TableList
  }
  removeRow = index => {
    const { tableData } = this.state;
    this.setState({
      tableData: tableData.filter((data, i) => {
        return i !== index;
      })
    })
  }
  handleSubmit = newRow => {
    this.setState({
      tableData: [...this.state.tableData, newRow]
    })
  }
  render() {
    const { tableData } = this.state
    return (
      <div className="App">
        <Table tableData={tableData} removeRow={this.removeRow} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
