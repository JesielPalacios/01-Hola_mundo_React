import React, { useState } from "react";

import { Footer } from "./components/Footer";

// import Jumbotron from "react-bootstrap/Jumbotron";
// import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import {FormControl} from "react-bootstrap";
// import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Card from 'react-bootstrap/Card'


import "./css/App.css";

// const ExampleToast = ({ children }) => {
//   const [mostrar, toggleShow] = useState(true);

//   return (
//     <>
//       {!mostrar && (
//         <Button className="btn btn-block" onClick={() => toggleShow(true)}>
//           Mostrar/Ocultar
//         </Button>
//       )}
//       <Toast show={mostrar} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };




const Ejemplodesaparecer = ({ children }) => {
  const [mostrar, toggleShow] = useState(true);
  
  const checkState = () => {
    // if (mostrar === false) {
    //   toggleShow(true);
    // } else {
    //   toggleShow(false);
    // }
    if (mostrar) {
      toggleShow(false);
    } else {
      toggleShow(true);
    }
  }

  return (
    <>
      {!mostrar && (
        <div>
          {children}
          {/* <Button variant="outline-primary" className="btn btn-block" onClick={() => toggleShow(true)}>
            Mostrar/Ocultar
          </Button> */}
        </div>
      )}
      <div show={mostrar} onClose={() => toggleShow(false)}>
        {/* <Toast.Body>{children}</Toast.Body> */}
        {/* <Button variant="outline-primary"className="btn btn-block" onClick={() => toggleShow(false)}> */}
        <Button variant="outline-primary"className="btn btn-block" onClick={() => checkState()}>
          Mostrar/Ocultar
        </Button>
      </div>
    </>
  );
};




export class App extends React.Component {
  frase = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  };

  personajes = ["Spiderman", "Venom", "Dr. Octopus"];

  countPersonajes() {
    return this.personajes.length;
  }

  render() {
    return (
      <div>
        {/* <Navbar bg="light" expand="lg"> */}
        {/* bg="dark" expand="navbar-lg" */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
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
              {
                <Ejemplodesaparecer>
                  <Card
                  bg={'primary'}
                  text={'light'}
                  // style={{ width: '18rem' }}
                  className="mb-2"
                  >
                    {/* <Card.Header>Header</Card.Header> */}
                    <Card.Body>
                      <Card.Title> {this.frase.autor} </Card.Title>
                      <Card.Text> {this.frase.mensaje} </Card.Text>
                    </Card.Body>
                  </Card>
                </Ejemplodesaparecer>
              }

              {/* {
                [
                  'Primary',
                  'Secondary',
                  'Success',
                  'Danger',
                  'Warning',
                  'Info',
                  'Light',
                  'Dark',
                ].map((variant, idx) => (
                  <Card
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                  >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>{variant} Card Title </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              } */}
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
                  // <ListGroup.Item variant="flush" key={index}>
                  <ListGroup.Item key={index}>
                  {index + 1} - {personaje}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
          {/* </Jumbotron> */}
        </Container>
        <Footer />
      </div>
    );
  }
}
