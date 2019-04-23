import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/style.css';

class Events extends Component{
    render(){
        return(
            <section id="blog" className="padd-section wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            <div className="section-title">
                                <h2>Eventos Registrados</h2>
                                <p className="separator">Catalogo de Eventos registrados en la Cartelera Digital</p>
                                <div style={{paddingTop:"15px"}}><Link to="/add-event" className="btn btn-success scrollto">Agregar Evento</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-lg-4">
                            <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                                <img src={require('../../images/egipto.jpg')} alt="user img"/>
                                <div className="content-blog text-center">
                                    <h4>Egipto en el Mundo</h4>
                                    <p>27/04/2019 13:00 PM</p>
                                    <p>Centro Cultural del Ferrocarril</p>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-info">Editar</button>
                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                                <img src={require('../../images/egipto.jpg')} alt="user img"/>
                                <div className="content-blog text-center">
                                    <h4>Egipto en el Mundo</h4>
                                    <p>27/04/2019 13:00 PM</p>
                                    <p>Centro Cultural del Ferrocarril</p>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-info">Editar</button>
                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                                <img src={require('../../images/egipto.jpg')} alt="user img"/>
                                <div className="content-blog text-center">
                                    <h4>Egipto en el Mundo</h4>
                                    <p>27/04/2019 13:00 PM</p>
                                    <p>Centro Cultural del Ferrocarril</p>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-info">Editar</button>
                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                                <img src={require('../../images/egipto.jpg')} alt="user img"/>
                                <div className="content-blog text-center">
                                    <h4>Egipto en el Mundo</h4>
                                    <p>27/04/2019 13:00 PM</p>
                                    <p>Centro Cultural del Ferrocarril</p>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-info">Editar</button>
                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="block-blog text-left" style={{paddingBottom:"15px"}}>
                                <img src={require('../../images/egipto.jpg')} alt="user img"/>
                                <div className="content-blog text-center">
                                    <h4>Egipto en el Mundo</h4>
                                    <p>27/04/2019 13:00 PM</p>
                                    <p>Centro Cultural del Ferrocarril</p>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-info">Editar</button>
                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Events;