import React, { useState, Component } from "react";

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from 'react-bootstrap/Card'

const Ejemplodesaparecer = ({ children }) => {
    const [mostrar, toggleShow] = useState(true);

    const checkState = () => {
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


export class Home extends Component {

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
                <Container className="p-3">
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
                </Container>

            </div>
        )
    }
}
