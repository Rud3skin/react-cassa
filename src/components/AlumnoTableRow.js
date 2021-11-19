import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class AlumnoTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteAlumno = this.deleteAlumno.bind(this);
    }

    deleteAlumno() {
        axios.delete('https://localhost/api/alumnos/' + this.props.obj.id)
            .then((res) => {
                console.log('Alumno removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.apellido}</td>
                <td>{this.props.obj.curso}</td>
                <td>
                    <Link className="edit-link" to={"/edit-alumno/" + this.props.obj.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteAlumno} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}