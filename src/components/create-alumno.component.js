import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import AlumnosList from './alumnos-listing.component';
import Swal from 'sweetalert2';


export default class CreateAlumno extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAlumnoName = this.onChangeAlumnoName.bind(this);
    this.onChangeAlumnoApellido = this.onChangeAlumnoApellido.bind(this);
    this.onChangeAlumnoCurso = this.onChangeAlumnoCurso.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      apellido: '',
      curso: ''
    }
  }

  onChangeAlumnoName(e) {
    this.setState({name: e.target.value})
  }

  onChangeAlumnoApellido(e) {
    this.setState({apellido: e.target.value})
  }

  onChangeAlumnoCurso(e) {
    this.setState({curso: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const alumno = {
      name: this.state.name,
      apellido: this.state.apellido,
      curso: this.state.curso
    };
    axios.post('http://127.0.0.1:8000/alumnos/', alumno)
      .then(res => console.log(res.data));
    // console.log(`Alumno successfully created!`);
    Swal.fire(
  'Good job!',
  'Alumno Added Successfully',
  'success'
)

    this.setState({name: '', apellido: '', curso: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onChangeAlumnoName}/>
             </Form.Group>
            
            </Col>
            
            <Col>
             <Form.Group controlId="Apellido">
                <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" value={this.state.apellido} onChange={this.onChangeAlumnoApellido}/>
             </Form.Group>
            </Col>  
           
        </Row>
            

        <Form.Group controlId="Curso">
          <Form.Label>Curso</Form.Label>
                <Form.Control type="text" value={this.state.curso} onChange={this.onChangeAlumnoCurso}/>
        </Form.Group>

       
        <Button variant="primary" size="lg" block="block" type="submit">
          Agregar Alumno
        </Button>
      </Form>
      <br></br>
      <br></br>

      <AlumnosList> </AlumnosList>
    </div>);
  }
}




