import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditAlumno from "./components/edit-alumno.component";
import AlumnosList from "./components/alumnos-listing.component";
import CreateAlumno from "./components/create-alumno.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="success" variant="success">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-alumno"} className="nav-link">
              Alumno manager
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-alumno"} className="nav-link">
                  Create Alumno
                </Link>
                <Link to={"/alumnos-listing"} className="nav-link">
                  Alumnos List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateAlumno} />
                <Route path="/create-alumno" component={CreateAlumno} />
                <Route path="/edit-alumno/:id" component={EditAlumno} />
                <Route path="/alumnos-listing" component={AlumnosList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;