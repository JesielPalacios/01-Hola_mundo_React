import React, { Component } from 'react'

// var fecha = new Date();
var anio = new Date().getFullYear()

export class Footer extends Component {
    
    render() {
        return (
            <div>
                <footer className="footer bg-light text-center">
                    <div className="container">
                    <p>
                        {/* &copy; {{ anio }} Pepito Perez */}
                        &copy; {anio} Pepito Perez
                    </p>
                    </div>
                </footer>
            </div>
        )
    }
}
