import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditAlumno extends Component {

  constructor(props) {
    super(props)

    this.onChangeAlumnoName = this.onChangeAlumnoName.bind(this);
    this.onChangeAlumnoApellido = this.onChangeAlumnoApellido.bind(this);
    this.onChangeAlumnoCurso = this.onChangeAlumnoCurso.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      apellido: '',
      curso: ''
    }
  }

  componentDidMount() {
    axios.get('https://localhost/api/alumnos/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          apellido: res.data.apellido,
          curso: res.data.curso
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeAlumnoName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeAlumnoApellido(e) {
    this.setState({ apellido: e.target.value })
  }

  onChangeAlumnoCurso(e) {
    this.setState({ curso: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const alumnoObject = {
      name: this.state.name,
      apellido: this.state.apellido,
      curso: this.state.curso
    };

    axios.put('https://localhost/api/alumnos/' + this.props.match.params.id, alumnoObject)
      .then((res) => {
        console.log(res.data)
        console.log('Alumno successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Alumno List 
    this.props.history.push('/alumnos-listing')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeAlumnoName} />
        </Form.Group>

        <Form.Group controlId="Apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="number" value={this.state.apellido} onChange={this.onChangeAlumnoApellido} />
        </Form.Group>

        <Form.Group controlId="Curso">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" value={this.state.curso} onChange={this.onChangeAlumnoCurso} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Alumno
        </Button>
      </Form>
    </div>);
  }
}