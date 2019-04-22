import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/style.css';

class Users extends Component{
    render(){
        return(
            <section id="blog" className="padd-section wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">
                            <div className="section-title">
                                <h2>Usuarios Registrados</h2>
                                <p className="separator">Directorio de Usuarios registrados en la Cartelera Digital</p>
                                <Link to="/signup" className="btn btn-success scrollto">Agregar Usuario</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="block-blog text-left">
                                <img src={require('../../images/user.png')} alt="user img"/>
                                <div className="content-blog text-center">
                                    <h4>Aldo Esaidt Peralta Maldonado</h4>
                                    <p>aldo.peralta09@gmail.com</p>
                                    <p>Secretaria de Cultura</p>
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

export default Users;