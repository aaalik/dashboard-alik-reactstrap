import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Dashboard extends Component {
  
  render() {
    console.log('props db', this.props.data);
    const allRows = this.props.data.map((number, i)=>
      <tr key={i}>
        <td>{number.no}</td>
        <td>{number.nama}</td>
        <td>{number.rekening}</td>
      </tr>
    );
    console.log('allrows', allRows);
    return(
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>
        </div>
        <h2>Section Title</h2>
        <div className="table-responsive">
          <Table size="sm" striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Rekening</th>
              </tr>
            </thead>
            <tbody>
              {allRows}
            </tbody>
          </Table>
        </div>
      </main>
    );
  }
}

export default Dashboard;
