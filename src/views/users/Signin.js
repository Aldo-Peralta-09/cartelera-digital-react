import React, {Component} from 'react';
import '../../css/forms.css';
import { connect } from 'react-redux';
import {LOGIN_ACTION} from '../../redux/actions/users/ActionType';

class Signin extends Component{

    _getData(){
        let data = new FormData();
        data.append('email',this.refs.email.value);
        data.append('password',this.refs.password.value);
        this.props.login(data);
    }

    render(){
        return(
            <section className="wow fadeIn">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form-title" style={{backgroundImage:"url(" + require('../../images/culture.jpg') + ")"}}>
                                <span className="login100-form-title-1">Iniciar Sesión</span>
                            </div>

                            <div className="text-center" style={{paddingTop:"15px"}}>
                                <img src={require('../../images/cartelera.png')} className="rounded" alt="Cartelera Logo"/>
                            </div>

                            <form className="login100-form validate-form">
                                <div className="wrap-input100 validate-input m-b-26" data-validate="Correo electrónico es requerido">
                                    <span className="label-input100">Email</span>
                                    <input className="input100" type="email" ref="email"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-18" data-validate = "La contraseña es requerida">
                                    <span className="label-input100">Contraseña</span>
                                    <input className="input100" type="password" ref="password"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <input className="login100-form-btn" onClick={this._getData.bind(this)} type="submit"></input>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({responseLogin}) => {
    return {
        responseLogin:responseLogin
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(LOGIN_ACTION(data))
    }
}

const ConnectSignin = connect(mapStateToProps,mapDispatchToProps)(Signin);

export default ConnectSignin;