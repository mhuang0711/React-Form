import React, { Component } from 'react';


class Table extends Component {
  render() {
    const { tableData, removeRow } = this.props;
    return (
      <table>
        <Theader />
        <Tbody tableData={tableData} removeRow={removeRow} />
      </table>
    )
  }
}

const Theader = () => {
  return (<thead>
    <tr>
      <th>test3</th>
      <th>test4</th>

    </tr>

  </thead>)
}

const Tbody = props => {
  const rows = props.tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>
          <button onClick={() => props.removeRow(index)}>Delete</button>
        </td>
      </tr>
    )
  });

  return <tbody>{rows}</tbody>;
}

export default Table;