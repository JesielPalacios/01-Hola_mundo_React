import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'

import './App.css';


const ExampleToast = ({ children }) => {
  const [mostrar, toggleShow] = useState(true);

  return (
    <>
      {!mostrar && <Button className="btn btn-block" onClick={() => toggleShow(true)}>Mostrar/Ocultar</Button>}
      <Toast show={mostrar} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

export class App extends React.Component {

  frase = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  };
  
  personajes = ['Spiderman', 'Venom', 'Dr. Octopus'];
  
  countPersonajes() {
    return this.personajes.length;
  }

    render() {
      return (
        <div>
              {/* <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Navbar> */}

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


          <Container className="p-3">
          {/* <Container> */}
            {/* <Jumbotron> */}
              <br />
                <div className="row">
                <div className="col">
                  <h1>*ngIf</h1>
                  <hr />
                  <ExampleToast>
                    <h5 className="card-tittle"> { this.frase.autor }
                    </h5>
                    <p class="card-text"> { this.frase.mensaje }
                    </p>
                  </ExampleToast>
                </div>
                <div className="col">
                  <h1>*ngFor</h1>
                  <hr />
                  {/* <h1>Personajes</h1> */}
                  {/* <h3>
                      {this.countPersonajes()}
                  </h3> */}
                  {/* <ul>
                      {this.personajes.map((personaje, index) => (
                          <li key={index}>{personaje}</li>
                      ))}
                  </ul> */}
                  <ListGroup>
                  {this.personajes.map((personaje, index) => (
                          <ListGroup.Item key={index}>{personaje}</ListGroup.Item>
                      ))}
                  </ListGroup>
                </div>
              </div>
            {/* </Jumbotron> */}
          </Container> 
        </div>      
      )
  }
}
