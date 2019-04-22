import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-cal">
                    <div className="container">
                        <a href="http://www.hidalgo.gob.mx/" className="navbar-brand gobbrand" title="Ir a la página inicial">
                            <img alt="gob.mx" src="http://cdn.hidalgo.gob.mx/logo_gobhidalgo.svg"/>
                        </a>
                        <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item active">
                                    <a className="nav-link" href="#">Transparencia <span className="sr-only">(current)</span></a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="http://ruts.hidalgo.gob.mx/">Trámites y Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://gobierno.hidalgo.gob.mx/">Gobierno</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://estado.hidalgo.gob.mx/">Estado</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://www.hidalgo.gob.mx/#buzon">Buzón Ciudadano</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar2">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <div className="logosecretaria"></div>
                            <div className="nombresecretaria">
                                <strong>Cartelera Digital</strong>
                            </div>
                        </Link>
                        <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown2" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown2">
                            <ul className="navbar-nav">
                                <li><Link className="nav-link" to="/signup">Registrate</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;