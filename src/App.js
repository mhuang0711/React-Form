import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import TableList from './TableList.json'
import Form from './Form'

class App extends Component {
  state = {
    tableData: TableList,
    fetchData: []
  }
  componentDidMount() {
    fetch('https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*')
      .then(response => response.json())
      .then(data => {
        this.setState({
          fetchData: data
        })
      })
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
    const { tableData, fetchData } = this.state
    return (
      <div className="App">
        <Table tableData={tableData} removeRow={this.removeRow} />
        <Form handleSubmit={this.handleSubmit} />
        <List fetchData={fetchData} />
      </div>
    );
  }
}
const List = props => {
  const liList = props.fetchData.map((val, index) => {
    return (
      <li key={index}>
        {val}
      </li>
    )
  })
  return (
    <ul>{liList}</ul>
  )

}
export default App;
