import React, {Component} from 'react';
import { UPDATE_USER_ACTION, GET_USER_ACTION } from '../../redux/actions/users/ActionType';
import { connect } from 'react-redux';

class UpdateUser extends Component{

    componentWillMount(){
        const {id} = this.props.match.params;
        console.log(id);
        this.props.getUser(id);
    }

    _getData(){
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const dependency = this.refs.dependency.value;
        const password = this.refs.password.value;
        this.props.updateUser(name,email,dependency,password);
    }

    render(){
        return(
            <section className="wow fadeIn">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form-title" style={{backgroundImage:"url(" + require('../../images/culture.jpg') + ")"}}>
                                <span className="login100-form-title-1">Actualizar</span>
                            </div>

                            <div className="text-center" style={{paddingTop:"15px"}}>
                                <img src={require('../../images/cartelera.png')} className="rounded" alt="Cartelera Logo"/>
                            </div>

                            <div className="login100-form validate-form">
                                <div className="wrap-input100 validate-input m-b-26" data-validate="Correo electrónico es requerido">
                                    <span className="label-input100">Nombre</span>
                                    <input className="input100" type="text" ref="name" defaultValue={this.props.stateUser.name} required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" data-validate="Correo electrónico es requerido">
                                    <span className="label-input100">Email</span>
                                    <input className="input100" type="email" ref="email" defaultValue={this.props.stateUser.email} required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-26" style={{paddingTop:"15px"}} data-validate="Dependencia es requerido">
                                    <span className="label-input100">Dependencia</span>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Áreas</label>
                                        </div>
                                        <select className="custom-select input100" ref="dependency" required id="inputGroupSelect01">
                                            <option defaultValue={this.props.stateUser.dependency}> {this.props.stateUser.dependency}</option>
                                            <option defaultValue="Despacho del Secretario">Despacho del Secretario</option>
                                            <option defaultValue="Innovación y Emprendimiento Cultural">Innovación y Emprendimiento Cultural</option>
                                            <option defaultValue="Patrimonio Cultural">Patrimonio Cultural</option>
                                            <option defaultValue="Centro de las Artes">Centro de las Artes</option>
                                            <option defaultValue="Museos">Museos</option>
                                            <option defaultValue="Biblioteca Ricardo Garibay">Biblioteca Ricardo Garibay</option>
                                            <option defaultValue="Bibliotecas">Bibliotecas</option>
                                            <option defaultValue="Arte Popular">Arte Popular</option>
                                            <option defaultValue="Fomento Editorial">Fomento Editorial</option>
                                            <option defaultValue="Organizador Independiente">Organizador Independiente</option>
                                        </select>
                                    </div>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-18" data-validate = "La contraseña es requerida">
                                    <span className="label-input100">Nueva Contraseña</span>
                                    <input className="input100" type="password" ref="password" required minLength="8"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" onClick={this._getData.bind(this)}>
                                        Actualizar Datos
                                    </button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({stateUser,responseUpdateUser}) => {
    return {
        stateUser: stateUser,
        responseUpdateUser: responseUpdateUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => dispatch(GET_USER_ACTION(id)),
        updateUser: (name,email,dependency,password) => dispatch(UPDATE_USER_ACTION(name,email,dependency,password))
    };
};

const ConnectUpdateUser = connect(mapStateToProps,mapDispatchToProps)(UpdateUser);

export default ConnectUpdateUser;