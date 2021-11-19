import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AlumnoTableRow from './AlumnoTableRow';


export default class AlumnoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      alumnos: []
    };
  }

  componentDidMount() {
    axios.get('https://localhost/api/alumnos/')
      .then(res => {
        this.setState({
          alumnos: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.alumnos.map((res, i) => {
      return <AlumnoTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}