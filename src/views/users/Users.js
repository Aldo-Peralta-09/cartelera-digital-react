import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../css/style.css';
import {GET_USERS_ACTION} from '../../redux/actions/ActionType';
import { connect } from 'react-redux';

class Users extends Component{

    componentDidMount(){
        this.props.getUsers();
    }

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
                        {this._renderUsers()}
                    </div>
                </div>
            </section>
        );
    }

    _renderUsers = () => {
        return this.props.stateUsers.map((user) => {
            if(user){
                return(
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="block-blog text-left">
                            <img src={require('../../images/user.png')} alt="user img"/>
                            <div className="content-blog text-center">
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                                <p>{user.dependency}</p>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-info">Editar</button>
                                    <button type="button" className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            return null;
        });
    }
}

const mapStateToProps = ({stateUsers}) => {
    return {
        stateUsers: stateUsers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(GET_USERS_ACTION())
    };
};

const ConnectUsers = connect(mapStateToProps,mapDispatchToProps)(Users);

export default ConnectUsers;